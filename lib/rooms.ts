import { Binoculars, Books, Users, Wrench } from '@phosphor-icons/react/dist/ssr'
import type { NoteType } from './notes'

export type RoomSlug = 'sources' | 'concepts' | 'entities' | 'synthesis'
export const roomSlugs: RoomSlug[] = ['sources', 'concepts', 'entities', 'synthesis']

export const rooms = [
  {
    path: '/sources',
    type: 'source' as NoteType,
    plural: 'sources',
    title: 'Library',
    kicker: 'Sources',
    accent: '#e8c97e',
    colorClass: 'text-palace-library',
    borderClass: 'border-palace-library/30',
    fallbackClass: 'room-library-fallback',
    image: '/images/room-library.webp',
    icon: Books,
    description: 'Books, essays, PDFs, and reference material that feed the palace.',
  },
  {
    path: '/concepts',
    type: 'concept' as NoteType,
    plural: 'concepts',
    title: 'Workshop',
    kicker: 'Concepts',
    accent: '#5b8dd9',
    colorClass: 'text-palace-workshop',
    borderClass: 'border-palace-workshop/30',
    fallbackClass: 'room-workshop-fallback',
    image: '/images/room-workshop.webp',
    icon: Wrench,
    description: 'Reusable models, techniques, and frameworks currently being shaped.',
  },
  {
    path: '/entities',
    type: 'entity' as NoteType,
    plural: 'entities',
    title: 'Gallery',
    kicker: 'Entities',
    accent: '#a78bfa',
    colorClass: 'text-palace-gallery',
    borderClass: 'border-palace-gallery/30',
    fallbackClass: 'room-gallery-fallback',
    image: '/images/room-gallery.webp',
    icon: Users,
    description: 'People and institutions whose ideas recur across the notes.',
  },
  {
    path: '/synthesis',
    type: 'synthesis' as NoteType,
    plural: 'synthesis',
    title: 'Observatory',
    kicker: 'Synthesis',
    accent: '#4ecdc4',
    colorClass: 'text-palace-observatory',
    borderClass: 'border-palace-observatory/30',
    fallbackClass: 'room-observatory-fallback',
    image: '/images/room-observatory.webp',
    icon: Binoculars,
    description: 'Higher-level maps that connect notes into navigable judgment.',
  },
]

export function roomByPlural(plural: string) {
  return rooms.find((room) => room.plural === plural)
}

export function roomByType(type: NoteType) {
  return rooms.find((room) => room.type === type)
}

export function roomForType(type: string) {
  return rooms.find((room) => room.type === type)?.plural as RoomSlug | undefined
}
