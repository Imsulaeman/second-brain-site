import { NextResponse } from 'next/server'
import { getAllNotes } from '@/lib/notes'
import { qmdSearch } from '@/lib/qmd-search'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const q = searchParams.get('q')

  const allNotes = getAllNotes().map(({ id, title, tags, excerpt, type }) => ({
    id,
    title,
    tags,
    excerpt,
    type,
  }))

  if (!q || q.trim().length < 3) {
    return NextResponse.json(allNotes)
  }

  try {
    const noteIds = await qmdSearch(q.trim())
    const byId = new Map(allNotes.map((n) => [n.id, n]))
    const matched = noteIds
      .map((id) => byId.get(id))
      .filter((n): n is NonNullable<typeof n> => n != null)
    return NextResponse.json(matched.length > 0 ? matched : allNotes)
  } catch {
    return NextResponse.json(allNotes)
  }
}
