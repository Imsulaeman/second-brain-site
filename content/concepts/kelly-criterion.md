---
title: "Kelly Criterion"
type: concept
tags: [trading, investing, risk-management, ergodicity, compounding, sizing, math]
created: 2026-06-18
updated: 2026-06-18
sources: 3
---

# Kelly Criterion

The Kelly criterion is a sizing rule for repeated bets: given a genuine edge, what fraction of capital maximizes **long-run geometric growth** — wealth compounded multiplicatively across many independent rounds?

It is not a trade-entry rule. It answers a narrower question: *how much*, once you believe you have positive expected value.

---

## The Core Idea

Kelly optimization assumes you care about **log wealth** — each dollar is slightly less valuable than the one before it, because what matters is surviving and compounding through time, not maximizing arithmetic average outcome in a single shot.

[[sources/the-jackpot-age]] makes this concrete: a game can have **positive arithmetic expected value** and still send almost every player to zero. The median path is governed by the **geometric mean**, not the ensemble average. Log-wealth preference — sizing down as bankroll risk rises — is the only preference class that survives that paradox over many rounds.

[[sources/how-to-get-rich]] states the same lesson in gambler's language: even with a 51/49 edge, betting the entire bankroll each round eventually wipes you out through variance. Kelly is the formal version of "bet a fraction of your edge, not the whole kitty."

---

## The Simple Formula

For a binary bet — win probability \(p\), lose probability \(1-p\), and you gain \(b\) units for every 1 unit risked on a win:

```text
f* = (b × p − (1 − p)) / b
```

Where \(f^*\) is the fraction of bankroll to risk. If \(f^* \leq 0\), there is no edge; bet nothing.

**Example (Naval's 51/49):** even money (\(b = 1\)), \(p = 0.51\):

```text
f* = (1 × 0.51 − 0.49) / 1 = 0.02
```

Full Kelly says risk 2% of bankroll per round. Betting 100% each time ignores variance and invites ruin before the edge compounds.

---

## Why It Matters

Kelly connects three ideas already in this wiki:

| Idea | Link |
|---|---|
| Non-ergodic survival | [[concepts/ergodicity]] — your time-path matters; ensemble averages lie |
| Ruin avoidance | [[sources/fooled-by-randomness]] — one bad draw can erase years of compounding |
| Practical sizing | [[concepts/position-sizing]] — turn risk limits into shares/contracts |

Kelly is the **theoretical optimum** under known odds and independent repeated bets. Markets rarely offer that cleanly.

---

## Full Kelly vs Fractional Kelly

Full Kelly maximizes long-run growth rate but produces brutal drawdowns. Practitioners commonly use **half-Kelly** or **quarter-Kelly** because:

- Edge estimates are wrong more often than traders admit
- Payoffs are not binary or fixed
- Bets are correlated (one "trade" is often many linked exposures)
- Psychological tolerance for drawdown is finite

[[sources/how-to-get-rich]] widens "ruin" beyond bankroll: reputational, legal, and ethical ruin are also absorbing barriers — functionally equivalent to hitting zero and harder to recover from. Kelly math does not capture that; judgment must cap size further.

---

## Kelly vs Stop-Based Sizing

This wiki's default operational rule — from [[concepts/position-sizing]] — is different but compatible:

```text
position size = allowed loss / distance to invalidation
```

That rule does not require estimating win rate. It sizes from **predefined maximum pain** and chart/thesis invalidation. For discretionary trading with fuzzy edge, it is often more robust than plugging guessed \(p\) and \(b\) into Kelly.

Use Kelly as a **ceiling intuition**: if your stop-based size implies risking 8% of account on a coin-flip-quality estimate, something is miscalibrated. Kelly says the upper bound for a thin edge is closer to 2%.

---

## When Kelly Misleads

- **Unknown or unstable edge** — overestimating \(p\) inflates \(f^*\) nonlinearly
- **Fat tails** — binary Kelly ignores skew; [[concepts/skewness-and-asymmetry]] and Taleb's steamroller strategies break the model
- **Single bets** — Kelly is for sequences; one venture-capital moonshot is not a Kelly problem
- **Correlated books** — five "different" trades on the same macro thesis are one oversized bet

[[sources/the-jackpot-age]]'s practical line fits here: *build more edge rather than risk more size.*

---

## Connections

- [[concepts/ergodicity]]
- [[concepts/position-sizing]]
- [[concepts/alternative-histories]]
- [[concepts/decision-quality-vs-outcome]]
- [[concepts/trading-edge]]
- [[concepts/risk-reward-ratio]]
- [[entities/naval-ravikant]]

## Sources

- [[sources/the-jackpot-age]] — log-wealth preference, geometric vs arithmetic mean, Kelly-like survival sizing
- [[sources/how-to-get-rich]] — ruin avoidance, 51/49 intuition, fractional betting
- [[sources/fooled-by-randomness]] — path-dependent survival, compounding wiped by tail events

### Coverage gap

This wiki does **not** yet have an ingested primary source on Kelly's original formulation (J. L. Kelly, 1956) or standard trading treatments (e.g. Ed Thorp, *Fortune's Formula*). The concept above is synthesized from ruin/ergodicity material already in the wiki. A dedicated source ingest would strengthen the formula derivation, continuous-payoff extensions, and portfolio-level Kelly.