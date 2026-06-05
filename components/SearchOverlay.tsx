'use client'

import Fuse from 'fuse.js'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useRef, useState } from 'react'

interface SearchNote {
  id: string
  title: string
  tags: string[]
  excerpt: string
  type: string
}

export default function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [notes, setNotes] = useState<SearchNote[]>([])
  const [activeIdx, setActiveIdx] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    fetch('/api/search').then((response) => response.json()).then(setNotes)
    const id = window.setTimeout(() => inputRef.current?.focus(), 20)
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => {
      window.clearTimeout(id)
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  const results = useMemo(() => {
    if (!query.trim()) return notes.slice(0, 8)
    const fuse = new Fuse(notes, { keys: ['title', 'tags', 'excerpt', 'type'], threshold: 0.35 })
    return fuse.search(query).slice(0, 8).map((result) => result.item)
  }, [notes, query])

  useEffect(() => setActiveIdx(0), [query])

  const goTo = (id: string) => {
    router.push(`/note/${id}`)
    onClose()
  }

  const onInputKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActiveIdx((idx) => Math.min(idx + 1, results.length - 1))
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveIdx((idx) => Math.max(idx - 1, 0))
    }
    if (event.key === 'Enter' && results[activeIdx]) {
      event.preventDefault()
      goTo(results[activeIdx].id)
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[15vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        onMouseDown={(event) => event.target === event.currentTarget && onClose()}
      >
        <div className="absolute inset-0 bg-palace-bg/75 backdrop-blur-sm" />
        <motion.div
          className="relative w-full max-w-xl overflow-hidden rounded-lg border border-palace-border bg-palace-surface shadow-2xl"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="flex items-center gap-3 border-b border-palace-border px-4 py-3">
            <input
              ref={inputRef}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={onInputKeyDown}
              placeholder="Search notes..."
              className="flex-1 bg-transparent text-sm text-palace-text outline-none placeholder:text-palace-muted"
            />
            <button type="button" onClick={onClose} className="btn-press text-palace-muted hover:text-palace-text">
              <X size={16} />
            </button>
          </div>
          <ul className="max-h-96 overflow-y-auto py-2">
            {results.map((note, idx) => (
              <li key={note.id}>
                <button
                  type="button"
                  onClick={() => goTo(note.id)}
                  className={`w-full px-4 py-3 text-left transition-colors duration-150 ${
                    idx === activeIdx ? 'bg-palace-border/75 text-palace-text' : 'text-palace-muted hover:bg-palace-border/35 hover:text-palace-text'
                  }`}
                >
                  <div className="font-display text-base text-palace-text">{note.title}</div>
                  <div className="mt-0.5 truncate text-xs text-palace-muted">{note.excerpt}</div>
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
