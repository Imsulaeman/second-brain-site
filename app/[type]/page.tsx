import { notFound } from 'next/navigation'
import RoomGrid from '@/components/RoomGrid'
import { getAllNotes } from '@/lib/notes'
import { roomByPlural, rooms } from '@/lib/rooms'

export function generateStaticParams() {
  return rooms.map((room) => ({ type: room.plural }))
}

export default function RoomPage({ params }: { params: { type: string } }) {
  const room = roomByPlural(params.type)
  if (!room) notFound()
  const notes = getAllNotes().filter((note) => note.type === room.type)
  return <RoomGrid notes={notes} type={params.type} />
}
