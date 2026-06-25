---
title: "Prisoner's Dilemma"
type: concept
tags: [game-theory, decision-making, cooperation, strategy, mathematics, social-science]
created: 2026-06-25
updated: 2026-06-25
sources: 1
---

# Prisoner's Dilemma

The prisoner's dilemma is a game structure where two players would both be better off cooperating, but each player has an individual incentive to defect — and if both defect, both end up worse than if both had cooperated.

The payoff matrix (from Axelrod's tournament):

| | Opponent cooperates | Opponent defects |
|---|---|---|
| **You cooperate** | Both get 3 | You get 0, they get 5 |
| **You defect** | You get 5, they get 0 | Both get 1 |

Defecting always produces a better or equal result for the individual in isolation — it's the [[concepts/dominant-strategy]]. But mutual defection (1, 1) is worse for both than mutual cooperation (3, 3). The rational individual choice produces a collectively irrational outcome.

## Why It Matters

The prisoner's dilemma is not a toy problem. It describes the structure of a huge range of real situations: arms races, environmental agreements, business competition, roommate dynamics, international trade. Anywhere two parties could both gain from cooperation but each can gain more by defecting — and both lose if both defect — the dilemma applies.

The dilemma explains why cooperation is hard to establish and easy to destroy even when everyone would benefit from it. It takes trust, communication, or repeated interaction to escape the defection equilibrium.

## One-Off vs. Iterated

In a single encounter, defecting is rational. In [[concepts/iterated-games]] — where the same players interact repeatedly — the calculus shifts. Reputation, retaliation, and the possibility of future cooperation all become factors. The dominant strategy in a one-off game is no longer dominant across many rounds. This is where [[concepts/tit-for-tat]] emerges.

## Connections

- [[concepts/dominant-strategy]] — defecting is dominant in the one-off version; the dilemma exists precisely because the dominant strategy leads to a bad collective outcome
- [[concepts/iterated-games]] — the transformation that makes cooperation possible
- [[concepts/tit-for-tat]] — the strategy that consistently wins iterated versions of this game
- [[concepts/incentive-superpower]] — the dilemma is an incentive structure problem; solving it requires redesigning the payoffs or the conditions

## Sources

- [[sources/game-theory-a-simple-strategy-that-will-change-your-life]]
