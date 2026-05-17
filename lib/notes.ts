import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type NoteType = 'concept' | 'source' | 'entity' | 'synthesis' | 'overview'

export interface Note {
  slug: string
  title: string
  type: NoteType
  tags: string[]
  created: string
  updated: string
  sources: number
  content: string
  rawContent: string
  rawSize: number
  excerpt: string
  links: string[]
}

const CONTENT_DIR = path.join(process.cwd(), 'content')

function walkDir(dir: string): string[] {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    return entry.isDirectory() ? walkDir(full) : [full]
  })
}

export function slugFromLink(link: string): string {
  return path.basename(link.trim().replace(/\\/g, '/').split('#')[0])
}

function extractWikiLinks(content: string): string[] {
  const links = new Set<string>()
  const matches = content.matchAll(/\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]/g)
  for (const match of matches) links.add(slugFromLink(match[1]))
  return [...links]
}

export function resolveWikiLinks(content: string): string {
  return content
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, (_, link: string, label: string) => {
      return `[${label.trim()}](/note/${slugFromLink(link)})`
    })
    .replace(/\[\[([^\]]+)\]\]/g, (_, link: string) => {
      const slug = slugFromLink(link)
      return `[${slug}](/note/${slug})`
    })
}

function normalizeType(value: unknown, filePath: string): NoteType {
  if (value === 'concept' || value === 'source' || value === 'entity' || value === 'synthesis' || value === 'overview') {
    return value
  }
  const parent = path.basename(path.dirname(filePath))
  if (parent === 'concepts') return 'concept'
  if (parent === 'sources') return 'source'
  if (parent === 'entities') return 'entity'
  if (parent === 'synthesis') return 'synthesis'
  return 'concept'
}

function cleanExcerpt(content: string): string {
  return content
    .replace(/^#{1,6}\s.+$/gm, '')
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2')
    .replace(/\[\[([^\]]+)\]\]/g, '$1')
    .replace(/\|/g, ' ')
    .replace(/[*_`#>\-[\]()]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 160)
}

let cache: Note[] | null = null

export function getAllNotes(): Note[] {
  if (cache) return cache

  const files = walkDir(CONTENT_DIR).filter((file) => file.endsWith('.md'))
  cache = files
    .map((filePath) => {
      const raw = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(raw)
      const slug = path.basename(filePath, '.md')

      return {
        slug,
        title: typeof data.title === 'string' ? data.title : slug.replace(/-/g, ' '),
        type: normalizeType(data.type, filePath),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        created: data.created ? String(data.created).slice(0, 10) : '',
        updated: data.updated ? String(data.updated).slice(0, 10) : '',
        sources: typeof data.sources === 'number' ? data.sources : Number(data.sources ?? 0),
        content: resolveWikiLinks(content),
        rawContent: content,
        rawSize: Buffer.byteLength(content, 'utf8'),
        excerpt: cleanExcerpt(content),
        links: extractWikiLinks(content),
      }
    })
    .sort((a, b) => a.title.localeCompare(b.title))

  return cache
}

export function getNoteBySlug(slug: string): Note | undefined {
  return getAllNotes().find((note) => note.slug === slug)
}

export function getBacklinks(slug: string): Note[] {
  return getAllNotes().filter((note) => note.slug !== slug && note.links.includes(slug))
}

export function getUniqueNoteSlugs() {
  return [...new Set(getAllNotes().map((note) => note.slug))]
}

export function getNotesByType(type: NoteType): Note[] {
  return getAllNotes().filter((note) => note.type === type)
}

export function getRoomCounts() {
  const notes = getAllNotes()
  return {
    source: notes.filter((note) => note.type === 'source').length,
    concept: notes.filter((note) => note.type === 'concept').length,
    entity: notes.filter((note) => note.type === 'entity').length,
    synthesis: notes.filter((note) => note.type === 'synthesis').length,
    overview: notes.filter((note) => note.type === 'overview').length,
  }
}
