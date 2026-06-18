'use client'

import Fuse from 'fuse.js'
import { AnimatePresence, motion } from 'framer-motion'
import { X, SpinnerGap } from '@phosphor-icons/react'
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
  const [semanticResults, setSemanticResults] = useState<SearchNote[] | null>(null)
  const [isSearching, setIsSearching] = useState(false)
  const [activeIdx, setActiveIdx] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    fetch('/api/search').then((r) => r.json()).then(setNotes)
    const id = window.setTimeout(() => inputRef.current?.focus(), 20)
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => {
      window.clearTimeout(id)
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  // Debounced semantic search
  useEffect(() => {
    setSemanticResults(null)
    if (query.trim().length < 3) return
    setIsSearching(true)
    const id = window.setTimeout(() => {
      fetch(`/api/search?q=${encodeURIComponent(query.trim())}`)
        .then((r) => r.json())
        .then((results) => setSemanticResults(results))
        .catch(() => setSemanticResults(null))
        .finally(() => setIsSearching(false))
    }, 400)
    return () => window.clearTimeout(id)
  }, [query])

  const fuseResults = useMemo(() => {
    if (!query.trim()) return notes.slice(0, 8)
    const fuse = new Fuse(notes, { keys: ['title', 'tags', 'excerpt'], threshold: 0.35 })
    return fuse.search(query).slice(0, 8).map((r) => r.item)
  }, [notes, query])

  const results = semanticResults ?? fuseResults

  useEffect(() => setActiveIdx(0), [results])

  const goTo = (id: string) => { router.push(`/note/${id}`); onClose() }

  const onInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIdx((i) => Math.min(i + 1, results.length - 1)) }
    if (e.key === 'ArrowUp') { e.preventDefault(); setActiveIdx((i) => Math.max(i - 1, 0)) }
    if (e.key === 'Enter' && results[activeIdx]) { e.preventDefault(); goTo(results[activeIdx].id) }
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[15vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        onMouseDown={(e) => e.target === e.currentTarget && onClose()}
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
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onInputKeyDown}
              placeholder="Search notes..."
              className="flex-1 bg-transparent text-sm text-palace-text outline-none placeholder:text-palace-muted"
            />
            {isSearching && (
              <SpinnerGap size={14} className="animate-spin text-palace-gold" />
            )}
            <button type="button" onClick={onClose} className="btn-press text-palace-muted hover:text-palace-text">
              <X size={16} />
            </button>
          </div>

          {query.trim().length >= 3 && (
            <div className="border-b border-palace-border/40 px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest text-palace-muted">
              {isSearching ? 'Semantic search…' : semanticResults ? 'Semantic results' : 'Keyword results'}
            </div>
          )}

          <ul className="max-h-96 overflow-y-auto py-2">
            {results.map((note, idx) => (
              <li key={note.id}>
                <button
                  type="button"
                  onClick={() => goTo(note.id)}
                  className={`w-full px-4 py-3 text-left transition-colors duration-150 ${
                    idx === activeIdx
                      ? 'bg-palace-border/75 text-palace-text'
                      : 'text-palace-muted hover:bg-palace-border/35 hover:text-palace-text'
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
