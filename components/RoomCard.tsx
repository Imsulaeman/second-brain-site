'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { roomByPlural, type RoomSlug } from '@/lib/rooms'

export default function RoomCard({ room, count, wide = false }: { room: RoomSlug; count: number; wide?: boolean }) {
  const config = roomByPlural(room)
  if (!config) return null
  const Icon = config.icon

  return (
    <motion.div
      variants={{ hidden: { scale: 0.95, opacity: 0 }, show: { scale: 1, opacity: 1 } }}
      transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
      className={wide ? 'md:col-span-2' : 'md:col-span-1'}
    >
      <Link
        href={config.path}
        className={`card-hover btn-press room-image ${config.fallbackClass} group relative flex min-h-[260px] overflow-hidden rounded-lg border border-palace-border p-6 sm:p-8`}
        style={{ boxShadow: `inset 0 0 0 1px ${config.accent}22` }}
      >
        <div className="absolute inset-0 bg-palace-bg/10 transition-opacity duration-200 group-hover:opacity-60" />
        <div className="relative flex w-full flex-col justify-between">
          <div className="flex items-start justify-between gap-4">
            <div className={`rounded-md border border-current/30 bg-palace-bg/45 p-3 ${config.colorClass}`}>
              <Icon size={28} weight="light" />
            </div>
            <span className="rounded-full border border-palace-border bg-palace-bg/50 px-3 py-1 text-xs text-palace-muted">
              {count} notes
            </span>
          </div>
          <div className="max-w-md">
            <p className={`mb-2 text-xs uppercase tracking-[0.22em] ${config.colorClass}`}>{config.kicker}</p>
            <h2 className="font-display text-4xl text-palace-text md:text-5xl">{config.title}</h2>
            <p className="mt-3 text-sm leading-6 text-palace-text/78">{config.description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
