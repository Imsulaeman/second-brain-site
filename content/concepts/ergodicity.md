---
title: "Ergodicity"
type: concept
tags: [math, risk, trading, expected-value, compounding, survival]
created: 2026-05-05
updated: 2026-06-18
sources: 4
---

# Ergodicity

Ergodicity is the question of whether the average across many possible outcomes matches what one participant is likely to experience over time. In non-ergodic situations, those two things come apart. A game can look attractive in the aggregate while still being a bad way for an individual to live.

## Why This Matters

The key distinction is between ensemble success and time-path survival. If a process includes meaningful risk of ruin, then the average across many players can be misleading. Some paths hit jackpots that pull the average upward, while most actual participants suffer a much worse fate over time.

This is why the concept matters so much for compounding. Once losses compound multiplicatively, survival becomes the first question. A strategy that occasionally wipes you out cannot be rescued by the fact that some hypothetical population average looks good.

## The Practical Intuition

Taleb's trader's version of the problem is simple: many strategies produce long stretches of apparent competence before one tail event reveals that the player was collecting pennies in front of a steamroller. [[sources/the-jackpot-age]] adds the stronger quantitative framing, but the shared lesson is the same. Do not optimize for an attractive average if your actual path through time cannot survive the variance.

This is why ergodicity belongs with [[concepts/position-sizing]], [[concepts/skewness-and-asymmetry]], and [[concepts/alternative-histories]]. The question is never just "is the expected value positive?" It is also "can this specific organism, fund, or person stay alive long enough for that expected value to matter?"

## What Non-Ergodicity Changes

- ruin becomes more important than average return
- leverage becomes more dangerous than it first appears
- diversification can improve real survival even when it lowers exciting upside
- emotional pressure matters because humans abandon painful paths before theoretical averages arrive

## Connections

- [[concepts/alternative-histories]]
- [[concepts/skewness-and-asymmetry]]
- [[concepts/position-sizing]]
- [[concepts/kelly-criterion]]
- [[sources/the-jackpot-age]]

## Sources

- [[sources/fooled-by-randomness]]
- [[sources/the-jackpot-age]]
- [[sources/fortunes-formula]] — Bernoulli geometric mean, Kelly lineage
- [[sources/the-kelly-criterion-thorp-2006]] — log-utility optimality, proportional betting
