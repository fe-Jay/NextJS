'use client'

import { usePathname } from 'next/navigation'

export default function Layout({
  children,
}: {
  children: React.ReactNode
  }) {
  const path = usePathname();
  return (
    <>
      {children}
      <p>&copy; About {path}</p>
    </>
  )
}
