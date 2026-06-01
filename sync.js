#!/usr/bin/env node
/**
 * Syncs wiki/ from the Obsidian vault into this site's content/ directory.
 *
 * Source: ../Second Brain/wiki/
 * Destination: ./content/
 *
 * - Copies concepts/, entities/, sources/, synthesis/, and overview.md
 * - Skips index.md and log.md (vault-internal files)
 * - Deletes files in content/ that no longer exist in wiki/ (handles renames/deletions)
 * - Run manually: node sync.js
 * - Runs automatically before every build (via "prebuild" script)
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const WIKI_DIR = path.resolve(__dirname, '..', 'Second Brain', 'wiki')
const CONTENT_DIR = path.resolve(__dirname, 'content')

const SYNC_DIRS = ['concepts', 'entities', 'sources', 'synthesis']
const SKIP_FILES = new Set(['index.md', 'log.md'])

function walkDir(dir) {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    return entry.isDirectory() ? walkDir(full) : [full]
  })
}

let copied = 0
let deleted = 0

// Sync each subdirectory
for (const subdir of SYNC_DIRS) {
  const srcDir = path.join(WIKI_DIR, subdir)
  const dstDir = path.join(CONTENT_DIR, subdir)

  if (!fs.existsSync(srcDir)) continue
  fs.mkdirSync(dstDir, { recursive: true })

  // Copy new/changed files from wiki → content
  const srcFiles = walkDir(srcDir).filter((f) => f.endsWith('.md'))
  const srcNames = new Set()
  for (const srcFile of srcFiles) {
    const rel = path.relative(srcDir, srcFile)
    srcNames.add(rel)
    const dstFile = path.join(dstDir, rel)
    fs.mkdirSync(path.dirname(dstFile), { recursive: true })

    const srcMtime = fs.statSync(srcFile).mtimeMs
    const dstExists = fs.existsSync(dstFile)
    const dstMtime = dstExists ? fs.statSync(dstFile).mtimeMs : 0

    if (!dstExists || srcMtime > dstMtime) {
      fs.copyFileSync(srcFile, dstFile)
      copied++
    }
  }

  // Delete files in content/ that no longer exist in wiki/
  const dstFiles = walkDir(dstDir).filter((f) => f.endsWith('.md'))
  for (const dstFile of dstFiles) {
    const rel = path.relative(dstDir, dstFile)
    if (!srcNames.has(rel)) {
      fs.unlinkSync(dstFile)
      deleted++
    }
  }
}

// Sync overview.md from wiki root
const srcOverview = path.join(WIKI_DIR, 'overview.md')
const dstOverview = path.join(CONTENT_DIR, 'overview.md')
if (fs.existsSync(srcOverview)) {
  const srcMtime = fs.statSync(srcOverview).mtimeMs
  const dstExists = fs.existsSync(dstOverview)
  const dstMtime = dstExists ? fs.statSync(dstOverview).mtimeMs : 0
  if (!dstExists || srcMtime > dstMtime) {
    fs.copyFileSync(srcOverview, dstOverview)
    copied++
  }
} else if (fs.existsSync(dstOverview)) {
  fs.unlinkSync(dstOverview)
  deleted++
}

console.log(`sync: ${copied} copied, ${deleted} deleted`)
