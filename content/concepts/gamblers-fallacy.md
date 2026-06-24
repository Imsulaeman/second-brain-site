---
title: "Gambler's Fallacy"
type: concept
tags: [psychology, probability, trading, cognitive-bias, statistics]
created: 2026-06-24
updated: 2026-06-24
sources: 2
---

# Gambler's Fallacy

The gambler's fallacy is the belief that independent random events become more likely after a run of opposite outcomes. After four coin flips of heads, tails is "due." After four losing trades, the next one "has to win."

The belief is wrong. Each event is independent. The coin has no memory. The market has no obligation to balance your loss streak.

## Why It Feels True

The error has a coherent statistical intuition behind it. Over a large sample, win and loss rates do converge to their expected frequencies. A 50% win rate means roughly half the trades will win *across thousands of trades*. The fallacy imports that macro-level truth into micro-level decisions — as if the distribution must self-correct on each individual outcome, not just across the population.

## In Trading

After a losing streak, the fallacy produces two dangerous behaviors:

1. **Increasing position size** — "I've been losing, the next one will win; I'll size up to recover faster." The streak has not changed the odds. The larger size now applies to an unchanged 50% chance, and also raises [[concepts/risk-of-ruin]].

2. **Abandoning the system** — reading four losses as evidence the edge has broken, rather than as normal variance within a valid system. Both responses treat a small sample as causally meaningful when it is not.

The distinction that matters: losing streaks are expected within any probabilistic system. Whether a streak signals edge decay requires a large-sample comparison, not a reaction to the last five trades.

## The Mirror Error: Trend Extrapolation

Howard Marks describes the inverse mistake. After strong recent performance, investors increase return expectations — just as the strong period has borrowed from future returns and reduced what's available. Marks calls this extrapolation the main error: past performance is treated as evidence of future performance when it is often evidence of reduced future returns.

The gambler's fallacy says: after losses, wins are due (expect mean reversion). Trend extrapolation says: after wins, expect more wins (assume the run continues). Both errors import the wrong statistical model. Independent events don't self-correct; mean-reverting events don't trend indefinitely. The key is knowing which regime you're in — and being suspicious of any belief system that uses recent runs to raise expectations in either direction.

## Connections

- [[concepts/law-of-small-numbers]] — the same underlying cognitive error: small samples are treated as representative of the full distribution
- [[concepts/probabilistic-trading-mindset]] — the antidote: each trade is an independent draw; commit to every valid setup; judge edge across the full sample
- [[concepts/expectancy]] — a high expected value per trade does not compress losing streaks; streaks are features of distributions, not bugs
- [[concepts/risk-of-ruin]] — sizing up after a loss streak directly increases ruin probability
- [[concepts/reasonable-expectations]] — Marks' calibration framework; extrapolation after good runs sets expectations that markets then fail to meet

## Sources

- [[sources/the-math-of-winning-in-trading]]
- [[sources/the-complete-collection-howard-marks]] — trend extrapolation as the main investor error; past returns borrow from future returns
