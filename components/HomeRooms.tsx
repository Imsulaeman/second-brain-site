'use client'

import { motion } from 'framer-motion'
import RoomCard from '@/components/RoomCard'
import type { RoomSlug } from '@/lib/rooms'

const roomOrder: RoomSlug[] = ['sources', 'concepts', 'entities', 'synthesis']

const typeForRoom: Record<RoomSlug, string> = {
  sources: 'source',
  concepts: 'concept',
  entities: 'entity',
  synthesis: 'synthesis',
}

export default function HomeRooms({ counts }: { counts: Record<string, number> }) {
  return (
    <motion.div
      className="grid grid-cols-1 gap-4 md:grid-cols-3"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
    >
      {roomOrder.map((room) => (
        <RoomCard key={room} room={room} count={counts[typeForRoom[room]] ?? 0} wide={room === 'sources' || room === 'synthesis'} />
      ))}
    </motion.div>
  )
}
