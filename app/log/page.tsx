import fs from 'fs'
import path from 'path'

interface LogEntry {
  date: string
  type: string
  title: string
  body: string[]
}

const TYPE_COLORS: Record<string, string> = {
  ingest:  'text-palace-gold   border-palace-gold/40   bg-palace-gold/8',
  audit:   'text-purple-400    border-purple-400/40    bg-purple-400/8',
  lint:    'text-teal-400      border-teal-400/40      bg-teal-400/8',
  query:   'text-palace-blue   border-palace-blue/40   bg-palace-blue/8',
  manual:  'text-palace-muted  border-palace-border    bg-palace-surface/40',
}

function parseLog(raw: string): LogEntry[] {
  const entries: LogEntry[] = []
  // Split on level-2 headings that follow the log format
  const chunks = raw.split(/\n(?=## \[)/)
  for (const chunk of chunks) {
    const headerMatch = chunk.match(/^## \[(\d{4}-\d{2}-\d{2})\]\s+(\w+)\s*\|\s*(.+)/)
    if (!headerMatch) continue
    const [, date, type, title] = headerMatch
    const bodyLines = chunk
      .split('\n')
      .slice(1)
      .map((l) => l.replace(/^- /, '').trim())
      .filter(Boolean)
    entries.push({ date, type: type.toLowerCase(), title: title.trim(), body: bodyLines })
  }
  return entries
}

export default function LogPage() {
  const logPath = path.join(process.cwd(), 'content', 'log.md')
  let entries: LogEntry[] = []

  try {
    const raw = fs.readFileSync(logPath, 'utf8')
    entries = parseLog(raw)
  } catch {
    // log.md not synced yet
  }

  return (
    <main className="mx-auto max-w-3xl px-6 pb-16 pt-24">
      <header className="mb-12">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-palace-muted">Private</p>
        <h1 className="font-display text-5xl text-palace-text">Activity Log</h1>
        <p className="mt-3 text-sm text-palace-muted">{entries.length} entries</p>
      </header>

      {entries.length === 0 ? (
        <p className="text-sm text-palace-muted">No entries found.</p>
      ) : (
        <ol className="relative border-l border-palace-border">
          {entries.map((entry, i) => {
            const colorClass = TYPE_COLORS[entry.type] ?? TYPE_COLORS.manual
            return (
              <li key={i} className="mb-10 ml-6">
                {/* Timeline dot */}
                <span className="absolute -left-[5px] mt-[6px] h-2.5 w-2.5 rounded-full border border-palace-border bg-palace-surface" />

                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <time className="font-mono text-xs text-palace-muted">{entry.date}</time>
                  <span className={`rounded border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] ${colorClass}`}>
                    {entry.type}
                  </span>
                </div>

                <h2 className="text-base font-medium text-palace-text leading-snug mb-2">
                  {entry.title}
                </h2>

                {entry.body.length > 0 && (
                  <ul className="space-y-1">
                    {entry.body.map((line, j) => (
                      <li key={j} className="text-sm text-palace-muted leading-relaxed">
                        {line}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ol>
      )}
    </main>
  )
}
