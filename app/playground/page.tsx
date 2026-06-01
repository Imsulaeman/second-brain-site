'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type SourceType = 'book' | 'article' | 'pdf'

interface Source {
  id: number
  title: string
  author: string
  type: SourceType
  length: number      // pages for books, word count for articles — drives spine width
  spineColor: string
  textColor: string
  year?: number
  tags?: string[]
  excerpt?: string
}

// Width is derived from length — books 200-600pp map to 28-56px, articles to 16-28px
function spineWidth(s: Source): number {
  if (s.type === 'article') return Math.round(12 + (s.length / 8000) * 14) // 2k–8k words → 14–26px
  if (s.type === 'pdf')     return Math.round(20 + (s.length / 600) * 28)   // up to 600pp → 20–48px
  return Math.round(22 + (s.length / 600) * 32)                              // books up to 600pp → 22–54px
}

function spineHeight(s: Source): number {
  if (s.type === 'article') return 130 + Math.floor(Math.random() * 10)
  if (s.type === 'pdf')     return 155 + Math.floor(Math.random() * 15)
  return 148 + Math.floor(Math.random() * 20)
}

const SOURCES: Source[] = [
  // Books
  { id: 1,  title: 'The Daily Stoic',               author: 'Ryan Holiday',         type: 'book',    length: 416,  spineColor: '#2a1e10', textColor: '#c8a050', year: 2016, tags: ['philosophy','stoicism'],    excerpt: 'Discipline is freedom. We are free to the degree we can control ourselves.' },
  { id: 2,  title: 'Meditations',                   author: 'Marcus Aurelius',       type: 'book',    length: 254,  spineColor: '#1e0e08', textColor: '#b08050', year: 180,  tags: ['philosophy','classics'],    excerpt: 'You have power over your mind, not outside events.' },
  { id: 3,  title: 'The Almanack of Naval',          author: 'Eric Jorgenson',        type: 'book',    length: 242,  spineColor: '#0e1828', textColor: '#6090b8', year: 2020, tags: ['wealth','philosophy'] },
  { id: 4,  title: 'A Mind for Numbers',             author: 'Barbara Oakley',        type: 'book',    length: 336,  spineColor: '#182008', textColor: '#789050', year: 2014, tags: ['learning','science'] },
  { id: 5,  title: 'The Most Important Thing',       author: 'Howard Marks',          type: 'book',    length: 196,  spineColor: '#281808', textColor: '#b08840', year: 2011, tags: ['investing','finance'] },
  { id: 6,  title: 'Antifragile',                   author: 'Nassim Taleb',          type: 'book',    length: 519,  spineColor: '#200e04', textColor: '#b07050', year: 2012, tags: ['philosophy','risk'] },
  { id: 7,  title: 'The Black Swan',                author: 'Nassim Taleb',          type: 'book',    length: 444,  spineColor: '#080818', textColor: '#6878b8', year: 2007, tags: ['probability'] },
  { id: 8,  title: 'Poor Charlie\'s Almanack',       author: 'Charlie Munger',        type: 'book',    length: 544,  spineColor: '#081810', textColor: '#50a888', year: 2005, tags: ['investing','wisdom'] },
  { id: 9,  title: 'The Psychology of Money',        author: 'Morgan Housel',         type: 'book',    length: 256,  spineColor: '#1a1404', textColor: '#b89840', year: 2020, tags: ['finance','behavior'] },
  { id: 10, title: 'Thinking, Fast and Slow',        author: 'Daniel Kahneman',       type: 'book',    length: 499,  spineColor: '#08201c', textColor: '#50a898', year: 2011, tags: ['psychology'] },
  { id: 11, title: 'Sapiens',                       author: 'Yuval Noah Harari',     type: 'book',    length: 443,  spineColor: '#281408', textColor: '#c08050', year: 2011, tags: ['history','science'] },
  // PDF
  { id: 12, title: 'The Complete Howard Marks',     author: 'Howard Marks',          type: 'pdf',     length: 580,  spineColor: '#1e1408', textColor: '#c8a050', year: 2023, tags: ['investing','finance'],     excerpt: 'A complete collection of Howard Marks memos on market cycles and investing philosophy.' },
  { id: 13, title: 'Situational Awareness',         author: 'Leopold Aschenbrenner', type: 'pdf',     length: 165,  spineColor: '#101828', textColor: '#6890c8', year: 2024, tags: ['AI','geopolitics'] },
  // Articles / Essays
  { id: 14, title: 'I\'m Begging You to Write More Essays', author: 'Dan Koe',      type: 'article', length: 3200, spineColor: '#1e1210', textColor: '#b07858', year: 2024, tags: ['writing','essays'] },
  { id: 15, title: 'Life Lessons from Trading',    author: 'Unknown',               type: 'article', length: 4100, spineColor: '#0e1c10', textColor: '#608858', year: 2024, tags: ['trading','finance'] },
  { id: 16, title: 'Something Is Different About 2026', author: 'Various',          type: 'article', length: 2800, spineColor: '#181420', textColor: '#8878b0', year: 2026, tags: ['AI','society'] },
  { id: 17, title: 'The Jackpot Age',              author: 'Various',               type: 'article', length: 5200, spineColor: '#201808', textColor: '#b09040', year: 2025, tags: ['technology','future'] },
  { id: 18, title: 'Advice on Upskilling',         author: 'Justin Skycak',         type: 'article', length: 7800, spineColor: '#0c1a18', textColor: '#50988a', year: 2024, tags: ['learning','career'] },
  { id: 19, title: 'First Principles Thinking',   author: 'Various',               type: 'article', length: 2200, spineColor: '#181018', textColor: '#9868a0', year: 2024, tags: ['thinking'] },
  { id: 20, title: 'How to Make Money',            author: 'Various',               type: 'article', length: 3600, spineColor: '#101808', textColor: '#709050', year: 2024, tags: ['finance'] },
]

// Stable heights — computed once
const SOURCE_DATA = SOURCES.map(s => ({ ...s, w: spineWidth(s), h: spineHeight(s) }))

const SHELF_ROWS = [
  SOURCE_DATA.slice(0, 8),
  SOURCE_DATA.slice(8, 15),
  SOURCE_DATA.slice(15),
]

const TABS = ['Library', 'Notes', 'Highlights', 'Collections', 'Tags']

const TYPE_LABEL: Record<SourceType, string> = { book: 'Book', article: 'Article', pdf: 'PDF' }
const TYPE_COLOR: Record<SourceType, string> = { book: '#c8a050', article: '#6890b8', pdf: '#a07860' }

function adjustHex(hex: string, amt: number): string {
  const clamp = (v: number) => Math.max(0, Math.min(255, v))
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const h = (v: number) => clamp(v + amt).toString(16).padStart(2, '0')
  return `#${h(r)}${h(g)}${h(b)}`
}

export default function PlaygroundPage() {
  const [selected, setSelected] = useState(SOURCE_DATA[0])
  const [activeTab, setActiveTab] = useState('Library')

  return (
    <div className="flex flex-col" style={{ minHeight: '100dvh', background: '#090807', fontFamily: 'var(--font-geist, system-ui)' }}>

      {/* Nav */}
      <nav className="flex items-center gap-1 px-5 border-b shrink-0" style={{ borderColor: '#1e1a14', background: '#0c0a08', height: 44 }}>
        <span className="text-xs uppercase tracking-widest mr-5 shrink-0" style={{ color: '#c8a252', fontFamily: 'var(--font-display, serif)', letterSpacing: '0.18em' }}>
          MY LIBRARY
        </span>
        {TABS.map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className="px-3 h-full text-xs relative shrink-0 transition-colors" style={{ color: activeTab === tab ? '#e8dcc8' : '#5a5040' }}>
            {tab}
            {activeTab === tab && <motion.div layoutId="tab-ul" className="absolute bottom-0 inset-x-2 h-[2px] rounded-full" style={{ background: '#c8a252' }} />}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-2 px-3 py-1 rounded text-xs shrink-0" style={{ background: '#141210', border: '1px solid #28221a', color: '#5a5040' }}>
          <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5"/><path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          Search...
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">

        {/* Shelves */}
        <div className="flex-1 flex flex-col overflow-y-auto" style={{ background: 'linear-gradient(170deg, #0f0c08 0%, #0b0804 100%)' }}>
          <div className="px-8 pt-5 pb-1 flex items-center gap-4">
            <span className="text-xs uppercase tracking-widest" style={{ color: '#4a3e28', fontFamily: 'var(--font-mono, monospace)' }}>All Sources</span>
            <span className="text-xs" style={{ color: '#2e2818' }}>— {SOURCES.length} items</span>
            <div className="flex items-center gap-3 ml-auto text-[10px]" style={{ fontFamily: 'var(--font-mono, monospace)', color: '#4a3e28' }}>
              <span>━ book</span>
              <span style={{ color: '#4a5870' }}>━ article</span>
              <span style={{ color: '#6a4830' }}>━ pdf</span>
              <span style={{ color: '#5a5040' }}>width = length</span>
            </div>
          </div>

          <div className="px-6 pb-10 flex flex-col">
            {SHELF_ROWS.map((row, i) => (
              <ShelfRow key={i} items={row} selected={selected} onSelect={setSelected} />
            ))}
          </div>
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col shrink-0 overflow-y-auto"
            style={{ width: 252, borderLeft: '1px solid #1e1a12', background: '#0c0a08' }}
          >
            {/* Top color band */}
            <div className="relative flex items-end justify-center pb-6 pt-8 shrink-0" style={{ background: `radial-gradient(ellipse at 50% 90%, ${selected.spineColor}dd 0%, #090807 65%)`, minHeight: 180 }}>
              {/* Spine preview */}
              <div
                className="rounded-[2px] flex items-center justify-center relative overflow-hidden shadow-2xl"
                style={{
                  width: Math.min(selected.w * 2.5, 80),
                  height: 130,
                  background: `linear-gradient(90deg, ${adjustHex(selected.spineColor, -18)} 0%, ${selected.spineColor} 20%, ${adjustHex(selected.spineColor, 12)} 55%, ${selected.spineColor} 80%, ${adjustHex(selected.spineColor, -22)} 100%)`,
                  boxShadow: `3px 3px 20px rgba(0,0,0,0.8), inset 1px 0 0 rgba(255,255,255,0.06)`,
                  borderTop: `1px solid ${selected.textColor}50`,
                }}
              >
                <div className="absolute inset-0 opacity-20" style={{ background: 'repeating-linear-gradient(180deg, transparent 0px, rgba(255,255,255,0.04) 1px, transparent 2px)' }} />
                <span className="relative text-[9px] font-semibold text-center px-2 leading-snug" style={{ color: selected.textColor, fontFamily: 'var(--font-display, serif)', textShadow: '0 1px 6px rgba(0,0,0,0.9)', writingMode: 'vertical-rl', transform: 'rotate(180deg)', maxHeight: '90%', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                  {selected.title}
                </span>
                <div className="absolute bottom-0 inset-x-0 h-8" style={{ background: 'linear-gradient(to top, rgba(180,100,10,0.2), transparent)' }} />
              </div>
            </div>

            <div className="flex flex-col gap-4 p-5">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[9px] px-1.5 py-0.5 rounded-sm font-mono" style={{ background: `${selected.spineColor}80`, color: TYPE_COLOR[selected.type], border: `1px solid ${TYPE_COLOR[selected.type]}30` }}>
                    {TYPE_LABEL[selected.type]}
                  </span>
                  {selected.type !== 'article' && selected.length && (
                    <span className="text-[9px]" style={{ color: '#3a3020', fontFamily: 'var(--font-mono, monospace)' }}>{selected.length} {selected.type === 'book' ? 'pp' : 'pp'}</span>
                  )}
                  {selected.type === 'article' && (
                    <span className="text-[9px]" style={{ color: '#3a3020', fontFamily: 'var(--font-mono, monospace)' }}>~{Math.round(selected.length / 200)} min read</span>
                  )}
                </div>
                <h3 className="text-sm leading-snug" style={{ color: '#e8dcc8', fontFamily: 'var(--font-display, serif)' }}>{selected.title}</h3>
                <p className="text-xs mt-1" style={{ color: '#6a5a40' }}>{selected.author}</p>
              </div>

              {selected.tags && (
                <div className="flex flex-wrap gap-1.5">
                  {selected.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 rounded-sm" style={{ border: '1px solid #28201a', color: '#6a5a40', fontFamily: 'var(--font-mono, monospace)' }}>{tag}</span>
                  ))}
                </div>
              )}

              <button className="w-full py-2 rounded-sm text-xs font-medium tracking-wide transition-all active:scale-[0.97]" style={{ background: selected.spineColor, color: selected.textColor, border: `1px solid ${selected.textColor}30` }}>
                Open →
              </button>

              <div style={{ height: 1, background: '#1e1a12' }} />

              <div>
                <p className="text-[9px] uppercase tracking-widest mb-2" style={{ color: '#3a3020', fontFamily: 'var(--font-mono, monospace)' }}>About</p>
                {selected.excerpt
                  ? <p className="text-xs leading-relaxed" style={{ color: '#8a7a60' }}>{selected.excerpt}</p>
                  : <p className="text-xs italic" style={{ color: '#3a3020' }}>No notes yet.</p>
                }
              </div>

              {selected.year && (
                <div className="text-[10px] pt-2 flex justify-between" style={{ borderTop: '1px solid #1e1a12', color: '#3a3020', fontFamily: 'var(--font-mono, monospace)' }}>
                  <span>Spine width = {selected.w}px ({selected.length} {selected.type === 'article' ? 'words' : 'pages'})</span>
                  <span>{selected.year}</span>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

function ShelfRow({ items, selected, onSelect }: { items: typeof SOURCE_DATA; selected: typeof SOURCE_DATA[0]; onSelect: (s: typeof SOURCE_DATA[0]) => void }) {
  return (
    <div className="relative">
      <div className="relative flex items-end gap-[3px] px-4 pt-6" style={{ background: 'linear-gradient(180deg, #110d09 0%, #180f07 100%)' }}>
        {/* Ambient back-wall glow */}
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 100% at 50% 100%, rgba(175, 95, 8, 0.2) 0%, transparent 68%)' }} />
        {items.map(item => (
          <SpineItem key={item.id} item={item} isSelected={selected.id === item.id} onClick={() => onSelect(item)} />
        ))}
      </div>

      {/* Shelf plank */}
      <div className="relative" style={{ height: 18, background: 'linear-gradient(180deg, #583515 0%, #381f08 35%, #201005 100%)', boxShadow: 'inset 0 1px 0 rgba(255,195,80,0.24), 0 4px 14px rgba(0,0,0,0.8)' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 55% 140% at 50% 0%, rgba(205, 125, 18, 0.3) 0%, transparent 68%)' }} />
        <div className="absolute inset-0 opacity-25" style={{ background: 'repeating-linear-gradient(90deg, transparent 0px, transparent 60px, rgba(0,0,0,0.1) 60px, rgba(0,0,0,0.1) 61px)' }} />
      </div>

      {/* Drop shadow */}
      <div style={{ height: 16, background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, transparent 100%)' }} />
    </div>
  )
}

function SpineItem({ item, isSelected, onClick }: { item: typeof SOURCE_DATA[0]; isSelected: boolean; onClick: () => void }) {
  const isArticle = item.type === 'article'

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: isArticle ? -8 : -12, transition: { duration: 0.16, ease: [0.23, 1, 0.32, 1] } }}
      animate={{ y: isSelected ? (isArticle ? -10 : -14) : 0 }}
      transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
      className="relative shrink-0 focus:outline-none"
      style={{ width: item.w, height: item.h }}
      title={`${item.title} — ${item.author}`}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          borderRadius: isArticle ? '1px 1px 0 0' : '1px 1px 0 0',
          background: `linear-gradient(90deg,
            ${adjustHex(item.spineColor, -20)} 0%,
            ${adjustHex(item.spineColor, -8)} 12%,
            ${item.spineColor} 35%,
            ${adjustHex(item.spineColor, 16)} 55%,
            ${item.spineColor} 78%,
            ${adjustHex(item.spineColor, -25)} 100%)`,
          boxShadow: isSelected
            ? `2px 0 16px rgba(0,0,0,0.75), inset 0 0 0 0.5px rgba(255,255,255,0.08), 0 0 12px ${item.textColor}45`
            : '2px 0 8px rgba(0,0,0,0.6), inset 0 0 0 0.5px rgba(255,255,255,0.05)',
          borderTop: isSelected
            ? `1px solid ${item.textColor}65`
            : '1px solid rgba(255,255,255,0.09)',
          // Articles slightly different — gap at top simulating thin pamphlet
          ...(isArticle ? { borderLeft: `1px solid rgba(255,255,255,0.04)`, borderRight: `1px solid rgba(0,0,0,0.3)` } : {}),
        }}
      >
        {/* Cloth/paper texture */}
        <div className="absolute inset-0" style={{ background: 'repeating-linear-gradient(180deg, transparent 0px, rgba(255,255,255,0.018) 1px, transparent 2px)', opacity: isArticle ? 0.5 : 0.8 }} />

        {/* Title */}
        {item.w >= 20 && (
          <div className="absolute inset-0 flex items-center justify-center" style={{ padding: '10px 3px' }}>
            <span
              style={{
                color: item.textColor,
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
                fontSize: item.w >= 28 ? 10 : 8,
                fontFamily: 'var(--font-display, serif)',
                fontWeight: 600,
                letterSpacing: '0.02em',
                lineHeight: 1.2,
                maxHeight: '90%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                textShadow: '0 1px 6px rgba(0,0,0,0.95), 0 0 12px rgba(0,0,0,0.8)',
                opacity: isSelected ? 1 : 0.88,
              }}
            >
              {item.title}
            </span>
          </div>
        )}

        {/* Top edge */}
        <div className="absolute top-0 inset-x-0 h-[2px]" style={{ background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.13), transparent)` }} />

        {/* Amber bleed from shelf */}
        <div className="absolute bottom-0 inset-x-0 h-10" style={{ background: 'linear-gradient(to top, rgba(175,95,8,0.2), transparent)' }} />
      </div>
    </motion.button>
  )
}
