---
title: "Iterated Games"
type: concept
tags: [game-theory, cooperation, strategy, decision-making, relationships]
created: 2026-06-25
updated: 2026-06-25
sources: 1
---

# Iterated Games

An iterated game is a repeated interaction between the same players — the same game played over many rounds, with each round's outcome carrying forward into the next. The repetition transforms what's strategically rational.

In a one-off [[concepts/prisoners-dilemma]], defecting is the [[concepts/dominant-strategy]]. But in an iterated version, defecting has a cost that doesn't exist in a single encounter: it damages the relationship, invites retaliation, and forecloses future cooperation. The shadow of the future changes the math.

Axelrod's key insight: "What makes it possible for cooperation to emerge is the fact that the players might meet again."

## What Repetition Changes

**Reputation** — each interaction creates information. Players who defect acquire a reputation for defecting; players who cooperate build trust. In a one-off game, reputation is irrelevant because there's no future. In iterated games, reputation is a resource.

**Retaliation** — a player who gets defected on can respond next round. This makes exploitation costly in a way it isn't in a single encounter. The threat of retaliation disciplines defectors.

**Cooperation as equilibrium** — when players know they'll interact again, cooperation can become stable. Neither player wants to trigger a defection spiral that leaves both worse off across all future rounds. The iterated structure makes the cooperative outcome self-enforcing.

## The Unknown Horizon

In Axelrod's second tournament, the number of rounds per game was left undefined — players couldn't calculate backward from a known endpoint. This better mirrors real life: most interactions don't have a defined endpoint, so you can't reason about "the last round" and defect without consequence. An unknown horizon sustains cooperation.

## Connections

- [[concepts/prisoners-dilemma]] — the game that becomes solvable through iteration
- [[concepts/dominant-strategy]] — defecting is dominant in one-off games; iteration eliminates that dominance
- [[concepts/tit-for-tat]] — the strategy that wins iterated games by exploiting the cooperation-sustaining properties of repeated interaction

## Sources

- [[sources/game-theory-a-simple-strategy-that-will-change-your-life]]
