---
title: "Understanding the Kelly Criterion"
type: source
tags: [kelly-criterion, trading, investing, portfolio, risk-management]
created: 2026-06-18
updated: 2026-06-18
sources: 1
---

# Understanding the Kelly Criterion

**Author:** [[entities/Edward-Thorp|Edward O. Thorp]]
**Type:** Essay — *Wilmott Magazine* columns (May & September 2008), revised reprint
**Raw:** `raw/2008_Understanding_Kelly_New (ingested).pdf`

---

Thorp's cautionary supplement to popular Kelly coverage (including [[sources/fortunes-formula|*Fortune's Formula*]]). The criterion is simple to state; the **details are mathematically subtle** and commonly misapplied.

## The Rule (Stated Simply)

Bet or invest to maximize expected **logarithmic growth** of capital after each decision. Equivalent to maximizing the expected growth rate of wealth.

## The Misleading Shortcut

Many sources (Morningstar, Motley Fool, etc.) repeat:

```text
optimal Kelly bet = edge / odds
```

This applies **only** to the special case of a two-valued payoff. General portfolios require solving for asset weights that maximize \(\sum p_i \ln(1 + R_i f)\) — a nonlinear program over joint scenarios.

## Stewart Enterprises Example (Pabrai)

Mohnish Pabrai's 2000 analysis of Stewart Enterprises (24-month scenarios):

| Scenario | Prob | Return |
|---|---|---|
| Best case | 0.80 | >100% |
| Middle | 0.19 | >0% |
| Worst | 0.01 | −100% |

Conservative lower-bound estimate gives \(f^* \approx 0.975\) — nearly full Kelly on a single name. Pabrai bet **10%** without knowing Kelly. Would full Kelly have been right? **Not necessarily.**

## Six Reasons Not to Bet Full Kelly (Even When \(f^*\) Is High)

### 1. Opportunity costs / portfolio Kelly

Kelly fraction for one bet depends on **all other holdings and candidates**. With \(n\) statistically identical independent opportunities, per-position Kelly is \(< 1/n\). Computing \(f^*\) for Stewart alone **overestimates** size if the rest of the portfolio matters. Most common oversight Thorp sees — **dangerous because it inflates \(f^*\)**.

Buffett's concentrated bets (25–40% of net worth) imply he sizes like a Kelly investor relative to opportunity set — but never from a single-name formula in isolation.

### 2. Risk tolerance / fractional Kelly

Full Kelly drawdowns exceed most investors' comfort. Use \(f = c \cdot f^*\) with \(0 < c < 1\). See [[sources/the-kelly-criterion-thorp-2006]] for half-Kelly arithmetic.

### 3. Scenario optimism

If true outcomes are worse than the "conservative" model, you inadvertently bet **more than \(f^*\)** — more risk, less return. Fractional Kelly hedges estimation error.

### 4. Black swans

[[entities/nassim-nicholas-taleb|Nassim Taleb]]'s point: rare high-impact events are under-modeled. Include extreme-loss scenarios in the optimization; \(f^*\) drops.

### 5. The long run is asymptotic

Kelly dominance properties appear as time → ∞. You may not get enough independent bets for asymptotics to rescue you. **Leib's paradox:** non-Kelly sequences can beat Kelly with probability arbitrarily close to 1 for finite horizons — even differing at every trial.

"Essentially different" has technical meaning for **constant-fraction myopic** strategies; path-dependent gambling systems are trickier (see Ethier 2010).

### 6. Large wealth goals take time

Even Buffett-scale multiples require decades. Kelly minimizes expected time to large goals **asymptotically** — not next quarter.

## Who Should Use Kelly?

Appropriate when:

- many repeated opportunities
- edge estimable with scenario discipline
- investor tolerates fractional sizing
- portfolio-level optimization is feasible

Less appropriate when:

- one-shot bets dominate
- correlation hidden across "different" trades
- edge is story-driven not distribution-driven

## Connections

- [[concepts/kelly-criterion]]
- [[concepts/position-sizing]]
- [[concepts/alternative-histories]]
- [[concepts/decision-quality-vs-outcome]]
- [[sources/the-kelly-criterion-thorp-2006]]
- [[sources/fortunes-formula]]
- [[sources/fooled-by-randomness]]

## Sources

- `raw/2008_Understanding_Kelly_New (ingested).pdf`