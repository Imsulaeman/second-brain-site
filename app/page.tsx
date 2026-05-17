import Link from 'next/link'
import { ArrowRight, Graph } from '@phosphor-icons/react/dist/ssr'
import { getRoomCounts } from '@/lib/notes'
import { rooms } from '@/lib/rooms'
import ManorEntrance from '@/components/ManorEntrance'

export default function Home() {
  const counts = getRoomCounts()

  return (
    <main className="pb-24 sm:pb-0">
      <ManorEntrance />
      <section
        className="hero-bg relative flex min-h-[92dvh] items-end overflow-hidden pt-24"
        style={{ '--hero-image': 'url(/images/hero-bg.jpg)' } as React.CSSProperties}
      >
        <div className="absolute inset-0 border-b border-palace-border/70" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-4 pb-16 sm:px-6 md:grid-cols-[1.18fr_0.82fr] md:pb-24 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 font-mono text-xs uppercase tracking-[0.28em] text-palace-gold">Memory Palace</div>
            <h1 className="font-display text-6xl leading-[0.94] text-palace-text sm:text-7xl lg:text-8xl">
              Ilham&apos;s Second Brain
            </h1>
            <p className="mt-7 max-w-[65ch] text-lg leading-8 text-palace-muted sm:text-xl">
              An LLM-compiled wiki built on Karpathy&apos;s method: raw sources ingested and synthesized into interconnected pages, kept current over time. Structured as a Memory Palace. Styled after Blue Prince.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/concepts"
                className="btn-press inline-flex items-center justify-center gap-2 rounded-md bg-palace-gold px-5 py-3 text-sm font-medium text-palace-bg transition-colors duration-200 hover:bg-[#f0d790]"
              >
                Enter the Palace
                <ArrowRight size={17} weight="bold" />
              </Link>
              <Link
                href="/graph"
                className="btn-press inline-flex items-center justify-center gap-2 rounded-md border border-palace-border bg-palace-surface/70 px-5 py-3 text-sm font-medium text-palace-text transition-colors duration-200 hover:border-palace-blue/70"
              >
                <Graph size={17} weight="light" />
                View Graph
              </Link>
            </div>
          </div>

          <aside className="hidden self-end border-l border-palace-border/80 pl-6 text-sm leading-7 text-palace-muted md:block">
            <p className="max-w-sm">
              Built from an Obsidian vault, organized as rooms instead of folders. Every note keeps its own doorway back into the wider map.
            </p>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.24em] text-palace-muted">Rooms</div>
            <h2 className="mt-3 font-display text-4xl text-palace-text md:text-5xl">Choose a wing.</h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-6 text-palace-muted sm:block">
            The layout is spatial on purpose: sources, concepts, people, and synthesis each deserve a different tempo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {rooms.map((room, index) => {
            const Icon = room.icon
            const count = counts[room.type]
            const wide = index === 0 || index === 3
            return (
              <Link
                key={room.path}
                href={room.path}
                className={`card-hover group relative min-h-[260px] overflow-hidden rounded-lg border border-palace-border bg-palace-surface p-6 hover:border-palace-gold/60 hover:shadow-insetGlow ${
                  wide ? 'md:col-span-2' : ''
                }`}
              >
                <div className={`absolute inset-0 ${room.fallbackClass}`} />
                <div className="absolute inset-0 bg-cover bg-center opacity-45 transition-opacity duration-300 group-hover:opacity-60" style={{ backgroundImage: `url(${room.image})` }} />
                <div className="absolute inset-0 bg-palace-bg/64" />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <Icon size={28} weight="light" className={room.colorClass} />
                    <span className={`rounded border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] ${room.borderClass} ${room.colorClass}`}>
                      {room.kicker}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <h3 className="font-display text-4xl text-palace-text">{room.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-palace-muted">{room.description}</p>
                    <div className="mt-5 font-mono text-xs text-palace-muted">{count} {room.plural}</div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </main>
  )
}
