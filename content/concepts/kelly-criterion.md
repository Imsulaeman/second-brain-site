---
title: "Kelly Criterion"
type: concept
tags: [trading, investing, risk-management, ergodicity, compounding, sizing, math]
created: 2026-06-18
updated: 2026-06-18
sources: 6
---

# Kelly Criterion

The Kelly criterion is a sizing rule for repeated bets: given a genuine edge, what fraction of capital maximizes **long-run geometric growth** — wealth compounded multiplicatively across many independent rounds?

Originated by [[entities/John-Kelly-Jr|John Kelly]] (1956, information theory). Made operational by [[entities/Edward-Thorp|Ed Thorp]] in blackjack and markets. Popularized historically in [[sources/fortunes-formula|*Fortune's Formula*]].

It is not a trade-entry rule. It answers: *how much*, once expected value is positive.

---

## The Core Idea

Kelly optimization maximizes **E[log wealth]** — log utility. Each marginal dollar matters less than the last because survival and compounding through time dominate single-shot arithmetic averages.

[[sources/the-jackpot-age]] and Bernoulli's geometric-mean insight (via [[sources/fortunes-formula]]) say the same thing in different language: positive **arithmetic** EV can still destroy most paths; the **geometric mean** / median path governs survival.

[[sources/how-to-get-rich]]: even 51/49, betting the entire bankroll each round eventually wipes you out. Kelly formalizes "bet a fraction of your edge."

---

## Formulas

### Even-money binary bet

Win probability \(p\), lose \(q=1-p\), even payoff:

```text
f* = p − q
g(f) = p·log(1+f) + q·log(1−f)
```

51/49 example: **f* = 0.02** ([[sources/the-kelly-criterion-thorp-2006]], [[sources/how-to-get-rich]]).

### General two-outcome (edge/odds shortcut)

```text
f* = (b·p − q) / b
```

where \(b\) is payoff per unit risked. [[sources/understanding-the-kelly-criterion]] warns: **edge/odds applies only to this two-valued case** — not general portfolios.

### Continuous portfolio (excess return)

```text
f* = (m − r) / s²
```

Expected excess return \(m-r\), variance \(s^2\), risk-free \(r\) ([[sources/the-kelly-criterion-thorp-2006]]).

### Multi-scenario

```text
g(f) = Σ pᵢ · ln(1 + Rᵢ·f)
```

Optimize \(f\) (or weight vector) — requires portfolio-level scenario work, not isolated tickers.

---

## Bold vs Timid vs Kelly

| Strategy | Behavior | Outcome |
|---|---|---|
| Bold | Maximize arithmetic E[wealth] → bet all | Almost sure ruin |
| Timid | Minimize ruin → bet minimum | Survive, starve growth |
| Kelly | Maximize E[log wealth] → proportional fraction | Growth + ruin avoided (technical sense) |

Proportional betting: never stake 100% of **current** bankroll, so you cannot hit literal zero in one step — but wealth can still approach arbitrarily small values ([[sources/fortunes-formula]]).

---

## Full Kelly vs Fractional Kelly

Full Kelly maximizes asymptotic growth but produces **drawdowns most investors cannot stomach** ([[sources/the-kelly-criterion-thorp-2006]], [[sources/understanding-the-kelly-criterion]]).

Use **f = c·f*** with \(0 < c < 1\):

| Fraction | Tradeoff (Thorp coin/portfolio math) |
|---|---|
| Half-Kelly (c=½) | ~75% of max growth rate, ~50% of variance; much lower prob. of halving capital |
| Quarter-Kelly | Even gentler; common in practice |

Reasons to fractionalize ([[sources/understanding-the-kelly-criterion]]):

1. **Opportunity costs** — per-bet Kelly ignores rest of portfolio → overestimates \(f^*\)
2. **Risk tolerance**
3. **Edge overestimate** — true edge below model → full Kelly can yield g ≤ 0
4. **Black swans** — fat tails not in scenario table
5. **Finite horizon** — asymptotic dominance may not arrive in time

**Overbetting is always worse than underbetting** ([[sources/the-kelly-criterion-thorp-2006]], [[sources/fortunes-formula]] LTCM lesson).

---

## Kelly vs Stop-Based Sizing

Wiki default from [[concepts/position-sizing]]:

```text
position size = allowed loss / distance to invalidation
```

Stop-based sizing does not need win-rate estimates. For discretionary trading with fuzzy edge, it is often **more robust** than plugging guessed \(p\) into Kelly.

Kelly still sets a **ceiling intuition**: thin-edge coin-flip quality estimates should not justify 8% account risk when \(f^* \approx 2\%\).

Buffett-style concentration can be Kelly-consistent **only** when sized against the full opportunity set, not a single-name formula ([[sources/understanding-the-kelly-criterion]]).

---

## When Kelly Misleads

- Unknown or unstable edge — overestimating \(p\) inflates \(f^*\) nonlinearly
- Correlated books — five trades on one macro thesis = one bet
- Path-dependent systems vs constant-fraction Kelly assumptions
- Reputational/legal ruin — [[sources/how-to-get-rich]]; Kelly math is financial only
- **LTCM-style overbetting** with Nobel-approved models ([[sources/fortunes-formula]])

[[sources/the-jackpot-age]]: *build more edge rather than risk more size.*

---

## Connections

- [[concepts/ergodicity]]
- [[concepts/position-sizing]]
- [[concepts/alternative-histories]]
- [[concepts/decision-quality-vs-outcome]]
- [[concepts/trading-edge]]
- [[concepts/risk-reward-ratio]]
- [[entities/Edward-Thorp]]
- [[entities/Claude-Shannon]]
- [[entities/John-Kelly-Jr]]
- [[entities/naval-ravikant]]

## Sources

- [[sources/the-kelly-criterion-thorp-2006]] — derivation, fractional Kelly math, blackjack, sports, continuous portfolio
- [[sources/understanding-the-kelly-criterion]] — misapplication warnings, portfolio Kelly, Pabrai example, Leib paradox
- [[sources/fortunes-formula]] — Kelly–Shannon–Thorp history, geometric mean, LTCM overbetting
- [[sources/the-jackpot-age]] — log-wealth / geometric mean survival
- [[sources/how-to-get-rich]] — ruin avoidance intuition
- [[sources/fooled-by-randomness]] — path-dependent survival, tail risk