---
title: "Minimax Strategy"
type: concept
tags: [games, algorithms, decision-making, adversarial-systems]
created: 2026-06-07
updated: 2026-06-07
sources: 1
---

# Minimax Strategy

Minimax is a game-search strategy for adversarial settings where you assume the opponent will also play intelligently. It chooses the move whose worst plausible reply still leaves you in the best available position.

## The core logic

The name says exactly what happens:

- your opponent is assumed to maximize your pain,
- you choose the move that minimizes that maximum damage.

So minimax refuses to ask only "what is my strongest-looking move?" It asks "what survives the strongest reply?"

## Why it matters

Minimax is one of the clearest formal versions of adversarial reasoning. It turns anticipation into an algorithm. Instead of vaguely warning that "the other side will respond," it forces every candidate move to be evaluated together with the opponent's best counter-move.

That is why minimax belongs near [[concepts/second-order-thinking]]. Both refuse to stop at the first visible outcome. Minimax asks, in a stricter computational form: and then what will the other side do?

## Why the book builds up to it

In [[sources/introduction-to-algorithms-and-machine-learning]], minimax appears only after simpler games, trees, and search ideas are already in place. That matters. Minimax is not a standalone trick. It depends on game states, successor states, terminal evaluations, and tree structure already being understood. The book earns the concept structurally.

## What minimax teaches beyond games

Minimax expresses a broader decision rule: in hostile environments, plans should be judged not by best-case imagination but by resilient performance under informed opposition.

That broader logic is useful anywhere another actor is adapting against you: negotiations, strategic competition, security, and markets. The point is not paranoia. The point is that one-sided planning is often fake planning.

## Limits

Full minimax becomes expensive quickly because game trees explode. That is why practical systems often need reduced search depth and heuristic evaluation rather than complete enumeration. So minimax is powerful, but only inside the limits of tractable search.

## Sources

- [[sources/introduction-to-algorithms-and-machine-learning]]
