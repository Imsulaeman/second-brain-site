import type { Note } from './notes'

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
  const noteIds = new Set(notes.map((note) => note.id))
  const inbound = new Map<string, number>()
  const edges: GraphEdge[] = []

  for (const note of notes) {
    for (const target of note.links) {
      if (noteIds.has(target) && target !== note.id) {
        edges.push({ source: note.id, target })
        inbound.set(target, (inbound.get(target) ?? 0) + 1)
      }
    }
  }

  const nodes: GraphNode[] = notes.map((note) => ({
    id: note.id,
    label: note.title,
    type: note.type,
    size: 1 + (inbound.get(note.id) ?? 0),
  }))

  return { nodes, edges }
}
