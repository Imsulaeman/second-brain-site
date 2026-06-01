---
title: "Andrej Karpathy"
type: entity
tags: [ai, coding-agents, deep-learning, software-engineering]
created: 2026-05-21
updated: 2026-05-21
sources: 2
---

# Andrej Karpathy

Andrej Karpathy is an AI researcher and engineer whose public comments on LLM coding behavior are used in these sources as the seed for a practical agent-instruction pattern.

This page records how he appears in the ingested sources, not a full biography.

---

## Role In The Sources

[[sources/karpathy-claude-md-hit-number-one]] presents Karpathy as the origin of four concise rules for making Claude Code less error-prone:

- ask rather than assume
- use the simplest solution first
- avoid unrelated edits
- flag uncertainty explicitly

[[sources/andrej-karpathy-skills-repo]] expands those ideas into a portable instruction package for Claude Code, Cursor, and skill/plugin surfaces.

---

## Why It Matters Here

Karpathy's framing fits this wiki's broader pattern:

- [[concepts/epistemic-humility]]: name uncertainty instead of hiding it.
- [[concepts/first-principles-thinking]]: choose the simplest solution from actual constraints.
- [[concepts/agentic-coding-workflows]]: make agents useful through bounded tasks and verification.
- [[concepts/agent-operating-instructions]]: preserve these rules in durable project files.

The key insight is that coding-agent quality is partly a model problem, but also a context-system problem. Better instructions, scoped tasks, and verification loops improve the whole work system.

## Sources

- [[sources/karpathy-claude-md-hit-number-one]]
- [[sources/andrej-karpathy-skills-repo]]
