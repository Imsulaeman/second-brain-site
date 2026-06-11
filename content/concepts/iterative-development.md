---
title: "Iterative Development"
type: concept
tags: [ux-design, agile, design-process, prototyping, continuous-improvement]
created: 2026-06-11
updated: 2026-06-11
sources: 1
---

# Iterative Development

Ship something imperfect. Learn from real users. Improve it. Repeat. Iterative development treats every release as a hypothesis and every user interaction as data — not an ending, but a checkpoint.

The opposite of shipping to the Done column and never looking back.

## Iterative vs Incremental

These are often used interchangeably but describe fundamentally different models.

**Incremental** development builds complete components before assembling the whole. Users get nothing until a finished part is ready. The product doesn't exist in working form until late in the process.

**Iterative** development ships a working whole from the start — minimal, rough, but functional — and refines each pass. The product is always a product; it just gets better.

![Incremental vs iterative — Mona Lisa](../assets/iterative-vs-incremental-mona-lisa.png)
*Incremental builds complete sections (just a corner until near the end). Iterative ships a full sketch and adds resolution with each pass.*

The practical consequence: iterative development gets something in front of real users far earlier, which means feedback arrives when it's still cheap to act on.

## The Cycle

Three stages that repeat:

1. **Research** — understand current user behavior and what's failing
2. **Design and prototype** — build the cheapest version that tests the key question
3. **Test and refine** — observe real users; decide whether to tweak or redesign more radically

![The iterative UX design cycle — Research → Design → Build](../assets/iterative-process-ux-cycle.png)
*Each pass around the loop tightens the fit between the product and actual user needs.*

This maps directly onto [[concepts/design-thinking|design thinking]]'s prototype → test → iterate loop. Design thinking names the stages; iterative development is the operating philosophy that says the loop never fully stops.

It also parallels [[concepts/kaizen|kaizen]] — continuous improvement as a system rather than an event. Kaizen applies the same logic to manufacturing processes; iterative development applies it to product design.

## The Local Maxima Problem

Iteration cannot fix a bad starting point. [[entities/alan-dix|Alan Dix]]'s insight: if your initial design is in the wrong area, no amount of incremental improvement will get you to a great product. You can only optimize what your starting point allows.

Starting in the Malvern Hills and always walking uphill gets you to 900 feet. Starting in the Himalayas and always walking uphill gets you to Everest. The process is identical; the outcome is not.

The implication: two things are required for iteration to work well. First, a starting point good enough to be in the right general area — not perfect, but not fundamentally wrong. Second, accurate diagnosis at each step. Fixing the visible symptom without understanding the root cause may make things worse. See [[concepts/local-maxima]] for the full concept.

This is the failure mode [[concepts/kaizen|kaizen]] calls "local optimization, global stagnation" — polishing individual steps while the overall system architecture is wrong.

## MVP vs MDP

The lean-startup concept of MVP (Minimum Viable Product) asks: what is the minimum we can build that is technically viable? Frank Spillers argues this framing is insufficient for UX. The better question is MDP — **Minimum Desirable Product**: what is the minimum that users actually *want*?

Viability from an engineering perspective and desirability from a user perspective are not the same thing. Iterative development in UX optimizes for desirability at each stage, not just ship velocity.

## What Breaks It

[[entities/laura-klein|Laura Klein]]'s Done Column anti-pattern: teams that ship features, move them to Done, and never return. Sometimes without even checking whether users use the feature. The result is products full of half-finished things that never cohere. Shipping stripped-down versions "to get them out the door" only works if the team actually goes back. Without that return, the strip-down is just undone work.

Over-iteration is the opposite failure: chasing perfection when good enough is already in hand. Reid Hoffman's rule: *"If you are not embarrassed by the first version of your product, you've launched too late."*

## Sources

- [[sources/what-is-iterative-development]]
