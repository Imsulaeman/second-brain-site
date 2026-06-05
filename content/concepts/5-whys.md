---
title: "5 Whys"
type: concept
tags: [problem-solving, root-cause-analysis, design-thinking, kaizen, critical-thinking]
created: 2026-06-03
updated: 2026-06-03
sources: 1
---

# 5 Whys

A root-cause technique: ask "why?" iteratively — typically five times — to drill from a visible symptom down to the systemic cause that actually triggered it. Originated at [[toyota]] in the 1930s by [[sakichi-toyoda]] as part of what became the Toyota Production System; now standard in [[design-thinking]], engineering post-mortems, and [[kaizen]].

Complements [[concepts/first-principles-thinking|First Principles Thinking]] (both fight surface assumptions) and [[concepts/second-order-thinking|Second-Order Thinking]] (both look past immediate effects).

## Core Idea

Most problems present as the **last link** of a long causal chain. Patching the visible link returns the same symptom in a new shape. 5 Whys forces you to walk the chain backward, one step per "why," until the explanation no longer decomposes — that's the root cause, and that's where the fix actually lives.

## The Method

1. State the symptom precisely (observation, not interpretation).
2. Ask "why did this happen?" — answer from evidence, not theory.
3. Treat the answer as the new symptom; ask "why?" again.
4. Repeat until you hit bedrock — answers start repeating, lose relevance, or are no longer decomposable.
5. Design the fix at the bedrock layer, not the surface.

Five is a heuristic, not a quota. Three may be enough; eight may be required. The number matters less than reaching a cause that, if removed, breaks the whole chain.

## Worked Example (Toyota's original)

| Layer | Question | Answer |
|---|---|---|
| 1 | Why did the robot stop? | Circuit overloaded, fuse blew. |
| 2 | Why? | Bearings seized — insufficient lubrication. |
| 3 | Why? | Oil pump under-circulating. |
| 4 | Why? | Pump intake clogged with metal shavings. |
| 5 | Why? | **No filter on the pump.** ← root cause |

Fixing layer 1 (replace the fuse) returns the failure tomorrow. Fixing layer 5 (install a filter) ends it.

## Where It Fits in Design

In the [[design-thinking]] cycle, 5 Whys belongs to **empathize → define**. Use it on user complaints, drop-off behaviors, and survey signals before you draft a problem statement. The output is a tighter, more actionable problem statement that points ideation in the right direction.

> Symptom: "Users abandon checkout."
> After 5 Whys: "Users don't trust the payment-security signaling on the final step."

The second statement is solvable. The first is a wall.

## Failure Modes

- **Stopping too early.** First or second answer feels plausible; you ship a patch on a symptom.
- **Checklist mode.** Racing to five regardless of whether each step is anchored in evidence.
- **Assumption-stuffing.** Replacing observation with the team's narrative. The chain is only as good as the data behind each step.
- **Solo drilling.** Single-perspective chains miss blind spots. Bring teammates to challenge each step.
- **Accusatory phrasing.** "Why did you do that?" → defensive answers → false chain. Use "What led to that?" / "Walk me through it."
- **Vague answers.** Signal to rephrase the question, return to evidence, or restart from a different symptom.

## Adjacent Techniques

- [[concepts/first-principles-thinking|First Principles Thinking]] — strips inherited assumptions; 5 Whys strips inherited symptoms. Pair them: 5 Whys finds the real problem, first-principles designs the real solution.
- [[inversion]] — instead of "why did this fail?", ask "how would I cause this to fail?" Catches causes the forward chain misses.
- [[concepts/second-order-thinking|Second-Order Thinking]] — looks forward at consequences; 5 Whys looks backward at causes. Both fight surface reasoning.
- [[problem-framing]] — 5 Whys is one of the sharpest tools for getting the frame right.
- Fishbone (Ishikawa) diagram — branching version of the same instinct; use when causes are multi-factor rather than chained.

## When to Reach for 5 Whys

- A bug, defect, or incident — before the temptation to patch.
- A user behavior that keeps recurring after fixes.
- A personal habit or project that keeps failing — [[kaizen]] applied to yourself.
- Any moment you catch yourself solving the *visible* problem.

## When to Reach for Something Else

- The symptom has multiple parallel causes — use a fishbone diagram.
- The chain branches at every step — use a causal map.
- You don't have evidence for any answer — go collect data first; 5 Whys without evidence is fiction.

## Sources

- [[what-are-5-whys]] — Interaction Design Foundation definition
These problem-solving approaches combine inductive drilling into root causes with deductive application of structured questioning frameworks.
