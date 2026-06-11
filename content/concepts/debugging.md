---
title: "Debugging"
type: concept
tags: [programming, computational-thinking, problem-solving, algorithms]
created: 2026-06-11
updated: 2026-06-11
sources: 1
---

# Debugging

Debugging is the process of identifying and fixing errors (bugs) in an algorithm or program. It is distinct from evaluation: evaluation checks whether an algorithm is logically correct before it runs; debugging diagnoses what went wrong after a fault has been observed.

## Types of Errors

**Syntax errors** — the code violates the language's grammar rules and will not run at all. These are caught by the compiler or interpreter.

**Logic errors** — the code runs without crashing but produces wrong results. These are the hardest to catch because the program appears to work. A dry run (tracing the algorithm step by step with test inputs) is the primary tool for catching logic errors before they reach production.

**Runtime errors** — the code runs but crashes during execution (e.g., dividing by zero, accessing a null value). These are caught only when the specific path is executed.

## Debugging and Evaluation

[[concepts/evaluation]] and debugging are the two sides of the same quality problem. Evaluation happens before coding — it is the dry-run pass that catches errors on paper. Debugging happens after coding — it is the process of tracing errors that survived to implementation. The relationship between them reflects the fail-early principle: faults caught on paper cost minutes; faults caught in production cost hours or worse.

## Sources

- [[sources/what-is-evaluation-bbc-bitesize]]
- [[concepts/evaluation]]
- [[concepts/algorithm]]
