---
title: "Karpathy's CLAUDE.md Hit #1"
type: source
tags: [ai, coding-agents, claude-code, instructions, memory, workflow]
created: 2026-05-21
updated: 2026-05-21
sources: 1
---

# Karpathy's CLAUDE.md Hit #1

Source: `raw/Karpathy's CLAUDE.md hit 1 (ingested).md`

This clipped thread argues that a project-root instruction file can turn AI coding from repeated re-explanation into a durable workflow. Its strongest idea is not the claimed productivity math, which should be treated as marketing, but the operational pattern: write down defaults, scope rules, memory rules, and project context once, then make every session inherit them.

---

## Core Argument

The thread frames `CLAUDE.md` as a persistent context layer for Claude Code:

- The model starts each session without knowing the stack, standards, project background, or prior decisions unless they are written somewhere it reads automatically.
- Re-explaining the same context wastes time and invites inconsistent behavior.
- Most expensive agent mistakes come from three gaps: missing defaults, weak behavior constraints, and no memory of previous decisions.

The source is useful when read as a checklist for [[concepts/agent-operating-instructions]], not as a verified productivity study.

---

## Three Buckets Of Instructions

### Defaults

Defaults reduce repeated explanation:

- response style and length
- the user's background and knowledge gaps
- current project goal, audience, stack, and avoid-list
- voice and writing style when drafting on the user's behalf

This maps directly to the wiki's existing [[concepts/agentic-coding-workflows]] idea: the human should not repeatedly manage the same low-level context. Durable context should carry it.

### Behavior

Behavior rules limit unwanted blast radius:

- stay in scope
- ask before large rewrites
- confirm before destructive actions
- show changed files after work
- think before writing code on non-trivial tasks

This is the practical antidote to agent overreach. The point is not to make the agent timid; it is to preserve human intent and make every changed line trace back to the task.

### Memory And Stack

The thread recommends durable files such as `MEMORY.md` and `ERRORS.md`:

- decision log: what was decided, why, and what was rejected
- failure log: what did not work and what worked instead
- permanent facts: constraints and architectural decisions
- locked stack: language, framework, package manager, database, tests, styling

This is very close to the user's existing Second Brain and project-context workflow: raw source stays immutable, working knowledge becomes linked pages, and agents use repo files as the context bus.

---

## Karpathy Four-Rule Core

The thread highlights four rules attributed to [[entities/andrej-karpathy]]:

1. Ask rather than assume when intent, architecture, or requirements are unclear.
2. Use the simplest solution that could work.
3. Do not touch unrelated code.
4. Flag uncertainty explicitly instead of pretending confidence.

The related repository [[sources/andrej-karpathy-skills-repo]] refines this into four principles: think before coding, simplicity first, surgical changes, and goal-driven execution.

---

## What To Apply

For this Second Brain and the user's coding projects, the durable takeaway is:

- Put project-specific context in a repo file that agents actually read.
- Separate permanent facts from session notes.
- Make success criteria verifiable.
- Preserve a small failure/decision log when mistakes repeat.
- Bias coding agents toward bounded changes and explicit uncertainty.

This connects to [[synthesis/agent-instruction-operating-system]].

## Links

- [[concepts/agent-operating-instructions]]
- [[concepts/agentic-coding-workflows]]
- [[entities/andrej-karpathy]]
- [[sources/andrej-karpathy-skills-repo]]
