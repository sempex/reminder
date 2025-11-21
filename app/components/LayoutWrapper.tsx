'use client'

import { usePathname } from 'next/navigation'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Don't add bottom padding on auth pages (no navbar there)
  const isAuthPage = pathname?.startsWith('/auth/')

  return (
    <div className={isAuthPage ? '' : 'pb-32'}>
      {children}
    </div>
  )
}
