---
title: "Ergodicity"
type: concept
tags: [math, risk, trading, expected-value, compounding, survival, weak]
created: 2026-05-05
updated: 2026-05-19
sources: 2
---

# Ergodicity

The property of a system where the time-average of an individual path equals the ensemble average across all possible paths. Most real-world repeated-risk processes are **non-ergodic** — meaning the average outcome across many people is very different from the likely outcome for any one individual over time.

## The Jackpot Paradox

A game can have **positive arithmetic expected value** and yet cause almost everyone to go broke.

**Example:** Coin flip — +50% on heads, -40% on tails.
- Arithmetic mean (average wealth across all outcomes): positive
- Geometric mean (median outcome over many flips): **negative**

Why? One bad streak wipes out many previous wins. The arithmetic mean is dominated by rare jackpot outcomes. The median path bleeds to zero.

Simulation: 25,000 people each flip 1,000 times → virtually all end up at ~$0, despite the game having positive expected value.

**To break even, you need 570 heads out of 1,000 flips.** All expected value is concentrated in the top 0.0001% of outcomes.

## Arithmetic Mean vs Geometric Mean

| | What It Measures |
|--|-----------------|
| **Arithmetic mean** | Average wealth across all possible outcomes (ensemble) |
| **Geometric mean** | Expected wealth for a single individual over time (time-average) |

In a multiplicative process (like compounded returns), you should care about the geometric mean, not the arithmetic mean. "In the world of compounded returns, the dose makes the poison."

Also called: **ergodicity problem** (Ole Peters / LML Economics), **volatility drag** (finance), or the **Jackpot Paradox**.

## Three Wealth Preferences

| Preference | Behavior | Long-run fate |
|------------|----------|--------------|
| **Log** | Risk appetite shrinks as bankroll grows | Survives — Kelly-optimal |
| **Linear** | Same risk appetite at any wealth level | Goes to zero eventually |
| **Exponential** | Risk appetite grows with bankroll | Goes to zero fast |

SBF (FTX) held linear preferences. Su Zhu / 3AC held exponential preferences. Both collapsed.

## Practical Implications

1. **Never bet a fixed fraction of your bankroll on positive-EV games** if the volatility is high — you'll still go broke
2. **Kelly criterion** or log-wealth sizing is the mathematically correct solution for ergodic survival
3. **Diversification** works partly because it reduces variance of the geometric mean, even at the cost of arithmetic mean
4. **The scarcity mindset** that drives people to chase jackpots (feeling behind, wanting to make it fast) is the enemy of compounding

> "Build more edge rather than risk more size. Log wealth is what matters. Maximize the 50th percentile outcome."

## Connection to Other Concepts

- [[concepts/deliberate-practice|Deliberate Practice]] is ergodicity-aware: consistent, calibrated effort produces far better long-run outcomes than high-variance swings
- [[concepts/prereq-mastery|Prerequisite Mastery]] applies the same logic: skipping steps is a high-variance bet that often leads to total failure
- [[concepts/alternative-histories]] makes the path-dependence explicit: the realized path is only one possible draw
- [[concepts/skewness-and-asymmetry]] explains why average outcomes can hide ruinous individual paths

## Taleb Connection

[[sources/fooled-by-randomness]] is not an ergodicity textbook, but it gives the trader's lived version of the same problem. A strategy can look successful across a short observed path while carrying hidden exposure to a rare event that would erase the player. The lesson is the same as the Jackpot Paradox: do not optimize for the attractive average if the individual path cannot survive variance.

## Sources

- [[sources/fooled-by-randomness]] - Alternative histories, hidden tail risk, and survival under randomness.
- [[sources/the-jackpot-age]] — detailed quantitative exposition, cultural analysis
These concepts rely on inductive reasoning from historical and probabilistic patterns combined with deductive application of structural constraints.
