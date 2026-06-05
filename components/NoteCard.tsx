import Link from 'next/link'
import type { Note } from '@/lib/notes'
import { roomByType } from '@/lib/rooms'

export default function NoteCard({ note }: { note: Note }) {
  const room = roomByType(note.type)

  return (
    <Link
      href={note.href}
      className="card-hover group flex min-h-[210px] flex-col justify-between rounded-lg border border-palace-border bg-palace-surface/74 p-5 shadow-[0_14px_42px_rgba(4,8,20,0.18)]"
      style={room ? { boxShadow: `inset 0 0 0 1px ${room.accent}16` } : undefined}
    >
      <span>
        <span className="mb-3 flex items-center justify-between gap-3">
          <span className="text-xs uppercase tracking-[0.18em] text-palace-muted">{note.type}</span>
          {note.sources ? <span className="text-xs text-palace-muted">{note.sources} sources</span> : null}
        </span>
        <span className="block font-display text-xl leading-tight text-palace-text transition-colors duration-200 group-hover:text-palace-gold">
          {note.title}
        </span>
        <span className="mt-3 line-clamp-3 block text-sm leading-6 text-palace-muted">{note.excerpt}</span>
      </span>

      <span className="mt-5 flex flex-wrap gap-2">
        {note.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="rounded-full border border-palace-border bg-palace-bg/45 px-2.5 py-1 text-xs text-palace-muted">
            {tag}
          </span>
        ))}
      </span>
    </Link>
  )
}
