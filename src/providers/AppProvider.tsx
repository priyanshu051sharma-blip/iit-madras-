'use client'

import React, { useEffect, useState } from 'react'
import { AppLayout } from '@/layouts/AppLayout'

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const saved = localStorage.getItem('theme')
    const theme = saved || (prefersDark ? 'dark' : 'light')
    setIsDark(theme === 'dark')
  }, [])

  const handleToggleDark = () => {
    const newTheme = !isDark ? 'dark' : 'light'
    setIsDark(!isDark)
    localStorage.setItem('theme', newTheme)
  }

  if (!mounted) {
    return null
  }

  return (
    <AppLayout isDark={isDark} onToggleDark={handleToggleDark}>
      {children}
    </AppLayout>
  )
}
