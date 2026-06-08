---
title: "Agentic Coding Workflows"
type: concept
tags: [ai, coding, agents, productivity, software-engineering, workflow, weak]
created: 2026-05-11
updated: 2026-05-21
sources: 3
---

# Agentic Coding Workflows

Agentic coding workflows use AI systems as semi-autonomous execution agents rather than passive autocomplete tools. The human's role shifts from writing every line to designing the system of work: research, task boundaries, quality checks, handoffs, and cleanup.

---

## Core Pattern

The workflow is:

1. Clarify the problem and unknowns.
2. Use research to fill knowledge gaps.
3. Convert research into an agent-readable execution plan.
4. Give agents bounded, tool-using work.
5. Let runtime events reveal bottlenecks.
6. Review and clean up as a separate job.
7. Preserve context in durable notes, docs, or handoffs.

This is close to managing a small technical team, except the "team" is made of agents with uneven judgment and high execution stamina.

---

## Good Problem Spaces

Agentic coding works best when:

- outputs are testable
- benchmarks are repeatable
- the agent can run tools
- the task is backend, infrastructure, or data-heavy
- failures can be detected mechanically
- design taste is less central than correctness

It works worse when:

- the goal is fuzzy
- user reaction is the main metric
- inputs are scarce or unpredictable
- the task needs strong taste, nuance, or original creative judgment

---

## Human Role

The human becomes a bottleneck manager:

- define the work
- choose the model/tool for the job
- set quality bars
- check progress at intervals
- remove blockers
- force research when assumptions get stale
- review security and technical debt
- decide what deserves to exist

This connects to [[sources/something-is-different-about-2026]]: AI abstracts skills upward. The scarce skill becomes judgment, taste, problem selection, and context management.

---

## Failure Modes

| Failure Mode | Description | Fix |
|---|---|---|
| Micromanagement | Human babysits every turn and destroys autonomy | Check in periodically, not constantly |
| Wrong problem space | Agent works on fuzzy objective with no feedback loop | Choose testable tasks |
| Context collapse | Long-running work loses rationale and handoff state | Write transition plans |
| Technical debt | Agent iterates messily and leaves clutter | Schedule cleanup as its own task |
| Model mismatch | Expensive model used for bulk work, cheap model used for hard judgment | Allocate models by task |
| Overtrust | Human skips review because output looks competent | Keep review and security gates |

---

## Relation To The LLM Wiki

This Second Brain is itself an agentic workflow. The human curates sources and asks questions; the agent ingests, links, summarizes, and maintains structure. The same rules apply:

- keep raw sources immutable
- write durable artifacts
- update indexes and logs
- lint periodically
- avoid unreviewed sprawl

## Instruction Files As Workflow Infrastructure

[[sources/karpathy-claude-md-hit-number-one]] and [[sources/andrej-karpathy-skills-repo]] sharpen the workflow layer: agents need durable operating instructions, not only task prompts.

The reusable pattern is:

- write down project defaults once
- make scope boundaries explicit
- preserve decisions and repeated errors in files
- turn vague requests into success criteria
- verify the result before calling the task done

See [[concepts/agent-operating-instructions]] and [[synthesis/agent-instruction-operating-system]].

## Sources

- [[sources/ramping-your-coding-output-with-openai-codex]]
- [[sources/karpathy-claude-md-hit-number-one]]
- [[sources/andrej-karpathy-skills-repo]]
Agentic coding often alternates between inductive pattern recognition from code and errors, and deductive application of architectural principles and constraints.
