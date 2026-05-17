import { NextResponse } from 'next/server'
import { getAllNotes } from '@/lib/notes'

export function GET() {
  const notes = getAllNotes().map(({ slug, title, tags, excerpt, type }) => ({
    slug,
    title,
    tags,
    excerpt,
    type,
  }))
  return NextResponse.json(notes)
}
