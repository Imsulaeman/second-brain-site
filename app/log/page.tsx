import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default function LogPage() {
  // Read at build time so it works on Vercel
  const logPath = path.resolve(__dirname, '../../../Second Brain/wiki/log.md')
  let content = ''

  try {
    content = fs.readFileSync(logPath, 'utf8')
  } catch (e) {
    content = '## [2026-06-06] log | Private activity log\n- Log file not found on this deployment.'
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 font-mono">
      <h1 className="text-3xl font-semibold mb-8 tracking-tight">Activity Log</h1>
      <pre className="whitespace-pre-wrap text-sm text-zinc-400 leading-relaxed">
{content}
      </pre>
    </div>
  )
}
