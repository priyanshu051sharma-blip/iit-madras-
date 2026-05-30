const CACHE_NAME = 'drivelegal-static-v1'
const OFFLINE_URLS = ['/', '/favicon.ico', '/_next/static/', '/index.html']

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(OFFLINE_URLS).catch(() => {})
    })
  )
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return
  const url = new URL(request.url)
  // Only handle same-origin navigations and static assets
  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached
        return fetch(request)
          .then((response) => {
            // put a copy in cache for future
            const respClone = response.clone()
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, respClone)
            })
            return response
          })
          .catch(() => caches.match('/'))
      })
    )
  }
})

self.addEventListener('message', (event) => {
  if (!event.data) return
  if (event.data === 'skipWaiting') {
    self.skipWaiting()
  }
})

// Helper: open IndexedDB and read outbox
function openIDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('mvapp-offline-db')
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
    req.onupgradeneeded = () => {
      const db = req.result
      if (!db.objectStoreNames.contains('outbox')) db.createObjectStore('outbox', { keyPath: 'cid', autoIncrement: true })
      if (!db.objectStoreNames.contains('laws')) db.createObjectStore('laws', { keyPath: 'id' })
    }
  })
}

async function syncOutbox() {
  try {
    const db = await openIDB()
    const tx = db.transaction('outbox', 'readonly')
    const store = tx.objectStore('outbox')
    const getAllReq = store.getAll()
    const items = await new Promise((res, rej) => {
      getAllReq.onsuccess = () => res(getAllReq.result)
      getAllReq.onerror = () => rej(getAllReq.error)
    })

    if (!items || items.length === 0) return

    const resp = await fetch('/api/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items }),
    })

    if (resp && resp.ok) {
      // clear outbox
      const tx2 = db.transaction('outbox', 'readwrite')
      tx2.objectStore('outbox').clear()
      await new Promise((res) => (tx2.oncomplete = res))
    }
  } catch (e) {
    console.warn('Background sync failed', e)
  }
}

self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-outbox') {
    event.waitUntil(syncOutbox())
  }
})
