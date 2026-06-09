import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type NoteType = 'concept' | 'source' | 'entity' | 'synthesis' | 'overview'

export interface Note {
  id: string
  slug: string
  href: string
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
    .toLowerCase()
    .replace(/\s+/g, '-')
}

function normalizeLinkPath(link: string): string {
  return link
    .trim()
    .replace(/\\/g, '/')
    .split('#')[0]
    .split('/')
    .map((segment) => segment.toLowerCase().replace(/\s+/g, '-'))
    .join('/')
}

function resolveLinkTarget(link: string, validIds: Set<string>, idsBySlug: Map<string, string[]>): string | null {
  const normalized = normalizeLinkPath(link)
  if (validIds.has(normalized)) return normalized

  const slug = slugFromLink(link)
  const matches = idsBySlug.get(slug) ?? []
  if (matches.length === 1) return matches[0]
  return null
}

function extractWikiLinks(content: string, validIds: Set<string>, idsBySlug: Map<string, string[]>): string[] {
  const links = new Set<string>()
  const matches = content.matchAll(/\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]/g)
  for (const match of matches) {
    const target = resolveLinkTarget(match[1], validIds, idsBySlug)
    if (target) links.add(target)
  }
  return [...links]
}

export function resolveWikiLinks(content: string, validIds?: Set<string>, idsBySlug?: Map<string, string[]>): string {
  return content
    .replace(/!\[\[([^\]]+)\]\]/g, (_, src: string) => `![](/assets/${path.basename(src)})`)
    .replace(/(`[^`\n]*`|```[\s\S]*?```)|<(?![a-zA-Z/!])/g, (m: string, code?: string) => code !== undefined ? code : '&lt;')
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, (_, link: string, label: string) => {
      const target = validIds && idsBySlug ? resolveLinkTarget(link, validIds, idsBySlug) : slugFromLink(link)
      if (!target) return label.trim()
      return `[${label.trim()}](/note/${target})`
    })
    .replace(/\[\[([^\]]+)\]\]/g, (_, link: string) => {
      const target = validIds && idsBySlug ? resolveLinkTarget(link, validIds, idsBySlug) : slugFromLink(link)
      const label = path.basename(link.trim().split('#')[0])
      if (!target) return label
      return `[${label}](/note/${target})`
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
  const fileIds = files.map((f) => path.relative(CONTENT_DIR, f).replace(/\\/g, '/').replace(/\.md$/, ''))
  const validIds = new Set(fileIds)
  const idsBySlug = new Map<string, string[]>()
  for (const id of fileIds) {
    const slug = path.basename(id)
    idsBySlug.set(slug, [...(idsBySlug.get(slug) ?? []), id])
  }
  cache = files
    .map((filePath) => {
      const raw = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(raw)
      const id = path.relative(CONTENT_DIR, filePath).replace(/\\/g, '/').replace(/\.md$/, '')
      const slug = path.basename(filePath, '.md')

      return {
        id,
        slug,
        href: `/note/${id}`,
        title: typeof data.title === 'string' ? data.title : slug.replace(/-/g, ' '),
        type: normalizeType(data.type, filePath),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        created: data.created ? String(data.created).slice(0, 10) : '',
        updated: data.updated ? String(data.updated).slice(0, 10) : '',
        sources: typeof data.sources === 'number' ? data.sources : Number(data.sources ?? 0),
        content: resolveWikiLinks(content, validIds, idsBySlug),
        rawContent: content,
        rawSize: Buffer.byteLength(content, 'utf8'),
        excerpt: cleanExcerpt(content),
        links: extractWikiLinks(content, validIds, idsBySlug),
      }
    })
    .sort((a, b) => a.title.localeCompare(b.title))

  return cache
}

export function getNoteById(id: string): Note | undefined {
  return getAllNotes().find((note) => note.id === id)
}

export function getBacklinks(id: string): Note[] {
  return getAllNotes().filter((note) => note.id !== id && note.links.includes(id))
}

export function getUniqueNoteSlugs() {
  return [...new Set(getAllNotes().map((note) => note.id))]
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
