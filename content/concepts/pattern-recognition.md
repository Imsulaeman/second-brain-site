---
title: "Pattern Recognition"
type: concept
tags: [pattern-recognition, computational-thinking, problem-solving, programming]
created: 2026-06-09
updated: 2026-06-09
sources: 3
---

Pattern recognition is what lets you solve a new problem by noticing it is structurally the same as one you've already solved. Without it, every problem is encountered fresh. With it, you can reuse solutions, skip redundant work, and bring known structure to bear on unknown territory.

It is one of the four core elements of [[concepts/computational-thinking]], and in practice it follows [[concepts/decomposition]]: once you've broken a problem into parts, you look for patterns among those parts and between them and problems you've solved before.

## Two types of patterns

**Patterns among problems** — different problems that share underlying structure. Different email clients (Gmail, Outlook, Apple Mail) look different and feel different, but all of them have a button to create a new message, a folder system, and a search function. Those shared features are the pattern. If you're designing your own email client you don't start from nothing — you extract the pattern and build on it.

Different cake recipes are the same way: every recipe has a precise quantity of each ingredient, a specific time to add each one, and a baking duration. Once you know how to follow one recipe, you can follow any recipe because the pattern holds.

**Patterns within a problem** — recurring structure inside the sub-problems you've already decomposed into. In a recipe, every ingredient follows the same sub-pattern: identify it, measure the amount. You don't rediscover this process for each ingredient; the pattern applies across all of them.

## The diagnostic questions

When approaching a problem, these four questions surface patterns:

![[pattern-2.png]]
*The four questions to ask when looking for patterns — from the QCAA Digital Solutions lecture. The fruit grid illustrates the task: look across the set and identify what's shared.*

1. Are there any patterns you observe?
2. Do you notice any similarities between this problem and something else you've already solved?
3. Do any of the parts of this problem share qualities with each other?
4. Does anything repeat?

## The null result

If you work through these questions and find no patterns, that is also useful information: the problem is probably already in its simplest form. No pattern to exploit means no simplification is available — proceed with solving each piece directly. Pattern recognition failing cleanly is better than assuming a pattern that isn't there.

## From simple to complex

Pattern recognition scales in difficulty with the number of features you need to track simultaneously.

**Simple patterns** are single-track: a sequence alternates green/orange/green/orange — the next item is green. The rule is obvious after one observation.

**Multi-feature patterns** require isolating independent dimensions and resolving each. The harder sequence puzzle (pattern-4) uses a 2×2 grid where each quadrant contains a rotated L-shape, plus a diagonal line crossing the center at a different angle in each cell. Solving it means isolating two independent rules (L-shape rotation, diagonal rotation) and applying both.

![[pattern-5.png]]
*The most complex exercise from the QCAA lecture: five cards, each carrying four simultaneous independent patterns — arrow direction, notch position, presence/absence of a border square, and dot color counts. The answer (A) only emerges by resolving all four tracks. This is what real pattern recognition looks like in complex systems: multiple rules running in parallel, each ruling out some options until only one remains.*

The multi-track case is the realistic one. Real-world systems (codebases, games, organisations) carry several patterns simultaneously. Skilled pattern recognition means identifying which features are signal and which are noise, then tracking the signal features in parallel.

## In games and competition

Board games, card games, and sports are pattern recognition under adversarial conditions. Teams develop plays and tactics — patterns — and the opposition wins by recognizing those patterns and countering them. UNO, chess, and basketball all reward the player who reads the opponent's pattern faster than the opponent reads theirs.

## Connections

- [[concepts/computational-thinking]] — pattern recognition is the second CT move, applied after decomposition produces sub-problems to examine
- [[concepts/decomposition]] — decomposition creates the pieces; pattern recognition finds what those pieces share
- [[concepts/abstraction]] — once a pattern is found, abstraction filters it to its essential form, stripping variation to produce a reusable template
- [[concepts/inductive-reasoning]] — inductive reasoning is the cognitive mechanism behind pattern recognition: specific observations → general rule
- [[concepts/agentic-coding-workflows]] — recognizing recurring code structures, prompt patterns, and agent failure modes is pattern recognition applied to AI-assisted development

## Sources

- [[sources/pattern-recognition-qcaa-video]]
- [[sources/what-is-pattern-recognition-bbc-bitesize]]
- [[sources/computational-thinking-introduction]]
