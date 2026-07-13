---
title: "GCR Tweet Corpus (2021-2025)"
type: source
source_type: dataset
tags: [trading, crypto, gcr, twitter-archive]
created: 2026-07-14
updated: 2026-07-14
author: GCR (@GiganticRebirth / @GCRClassic)
---

# GCR Tweet Corpus (2021-2025)

A consolidated archive of 1,965 tweets and replies by [[entities/GCR|GCR]], scraped from his two accounts (@GiganticRebirth, active through the FTX collapse; @GCRClassic, used before and after) and merged from four raw Twitter API exports (`raw/GCR-tweets-consolidated.csv`, deduplicated by tweet ID, sorted chronologically, stripped of a redundant metadata column). The corpus spans January 28, 2021 to January 26, 2025 and is the primary source underneath the raw material for two already-ingested curated documents: [[sources/gcr-trade-review]] (a 119-page visual retrospective covering 2021–2022) and [[sources/gigantic-rebirth-top-crypto-traders]].

## What This Source Adds

Because the trade review was compiled *from* these same tweets, roughly 2021–2022 is already deeply integrated into [[entities/GCR]]'s entity page — verbatim quotes, dated trades, and full mechanism explanations. Reading the raw corpus for that period confirmed the existing wiki coverage is accurate and surfaced a genuine correction (see below) plus a layer of voice and personality not preserved in the curated documents: recurring bits ("goblintown" as his own idiom for capitulation), an unprompted pattern of $10–20k giveaways to scammed traders, running banter with other CT accounts, and a public confrontation with paid-signal-group sellers where he offered $500,000 to charity if they made their content free.

The real gap the raw corpus fills is **2023–2025**, which the existing entity page covered in two thin paragraphs. This period is now substantially represented: the November 2022 bottom call and its long-dated targets (BTC, ETH to 2030, SOL at $10), the "echo bubble" framework he used through Q1 2023, the March 2023 USDC depeg call during the Silicon Valley Bank crisis, the extension of his political prediction-market track record through the actual 2024 US election cycle, and the FTX collapse week itself in granular, real-time detail.

## Methodology and Its Limits

Given the corpus size, this ingest did not perform uniform close-reading of every one of the 1,965 rows. It combined:
- A full line-by-line read of the first ~450 tweets (Jan–Sep 2021) to establish ground truth for how much overlap exists with the curated review.
- An engagement-ranked scan of all standalone (non-reply, non-retweet) posts from 2021–2022, plus a targeted full read of the FTX collapse week (Nov 6–14, 2022).
- A full chronological read of every original post and every reply above 100 favorites from 2023–2025, which is a much smaller slice (184 of his own tweets/replies across two years, reflecting long stretches of silence after the FTX collapse).

This means low-engagement replies and banter from mid-2021 through 2022 were not individually reviewed. Given that period's near-total overlap with the trade review, this was a deliberate tradeoff rather than an oversight — see [[entities/GCR]]'s entity page and this source's own note above for what was verified directly. If a future pass wants full coverage of the low-engagement 2021–2022 tail, the consolidated CSV is the place to resume.

## A Correction to the Existing Record

The entity page previously stated GCR "acquired TRUMPLOSE tokens OTC" for his Trump 2024 prediction-market position. The raw tweets contradict this framing: he describes "one of my highest conviction trades, TRUMP2024," accumulated via large Alameda OTC deals in early-to-mid 2021, with [[entities/Caroline-Ellison]] (not Sam Bankman-Fried) as his counterparty. This reads as a bet *for* Trump's 2024 candidacy/victory, not a "Trump loses" position. The entity page has been corrected accordingly.

## Connections

- [[entities/GCR]] — primary subject; most of this corpus's content lives there now, integrated rather than quoted wholesale
- [[sources/gcr-trade-review]] — the curated 2021–2022 document this corpus underlies
- [[sources/gigantic-rebirth-top-crypto-traders]] — sibling curated document
- [[concepts/echo-bubble]] — new concept surfaced from the 2023 stretch of this corpus
- [[entities/Caroline-Ellison]] — new entity surfaced from the FTX-collapse-week tweets

## Sources

*(this is the source page)*
