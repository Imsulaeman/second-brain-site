import KnowledgeGraph from '@/components/KnowledgeGraph'
import { buildGraph } from '@/lib/graph'
import { getAllNotes } from '@/lib/notes'

export default function GraphPage() {
  const { nodes, edges } = buildGraph(getAllNotes())

  return (
    <main className="flex min-h-[100dvh] flex-col pb-20 pt-16 sm:pb-0">
      <section className="mx-auto flex w-full max-w-7xl items-end justify-between gap-6 px-4 py-8 sm:px-6 lg:px-8">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.24em] text-palace-muted">Graph</div>
          <h1 className="mt-3 font-display text-4xl text-palace-text md:text-5xl">The visible map.</h1>
        </div>
        <p className="hidden max-w-sm text-sm leading-6 text-palace-muted md:block">
          Drag nodes, zoom the room, and click any point to open its note.
        </p>
      </section>
      <section className="mx-auto min-h-[620px] w-full max-w-7xl flex-1 px-4 pb-8 sm:px-6 lg:px-8">
        <div className="h-[68dvh] min-h-[540px] overflow-hidden rounded-lg border border-palace-border bg-palace-surface/45">
          <KnowledgeGraph nodes={nodes} edges={edges} />
        </div>
      </section>
    </main>
  )
}
