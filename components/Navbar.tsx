'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import SearchOverlay from './SearchOverlay'

const links = [
  { href: '/sources', label: 'Library' },
  { href: '/concepts', label: 'Workshop' },
  { href: '/entities', label: 'Gallery' },
  { href: '/synthesis', label: 'Observatory' },
  { href: '/graph', label: 'Graph' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-palace-border/70 bg-palace-bg/86 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="font-display text-lg text-palace-text transition-colors duration-200 hover:text-palace-gold">
            Ilham&apos;s Second Brain
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const active = pathname === link.href || (link.href !== '/graph' && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3 py-2 text-sm transition-colors duration-200 ${
                    active ? 'text-palace-gold' : 'text-palace-muted hover:text-palace-text'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="btn-press flex items-center gap-2 rounded-md border border-palace-border bg-palace-surface/70 px-3 py-2 text-sm text-palace-muted transition-colors duration-200 hover:border-palace-blue/60 hover:text-palace-text"
          >
            <MagnifyingGlass size={16} weight="light" />
            <span className="hidden sm:inline">Search</span>
            <span className="hidden rounded border border-palace-border px-1.5 py-0.5 font-mono text-[10px] text-palace-muted lg:inline">
              Ctrl K
            </span>
          </button>
        </nav>
      </header>
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </>
  )
}
