'use client'

import React, { useState } from 'react'
import { Download, Upload, CheckCircle, Clock } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/Card'
import { Button } from '@/components/Button'
import { Badge } from '@/components/Badge'

export default function SyncPage() {
  const [isSyncing, setIsSyncing] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Offline Sync</h1>
        <p className="mt-1 text-dark-600 dark:text-dark-400">
          Synchronize data for offline access and reliability
        </p>
      </div>

      <Card>
        <CardHeader title="Sync Status" />
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-dark-50 p-4 dark:bg-dark-700">
              <p className="text-sm text-dark-600 dark:text-dark-400">Last Sync</p>
              <p className="mt-2 font-semibold">2 minutes ago</p>
            </div>
            <div className="rounded-lg bg-dark-50 p-4 dark:bg-dark-700">
              <p className="text-sm text-dark-600 dark:text-dark-400">Data Size</p>
              <p className="mt-2 font-semibold">245 MB</p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={() => setIsSyncing(true)}
              loading={isSyncing}
              icon={<Download size={16} />}
              className="flex-1"
            >
              Sync Now
            </Button>
            <Button variant="secondary" className="flex-1">
              <Upload size={16} />
              Upload Data
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Offline Content" subtitle="Data available for offline use" />
        <CardContent>
          <div className="space-y-3">
            {[
              { name: 'Traffic Laws (All States)', size: '45 MB', status: 'synced' },
              { name: 'Violation Database', size: '78 MB', status: 'synced' },
              { name: 'Enforcement Zones', size: '32 MB', status: 'synced' },
              { name: 'My Documents', size: '12 MB', status: 'synced' },
              { name: 'Challan History', size: '5 MB', status: 'synced' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border border-dark-200 p-3 dark:border-dark-700">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-xs text-dark-600 dark:text-dark-400">{item.size}</p>
                </div>
                <Badge variant="success">
                  <CheckCircle size={14} className="mr-1" />
                  {item.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Sync Settings" />
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="font-medium">Auto-sync enabled</label>
            <input type="checkbox" defaultChecked className="h-4 w-4" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Sync frequency</label>
            <select className="input">
              <option>Every hour</option>
              <option>Every 6 hours</option>
              <option>Every 24 hours</option>
              <option>Manual only</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Sync only on WiFi</label>
            <input type="checkbox" defaultChecked className="h-4 w-4" />
          </div>
          <Button>Save Settings</Button>
        </CardContent>
      </Card>
    </div>
  )
}
