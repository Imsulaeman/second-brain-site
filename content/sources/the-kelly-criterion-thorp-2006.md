---
title: "The Kelly Criterion in Blackjack, Sports Betting, and the Stock Market"
type: source
tags: [kelly-criterion, trading, investing, blackjack, risk-management, math]
created: 2026-06-18
updated: 2026-06-18
sources: 1
---

# The Kelly Criterion in Blackjack, Sports Betting, and the Stock Market

**Author:** [[entities/Edward-Thorp|Edward O. Thorp]]
**Type:** Handbook chapter (Elsevier, 2006; conference paper 1997, revised 2005)
**Raw:** `raw/THE KELLY CRITERION IN BLACKJACK SPORTS BETTING,2006-thorp (ingested).pdf`

---

Thorp's definitive practitioner-mathematician treatment of [[concepts/kelly-criterion|Kelly sizing]]: derivation, ruin math, casino applications, a successful sports-betting system, and continuous-time portfolio Kelly.

## The Central Problem

Once you have positive expectation, the remaining question is **how much to bet**. Two naive answers both fail:

- **Bold (maximize arithmetic expectation):** bet everything each round → ruin is almost certain even with 51/49 odds.
- **Timid (minimize ruin probability):** bet the minimum → survive but starve growth.

Kelly chooses the intermediate: maximize **expected log wealth** — equivalent to maximizing the long-run **geometric growth rate** \(g(f)\).

## Coin-Toss Derivation

Even-money biased coin: win prob \(p\), lose prob \(q=1-p\). Bet fixed fraction \(f\) of bankroll each trial.

```text
g(f) = p·log(1+f) + q·log(1−f)
f* = p − q    (even money)
```

For \(p=0.51\): **f* = 0.02** — risk 2% per flip. Proportional betting means technical "ruin" (hitting exactly zero) has probability 0; wealth can still approach arbitrarily small values under bad sequences.

## Why Log Utility

Daniel Bernoulli used \(\log x\) on the St. Petersburg paradox. [[entities/John-Kelly-Jr|John Kelly]] (1956) showed remarkable asymptotic properties. [[entities/Claude-Shannon|Claude Shannon]] brought the paper to Thorp in 1960 while Thorp was building blackjack card-counting theory — Thorp then applied Kelly in *Beat the Dealer* (1962).

## Key Asymptotic Properties (Kelly vs Other Strategies)

- Kelly maximizes asymptotic growth rate.
- Kelly minimizes expected time to reach large goals.
- Kelly bettor's wealth eventually surpasses any **essentially different** fixed-fraction strategy with probability → 1.
- But for finite \(n\), Kelly can lose to other strategies — the long run takes a long time.

## Drawdowns and Fractional Kelly

Thorp reports cautious Kelly users find **frequency of substantial bankroll reduction uncomfortably large** at full Kelly. Moderate underbetting:

- reduces drawdown discomfort
- provides margin if edge is overestimated
- sacrifices relatively little growth (half-Kelly keeps ~75% of max growth rate with ~50% of variance)

Section 7.3: if estimated edge \(m_e\) exceeds true edge \(m_t\), full Kelly can produce **g ≤ 0** (wild oscillations or ruin). Assume true edge is below estimate; choose \(f < f^*_e\).

**Half-Kelly trade:** probability of doubling before halving rises from 2/3 to 8/9; probability of halving starting capital drops from 1/2 to 1/8 — in exchange for giving up ~25% of growth rate.

## Blackjack

With even-money independent positive-expectation hands: bet fraction ≈ expectation. Real play adjusts down for: negative-expectation waiting bets, payoffs >1:1, multiple simultaneous hands, estimation error.

## Sports Betting (1994 System)

Thorp describes a 101-day baseball betting system (first ~4.5 months of 1994) using Kelly-style sizing on identified edges — empirical proof the framework works outside cards.

## Stock Market / Continuous Approximation

For continuous compounding with expected excess return \(m-r\) and variance \(s^2\):

```text
f* = (m − r) / s²
g∞(f*) = (m − r)² / (2s²) + r
```

Kelly investor dynamically reallocates as forecasts of \(m\), \(r\), \(s\) change. With leverage and taxes, required fractions shift — high tax rates amplify apparent optimal leverage in theory but practical leverage limits bite.

S&P rough example (\(m=.11, s=.15, r=.06\)): full Kelly \(f^* \approx 2.2\) — most investors use unlevered or fractional equivalents.

## Overbetting Warning

Overbetting is **always harmful** — worse than underbetting. Combining overestimated edge with \(f > f^*\) can produce negative growth and ruin despite positive true edge.

## Connections

- [[concepts/kelly-criterion]]
- [[concepts/ergodicity]]
- [[concepts/position-sizing]]
- [[sources/understanding-the-kelly-criterion]]
- [[sources/fortunes-formula]]
- [[entities/Claude-Shannon]]
- [[entities/John-Kelly-Jr]]

## Sources

- `raw/THE KELLY CRITERION IN BLACKJACK SPORTS BETTING,2006-thorp (ingested).pdf`