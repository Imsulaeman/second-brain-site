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

const WIKI_DIR_CANDIDATES = [
  path.resolve(__dirname, '..', 'Second Brain', 'wiki'),
  path.resolve(__dirname, '..', 'second-brain', 'Second Brain', 'wiki'),
]
const WIKI_DIR = WIKI_DIR_CANDIDATES.find((candidate) => fs.existsSync(candidate)) ?? WIKI_DIR_CANDIDATES[0]
const CONTENT_DIR = path.resolve(__dirname, 'content')
const ASSETS_SRC_DIR = path.resolve(path.dirname(WIKI_DIR), 'raw', 'assets')
const ASSETS_DST_DIR = path.resolve(__dirname, 'public', 'assets')
const IMAGE_EXTS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'])

const SYNC_DIRS = ['concepts', 'entities', 'sources', 'synthesis']
const SKIP_FILES = new Set(['index.md'])

function walkDir(dir) {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    return entry.isDirectory() ? walkDir(full) : [full]
  })
}

function filesDiffer(srcFile, dstFile) {
  if (!fs.existsSync(dstFile)) return true
  return fs.readFileSync(srcFile, 'utf8') !== fs.readFileSync(dstFile, 'utf8')
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

    if (filesDiffer(srcFile, dstFile)) {
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

const wikiExists = fs.existsSync(WIKI_DIR)

// Sync log.md from wiki root
const srcLog = path.join(WIKI_DIR, 'log.md')
const dstLog = path.join(CONTENT_DIR, 'log.md')
if (fs.existsSync(srcLog)) {
  if (filesDiffer(srcLog, dstLog)) {
    fs.copyFileSync(srcLog, dstLog)
    copied++
  }
} else if (wikiExists && fs.existsSync(dstLog)) {
  fs.unlinkSync(dstLog)
  deleted++
}

// Sync overview.md from wiki root
const srcOverview = path.join(WIKI_DIR, 'overview.md')
const dstOverview = path.join(CONTENT_DIR, 'overview.md')
if (fs.existsSync(srcOverview)) {
  if (filesDiffer(srcOverview, dstOverview)) {
    fs.copyFileSync(srcOverview, dstOverview)
    copied++
  }
} else if (wikiExists && fs.existsSync(dstOverview)) {
  fs.unlinkSync(dstOverview)
  deleted++
}

// Sync raw/assets/ → public/assets/ (flatten all image files into one dir)
if (fs.existsSync(ASSETS_SRC_DIR)) {
  fs.mkdirSync(ASSETS_DST_DIR, { recursive: true })
  for (const srcFile of walkDir(ASSETS_SRC_DIR)) {
    const ext = path.extname(srcFile).toLowerCase()
    if (!IMAGE_EXTS.has(ext)) continue
    const dstFile = path.join(ASSETS_DST_DIR, path.basename(srcFile))
    if (filesDiffer(srcFile, dstFile)) {
      fs.copyFileSync(srcFile, dstFile)
      copied++
    }
  }
}

console.log(`sync: ${copied} copied, ${deleted} deleted`)
