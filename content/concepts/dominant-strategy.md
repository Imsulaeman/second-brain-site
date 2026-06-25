---
title: "Dominant Strategy"
type: concept
tags: [game-theory, decision-making, strategy, rationality]
created: 2026-06-25
updated: 2026-06-25
sources: 1
---

# Dominant Strategy

A dominant strategy is a choice that produces the best available outcome for a player regardless of what the other player does. You don't need to know or predict the opponent's move — the dominant strategy is optimal against every possible opponent action.

In the one-off [[concepts/prisoners-dilemma]], defecting is dominant: if the opponent cooperates, you're better off defecting (you get 5 instead of 3); if the opponent defects, you're still better off defecting (you get 1 instead of 0). Defecting wins both cases.

The disturbing implication: when both players follow their dominant strategy, they produce a collectively worse outcome (both get 1) than if neither had (both get 3). Individual rationality aggregates into collective irrationality.

## Limits

Dominant strategies only exist in this clean form in simple, symmetric, one-off games. Most real situations are:
- **Iterated** — repeated over time, which changes the payoffs entirely (see [[concepts/iterated-games]])
- **Asymmetric** — players have different options, costs, or information
- **Multi-player** — coalitions and third-party effects complicate the calculus

In those cases there may be no dominant strategy, and players must reason about what opponents are likely to do — which is where game theory becomes genuinely complex.

## Connections

- [[concepts/prisoners-dilemma]] — the classic case where the dominant strategy exists but leads to a bad collective outcome
- [[concepts/iterated-games]] — repeated interaction eliminates the clean dominance of defecting; [[concepts/tit-for-tat]] wins where pure defection fails

## Sources

- [[sources/game-theory-a-simple-strategy-that-will-change-your-life]]
