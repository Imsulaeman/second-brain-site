---
title: "Agent Operating Instructions"
type: concept
tags: [ai, coding-agents, context, workflow, software-engineering]
created: 2026-05-21
updated: 2026-05-21
sources: 2
---

# Agent Operating Instructions

Agent operating instructions are durable files that teach coding agents how to behave inside a project: what context matters, what must not be touched, how to handle uncertainty, and how to verify work.

They are the practical interface between human intent and [[concepts/agentic-coding-workflows]].

---

## What They Solve

Without durable instructions, each session starts from weak context:

- the agent guesses the stack and architecture
- the user repeats the same preferences
- prior decisions disappear
- unrelated cleanup sneaks into diffs
- uncertainty is hidden until the implementation is already wrong

Instruction files reduce this by turning repeated context into a project artifact.

---

## The Minimal Stack

A useful instruction stack has five layers:

| Layer | Purpose | Example |
|---|---|---|
| Permanent facts | Stable project constraints | stack, audience, product direction |
| Behavior rules | How the agent should act | ask when unclear, stay scoped |
| Decision memory | Why choices were made | `MEMORY.md` or `context/decisions.md` |
| Failure memory | What failed before | `ERRORS.md` or troubleshooting notes |
| Verification rules | How done is proven | tests, screenshots, lint, user-visible checks |

For the user's multi-agent setup, this can be split by tool:

- `AGENTS.md` or Codex instructions for build/execution behavior
- `CLAUDE.md` for Claude planning/review behavior
- `HERMES.md` and `context/` files for Hermes runtime discipline
- the Second Brain wiki for durable synthesis across projects

---

## Good Instruction Rules

The most reusable rules from the ingested sources:

- Ask before acting when intent or architecture is unclear.
- Prefer the simplest solution that fits the actual request.
- Touch only files and lines directly related to the task.
- Flag uncertainty explicitly.
- Define success criteria and verify against them.
- Preserve decisions in a readable log when they matter later.
- Record repeated failure patterns so agents do not loop on dead approaches.

---

## Bad Instruction Rules

Instruction files become harmful when they are too vague or too heavy:

- "Be careful" without concrete behavior.
- "Use best practices" without the local stack.
- Huge prompt dumps nobody can maintain.
- Rules that require confirmation for trivial edits.
- Tool-specific instructions copied blindly into tools that do not read them.

The best instruction files are small, local, and alive. They should be specific enough to change behavior, but short enough that humans keep them updated.

---

## Connection To Learning

This concept mirrors [[concepts/use-it-or-lose-it]] and [[concepts/spaced-repetition]]: knowledge that is not retrieved decays. Project decisions decay too unless they are written in a place the agent actually reads during work.

## Sources

- [[sources/karpathy-claude-md-hit-number-one]]
- [[sources/andrej-karpathy-skills-repo]]
Designing agent operating instructions requires both inductive pattern recognition from observed agent behavior and deductive application of constraint and goal principles.
