---
title: "Agent Instruction Operating System"
type: synthesis
tags: [ai, coding-agents, codex, claude-code, hermes, workflow, context]
created: 2026-05-21
updated: 2026-05-21
sources: 4
---

# Agent Instruction Operating System

This synthesis turns the new CLAUDE.md / Karpathy-guidelines sources into an operating model for the user's broader Claude + Codex + Hermes workflow.

The core move: stop treating agent instructions as prompts, and start treating them as a small operating system for work.

---

## The Problem

Coding agents fail in familiar ways:

- They assume intent instead of asking.
- They overbuild.
- They edit unrelated code.
- They hide uncertainty.
- They forget prior decisions.
- They cannot tell when "done" has been reached.

The user's current workflow already points at the solution: shared repo files, context folders, logs, and wiki pages. [[sources/karpathy-claude-md-hit-number-one]] and [[sources/andrej-karpathy-skills-repo]] give that habit a tighter behavioral core.

---

## The Operating Stack

### 1. Project Charter

One short file answers:

- What is this project?
- Who is it for?
- What matters most?
- What should agents avoid?
- What stack and style are locked?

This belongs in the root instruction file for the tool that runs in the project.

### 2. Behavior Contract

The portable four-rule core:

1. Ask when unclear.
2. Use the simplest working solution.
3. Do not touch unrelated code.
4. Flag uncertainty explicitly.

Add the repo's fourth extension: translate tasks into success criteria and verification loops.

### 3. Memory Layer

Use durable files for decisions and repeated errors:

- Decisions: what was chosen, why, what was rejected.
- Errors: what failed, what worked instead, when to avoid repeating it.
- Context: active project state, handoffs, next actions.

For this user, the memory layer should live in repo files where possible, then graduate cross-project patterns into this Second Brain.

### 4. Tool Adapters

Each agent gets the same principles in its native surface:

- Claude: planning, review, critique, and instruction maintenance.
- Codex: implementation, verification, file edits, and concrete workspace checks.
- Hermes: runtime execution, external repo/protocol inspection, tool-backed action.

The principle is shared; the adapter changes.

### 5. Verification Layer

Every non-trivial task should have an observable check:

- tests pass
- build passes
- browser screenshot confirms UI behavior
- diff is scoped
- source ingest has index/log/overview wiring
- unresolved links are classified

This is what lets agents loop usefully without inventing their own definition of done.

---

## How To Apply It

For a new project:

1. Create a short root instruction file.
2. Add the four behavior rules.
3. Add project facts and avoid-list.
4. Add the verification commands or visible checks.
5. Create a decision/failure log only when the project starts accumulating real history.

For an existing project:

1. Inspect the real repo first.
2. Extract stable facts from existing docs, scripts, tests, and user decisions.
3. Keep the instruction file short.
4. Move verbose history into `context/`, `MEMORY.md`, or the Second Brain.
5. Revisit after the first few agent mistakes and make those mistakes impossible to repeat.

---

## Personal Default

The user's strongest pattern is not "use more AI." It is:

- make agents inspect the real workspace
- encode decisions in files
- turn repeated work into durable workflows
- separate planner/reviewer/builder roles
- preserve context so the next session starts sharper

This synthesis should guide future agent setup work across Folio, Hermes, the Second Brain, and any new coding project.

## Links

- [[concepts/agent-operating-instructions]]
- [[concepts/agentic-coding-workflows]]
- [[sources/ramping-your-coding-output-with-openai-codex]]
- [[synthesis/second-brain-as-leverage-system]]
These operating systems and knowledge maps require both inductive pattern recognition from experience and deductive application of structure and principle.
