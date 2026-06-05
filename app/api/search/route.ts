import { NextResponse } from 'next/server'
import { getAllNotes } from '@/lib/notes'

export function GET() {
  const notes = getAllNotes().map(({ id, title, tags, excerpt, type }) => ({
    id,
    title,
    tags,
    excerpt,
    type,
  }))
  return NextResponse.json(notes)
}
