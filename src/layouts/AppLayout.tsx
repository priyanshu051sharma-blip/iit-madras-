'use client'

import React, { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { cn } from '@/lib/utils'

interface LayoutProps {
  children: ReactNode
  isDark: boolean
  onToggleDark: () => void
}

export function AppLayout({ children, isDark, onToggleDark }: LayoutProps) {
  const pathname = usePathname()

  return (
    <div className={cn('flex h-screen bg-dark-50 dark:bg-dark-900', isDark && 'dark')}>
      <Sidebar currentPath={pathname} />

      <div className="flex flex-1 flex-col overflow-hidden lg:ml-0">
        <Header isDark={isDark} onToggleDark={onToggleDark} />

        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
