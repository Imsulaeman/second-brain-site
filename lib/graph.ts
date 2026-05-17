import type { Note } from './notes'
import { slugFromLink } from './notes'

export interface GraphNode {
  id: string
  label: string
  type: Note['type']
  size: number
}

export interface GraphEdge {
  source: string
  target: string
}

export function buildGraph(notes: Note[]) {
  const noteSlugs = new Set(notes.map((note) => note.slug))
  const inbound = new Map<string, number>()
  const edges: GraphEdge[] = []

  for (const note of notes) {
    const matches = note.rawContent.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)
    for (const match of matches) {
      const target = slugFromLink(match[1])
      if (noteSlugs.has(target) && target !== note.slug) {
        edges.push({ source: note.slug, target })
        inbound.set(target, (inbound.get(target) ?? 0) + 1)
      }
    }
  }

  const nodes: GraphNode[] = notes.map((note) => ({
    id: note.slug,
    label: note.title,
    type: note.type,
    size: 1 + (inbound.get(note.slug) ?? 0),
  }))

  return { nodes, edges }
}
