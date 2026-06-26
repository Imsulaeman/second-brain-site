'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import type { Note } from '@/lib/notes'
import { roomByPlural } from '@/lib/rooms'
import { useEffect, useMemo, useRef, useState } from 'react'

export default function RoomGrid({ notes, type }: { notes: Note[]; type: string }) {
  const room = roomByPlural(type)
  const [tag, setTag] = useState('all')
  const [open, setOpen] = useState(false)
  const [tagQuery, setTagQuery] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  const tags = useMemo(() => {
    return Array.from(new Set(notes.flatMap((note) => note.tags))).sort((a, b) => a.localeCompare(b))
  }, [notes])

  const tagCounts = useMemo(() => {
    const counts = new Map<string, number>()
    for (const note of notes) {
      for (const noteTag of note.tags) {
        counts.set(noteTag, (counts.get(noteTag) ?? 0) + 1)
      }
    }
    return counts
  }, [notes])

  const filteredTags = useMemo(() => {
    const q = tagQuery.trim().toLowerCase()
    if (!q) return tags
    return tags.filter((item) => item.toLowerCase().includes(q))
  }, [tags, tagQuery])

  function closeDropdown() {
    setOpen(false)
    setTagQuery('')
  }

  function selectTag(next: string) {
    setTag(next)
    closeDropdown()
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        closeDropdown()
      }
    }
    if (open) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  useEffect(() => {
    if (open) searchRef.current?.focus()
  }, [open])

  const filtered = tag === 'all' ? notes : notes.filter((note) => note.tags.includes(tag))
  const gridClass = filtered.length < 6 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'
  const label = tag === 'all' ? `All (${notes.length})` : tag

  if (!room) return null

  return (
    <main className="pb-24 pt-16 sm:pb-16">
      <section className={`relative h-[360px] overflow-hidden ${room.fallbackClass}`}>
        <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: `url(${room.image})` }} />
        <div className="absolute inset-0 bg-palace-bg/62" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8">
          <div className={`mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.22em] ${room.colorClass}`}>
            <room.icon size={22} weight="light" />
            {room.kicker}
          </div>
          <h1 className="font-display text-5xl text-palace-text md:text-7xl">{room.title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-palace-muted md:text-lg">{room.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="btn-press flex items-center gap-2 rounded-md border border-palace-border bg-palace-surface/60 px-3 py-1.5 text-xs text-palace-text transition-colors duration-200 hover:border-palace-gold/60"
            >
              <span className="font-mono uppercase tracking-[0.14em] text-palace-muted">Filter</span>
              <span className={tag !== 'all' ? 'text-palace-gold' : 'text-palace-text'}>{label}</span>
              <svg
                className={`h-3 w-3 text-palace-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"
              >
                <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.14 }}
                  className="absolute left-0 top-full z-50 mt-1.5 min-w-[220px] max-w-[300px] rounded-lg border border-palace-border bg-palace-surface shadow-[0_8px_32px_rgba(4,8,20,0.5)]"
                >
                  <div className="border-b border-palace-border/60 p-2">
                    <input
                      ref={searchRef}
                      type="search"
                      value={tagQuery}
                      onChange={(e) => setTagQuery(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Escape') closeDropdown()
                      }}
                      placeholder="Search tags…"
                      className="w-full rounded border border-palace-border bg-palace-bg/50 px-2.5 py-1.5 text-xs text-palace-text placeholder:text-palace-muted/60 focus:border-palace-gold/50 focus:outline-none"
                    />
                  </div>
                  <div className="max-h-[320px] overflow-y-auto p-1.5 [scrollbar-width:thin] [scrollbar-color:#2a3550_transparent]">
                    <button
                      type="button"
                      onClick={() => selectTag('all')}
                      className={`w-full rounded px-3 py-2 text-left text-xs transition-colors duration-150 ${
                        tag === 'all' ? 'bg-palace-gold/10 text-palace-gold' : 'text-palace-muted hover:bg-palace-border/30 hover:text-palace-text'
                      }`}
                    >
                      All <span className="ml-1 text-palace-muted/60">{notes.length}</span>
                    </button>
                    {filteredTags.length === 0 ? (
                      <p className="px-3 py-2 text-xs text-palace-muted">No tags match</p>
                    ) : (
                      filteredTags.map((item) => (
                        <button
                          type="button"
                          key={item}
                          onClick={() => selectTag(item)}
                          className={`w-full rounded px-3 py-2 text-left text-xs transition-colors duration-150 ${
                            tag === item ? 'bg-palace-gold/10 text-palace-gold' : 'text-palace-muted hover:bg-palace-border/30 hover:text-palace-text'
                          }`}
                        >
                          <span className="break-all">{item}</span>
                          <span className="ml-1 text-palace-muted/60">{tagCounts.get(item)}</span>
                        </button>
                      ))
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {tag !== 'all' && (
            <button
              type="button"
              onClick={() => setTag('all')}
              className="text-xs text-palace-muted transition-colors hover:text-palace-text"
            >
              Clear
            </button>
          )}
        </div>

        <motion.div
          className={`mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 ${gridClass}`}
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
        >
          {filtered.map((note) => (
            <motion.article
              key={note.id}
              variants={{
                hidden: { opacity: 0, y: 16, scale: 0.98 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            >
              <Link
                href={note.href}
                className="card-hover flex h-full flex-col rounded-lg border border-palace-border bg-palace-surface/80 p-5 hover:border-palace-gold/60 hover:shadow-insetGlow"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-display text-xl leading-tight text-palace-text">{note.title}</h2>
                  <span className={`shrink-0 rounded border px-2 py-1 text-[10px] uppercase tracking-[0.16em] ${room.borderClass} ${room.colorClass}`}>
                    {room.kicker}
                  </span>
                </div>
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-palace-muted">{note.excerpt}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {note.tags.slice(0, 4).map((noteTag) => (
                    <span key={noteTag} className="rounded border border-palace-border/80 px-2 py-1 text-xs text-palace-muted">
                      {noteTag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center justify-between pt-6 font-mono text-xs text-palace-muted">
                  <span>{note.created || 'undated'}</span>
                  <span>{note.sources} sources</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </main>
  )
}
