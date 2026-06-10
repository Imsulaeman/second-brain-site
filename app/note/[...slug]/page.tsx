import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import ReadingProgress from '@/components/ReadingProgress'
import MermaidDiagram from '@/components/MermaidDiagram'
import { getAllNotes, getBacklinks, getNoteById } from '@/lib/notes'
import { roomByType } from '@/lib/rooms'

export const dynamicParams = true

function paramsToId(slug?: string[]) {
  return (slug ?? []).join('/')
}

export function generateStaticParams() {
  return getAllNotes()
    .filter((note) => note.rawSize < 80_000)
    .map((note) => ({ slug: note.id.split('/') }))
}

export function generateMetadata({ params }: { params: { slug: string[] } }) {
  const note = getNoteById(paramsToId(params.slug))
  return {
    title: note ? `${note.title} | Ilham's Second Brain` : "Ilham's Second Brain",
    description: note?.excerpt,
  }
}

const mdxComponents = {
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      {...props}
      className="text-palace-blue underline decoration-palace-blue/40 underline-offset-4 transition-colors duration-200 hover:text-palace-gold"
    />
  ),
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
    const child = children as React.ReactElement<{ className?: string; children?: string }>
    const className = child?.props?.className ?? ''
    if (className.includes('language-mermaid')) {
      return <MermaidDiagram code={child.props.children ?? ''} />
    }
    return (
      <pre
        {...props}
        className="overflow-x-auto rounded-lg border border-palace-border bg-palace-surface p-4 text-sm"
      >
        {children}
      </pre>
    )
  },
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-x-auto rounded-lg border border-palace-border">
      <table {...props} className="min-w-full text-sm" />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead {...props} className="border-b border-palace-border bg-palace-surface" />
  ),
  tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody {...props} className="divide-y divide-palace-border/60" />
  ),
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr {...props} className="transition-colors duration-150 hover:bg-palace-surface/50" />
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th
      {...props}
      className="px-4 py-3 text-left font-mono text-[11px] uppercase tracking-[0.18em] text-palace-muted"
    />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td {...props} className="px-4 py-3 leading-6 text-palace-text/88" />
  ),
}

export default function NotePage({ params }: { params: { slug: string[] } }) {
  const note = getNoteById(paramsToId(params.slug))
  if (!note) notFound()

  const room = roomByType(note.type)
  const backlinks = getBacklinks(note.id)
  const accent = room?.accent ?? '#5b8dd9'

  return (
    <main className="pb-24 pt-16 sm:pb-16">
      <ReadingProgress accentColor={accent} />
      <article className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mb-10">
          <div className="mb-6 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-palace-muted">
            <Link href="/" className="transition-colors duration-200 hover:text-palace-text">
              Palace
            </Link>
            <span>/</span>
            {room ? (
              <Link
                href={room.path}
                className={`${room.colorClass} transition-colors duration-200 hover:text-palace-text`}
              >
                {room.title}
              </Link>
            ) : (
              <span>Note</span>
            )}
          </div>

          <h1 className="max-w-4xl font-display text-5xl leading-tight text-palace-text md:text-7xl">
            {note.title}
          </h1>

          <div className="mt-6 flex flex-wrap gap-2">
            {note.tags.map((tag) => (
              <Link
                key={tag}
                href={`${room?.path ?? '/concepts'}?tag=${encodeURIComponent(tag)}`}
                className="rounded border border-palace-border px-2.5 py-1 text-xs text-palace-muted transition-colors duration-200 hover:border-palace-blue/60 hover:text-palace-text"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="prose prose-invert max-w-none prose-headings:font-display prose-headings:font-normal prose-headings:text-palace-text prose-p:leading-7 prose-p:text-palace-text/88 prose-strong:text-palace-text prose-li:text-palace-text/88 prose-hr:border-palace-border prose-blockquote:border-palace-gold/60 prose-blockquote:text-palace-text prose-code:rounded prose-code:bg-palace-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:text-palace-gold prose-pre:border-0 prose-pre:bg-transparent prose-pre:p-0 prose-table:my-0">
            <MDXRemote
              source={note.content}
              components={mdxComponents}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm as any] } }}
            />
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-lg border border-palace-border bg-palace-surface/65 p-5">
              <div className="font-mono text-xs uppercase tracking-[0.22em] text-palace-muted">Details</div>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-palace-muted">Created</dt>
                  <dd className="font-mono text-palace-text">{note.created || 'unknown'}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-palace-muted">Updated</dt>
                  <dd className="font-mono text-palace-text">{note.updated || 'unknown'}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-palace-muted">Sources</dt>
                  <dd className="font-mono text-palace-text">{note.sources}</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-lg border border-palace-border bg-palace-surface/65 p-5">
              <div className="font-mono text-xs uppercase tracking-[0.22em] text-palace-muted">Backlinks</div>
              {backlinks.length > 0 ? (
                <div className="mt-4 space-y-2">
                  {backlinks.map((link) => (
                    <Link
                      key={link.id}
                      href={link.href}
                      className="block rounded-md border border-palace-border/70 px-3 py-2 text-sm text-palace-text transition-colors duration-200 hover:border-palace-blue/60 hover:bg-palace-border/30"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-sm leading-6 text-palace-muted">No inbound links yet.</p>
              )}
            </div>
          </aside>
        </div>
      </article>
    </main>
  )
}
