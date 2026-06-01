---
title: "andrej-karpathy-skills Repository"
type: source
tags: [ai, coding-agents, claude-code, cursor, instructions, skills]
created: 2026-05-21
updated: 2026-05-21
sources: 1
---

# andrej-karpathy-skills Repository

Source: https://github.com/multica-ai/andrej-karpathy-skills

Local ingest snapshot: cloned on 2026-05-21. Important files inspected: `README.md`, `CLAUDE.md`, `CURSOR.md`, `.cursor/rules/karpathy-guidelines.mdc`, `.claude-plugin/*`, and `skills/karpathy-guidelines/SKILL.md`.

---

## What The Repo Is

The repository packages a small set of [[concepts/agent-operating-instructions]] inspired by [[entities/andrej-karpathy]]'s comments on LLM coding failure modes. It ships the same behavioral core in multiple surfaces:

- `CLAUDE.md` for project-root Claude Code instructions
- `.cursor/rules/karpathy-guidelines.mdc` for Cursor
- `skills/karpathy-guidelines/SKILL.md` for reusable skill-style invocation
- `.claude-plugin/` metadata for Claude Code plugin installation

The repo's real contribution is portability: the same behavioral contract can travel across tools instead of living only in chat memory.

---

## Four Principles

### 1. Think Before Coding

The agent should surface assumptions, ambiguity, tradeoffs, and confusion before implementation. This is not "ask about everything"; it is a guardrail against silent misinterpretation on non-trivial work.

### 2. Simplicity First

The agent should choose the minimum code that solves the request, avoid speculative abstractions, avoid unrequested configurability, and simplify when a senior engineer would see bloat.

This links to [[concepts/first-principles-thinking]]: solve from the actual problem and constraints, not from template-shaped assumptions.

### 3. Surgical Changes

The agent should touch only what the task requires, match existing style, avoid drive-by cleanup, and remove only the unused code created by its own changes.

This is especially relevant to [[concepts/agentic-coding-workflows]], where agent stamina can be harmful if scope is not bounded.

### 4. Goal-Driven Execution

The repo adds a fourth operational principle: define success criteria and verification loops. Instead of vague tasks like "fix the bug," convert work into tests, checks, and observable success states.

This is the bridge between instruction files and autonomy. Agents become more useful when they can loop against a goal without guessing what "done" means.

---

## Installation Surfaces

The repo supports three practical deployment modes:

- Per-project `CLAUDE.md`: best when a single repo needs specific defaults.
- Claude Code plugin/skill: best when the same behavior should be available across projects.
- Cursor rule: best when the same behavioral contract should apply inside Cursor.

The repo also warns that these guidelines bias toward caution over speed, which matters. For trivial edits, full ceremony can slow the work. For risky or ambiguous work, the ceremony prevents expensive cleanup.

---

## Application To This Wiki

This repository reinforces the user's existing agent collaboration model:

- Claude plans/reviews.
- Codex builds.
- Hermes should learn durable behavior through files and runtime rules.
- Shared repo files are the context bus.

The missing piece is not another huge prompt. The useful piece is a small operating stack: project facts, decision memory, failure memory, tool-specific adapters, and verification rules.

See [[synthesis/agent-instruction-operating-system]].

## Links

- [[concepts/agent-operating-instructions]]
- [[concepts/agentic-coding-workflows]]
- [[entities/andrej-karpathy]]
- [[sources/karpathy-claude-md-hit-number-one]]
