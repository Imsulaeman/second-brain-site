'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Books, Graph, House, Telescope, Wrench } from '@phosphor-icons/react'

const tabs = [
  { href: '/', icon: House, label: 'Home' },
  { href: '/sources', icon: Books, label: 'Library' },
  { href: '/concepts', icon: Wrench, label: 'Workshop' },
  { href: '/synthesis', icon: Telescope, label: 'Observatory' },
  { href: '/graph', icon: Graph, label: 'Graph' },
]

export default function MobileTabBar() {
  const pathname = usePathname()
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 flex border-t border-palace-border bg-palace-surface sm:hidden">
      {tabs.map(({ href, icon: Icon, label }) => {
        const active = pathname === href || (href !== '/' && pathname.startsWith(href))
        return (
          <Link
            key={href}
            href={href}
            className={`flex flex-1 flex-col items-center gap-1 py-3 text-xs transition-colors duration-200 ${
              active ? 'text-palace-gold' : 'text-palace-muted'
            }`}
          >
            <Icon size={20} weight={active ? 'fill' : 'light'} />
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
