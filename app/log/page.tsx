import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import React from 'react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default function LogPage() {
  const logPath = path.resolve(__dirname, '../../../Second Brain/wiki/log.md')
  let content = ''
  
  try {
    content = fs.readFileSync(logPath, 'utf8')
  } catch (e) {
    content = 'Log not found.'
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold mb-8">Activity Log</h1>
      <pre className="whitespace-pre-wrap text-sm font-mono text-zinc-300 leading-relaxed">
        {content}
      </pre>
    </div>
  )
}
