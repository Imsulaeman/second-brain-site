---
title: "Local Maxima"
type: concept
tags: [design, optimization, problem-solving, iterative-development, decision-making]
created: 2026-06-11
updated: 2026-06-11
sources: 2
---

# Local Maxima

A local maximum is the highest point reachable from your current position by always moving uphill — but not the highest point overall. You are at the top of your hill, and there are taller mountains nearby that you cannot reach without first going downhill.

[[entities/alan-dix|Alan Dix]] uses the concept to explain why iteration alone cannot rescue a bad starting design. If you begin in the wrong area and always make incremental improvements, you climb the local hill. That hill may be far shorter than the global optimum. No amount of careful iteration from that starting position will get you to the mountain range.

## The Mountain Metaphor

Dix's version: the Malvern Hills in the UK peak at around 900 feet. If you're dropped there and always walk uphill, 900 feet is your ceiling. If you start in the Himalayas, Everest is available. Tiree, the island he lives on, tops out at 120 meters — start there and walk uphill, and 120 meters is your best possible outcome regardless of effort or technique.

The process is the same in each case. The starting position determines the maximum.

## In Design

Applied to product design: a fundamentally misconceived interface, iterated carefully and thoroughly, produces a well-polished version of the wrong thing. The team is technically improving — every usability test is surfacing real issues and fixing them — but the overall design is still climbing the wrong hill.

This is why [[entities/alan-dix|Dix]] argues that iterative development requires two things, not one:
1. **A good starting point** — not perfect, but in the right general area
2. **Accurate diagnosis** — understanding *what* is actually wrong, not just that something is wrong. Fixing the obvious symptom without understanding root cause can make a design worse while appearing to improve it.

The practical test: if a series of small improvements isn't producing meaningfully better outcomes, the problem may be the starting position, not the execution of the iterations.

## The Radical Change Escape

Escaping a local maximum requires going downhill first — discarding what seemed like progress to find a better starting point. In product terms: stepping back from incremental fixes to question whether the fundamental design direction is right. This is costly and uncomfortable, which is why teams resist it. But sometimes iterating harder is the wrong move.

This connects directly to [[concepts/first-principles-thinking|first-principles thinking]] — which asks not "how do we improve this?" but "if we started from scratch, would we build this?" First principles is the method for identifying when you're on the wrong hill.

[[concepts/kaizen|Kaizen]] names the same failure mode: "local optimization, global stagnation" — improving individual parts of a system whose overall architecture is wrong.

## Beyond Design

Local maxima appear in any optimization process: machine learning (gradient descent gets stuck in local minima), investment strategy (over-optimizing for the current market regime), habit formation (polishing a routine that serves the wrong goal). The concept is general — any iterative improvement process operating in a complex landscape can get trapped.

## Sources

- [[sources/what-is-iterative-development]]
- [[sources/proxima-centauri]]
