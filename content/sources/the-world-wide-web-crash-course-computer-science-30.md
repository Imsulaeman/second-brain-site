---
title: "The World Wide Web Crash Course Computer Science 30"
type: source
tags: [web, internet, history, computer-science, crash-course]
created: 2026-06-08
updated: 2026-06-09
sources: 1
file: "raw/The World Wide Web Crash Course Computer Science 30 (ingested).md"
---

# The World Wide Web Crash Course Computer Science 30

This Crash Course episode treats the [[concepts/world-wide-web|World Wide Web]] as a history rather than a definition. Starting from an idea in 1945 and ending with an ongoing governance dispute, it shows how hyperlinks, standards, browsers, directories, and search engines compounded into the web as it exists today.

## The Web Is Not The Internet

The episode's first move is a clarification that underpins everything that follows. The internet is the underlying infrastructure — cables, routers, protocols for routing packets. The web is one application layer running on top of it. Email, FTP, and video streaming also run on the internet but are not the web. This distinction matters because the web's specific properties — URLs, hyperlinks, browsers, search engines — belong to the web layer alone.

## Vannevar Bush and the Conceptual Ancestor

In 1945, Vannevar Bush published an essay describing the Memex — a hypothetical device that would let a researcher store and navigate associative trails through documents. Bush never built it, and the essay predates digital computing as we know it. The episode uses it to show that the idea of navigating information through links is older than the web by decades. When [[entities/tim-berners-lee|Tim Berners-Lee]] proposed the World Wide Web in 1989 at CERN, he was realizing a concept that had been imagined for a long time.

## Berners-Lee, HTML, HTTP, and URLs

Berners-Lee designed the three things that make the web work together: HTML to mark up documents, HTTP to transfer them, and URLs to locate them. His first draft of HTML had 18 commands; HTML5, the current standard, defines over a hundred. The episode traces the expansion of HTML not as feature creep but as the web gaining the capacity for richer content and more complex interaction over time. Berners-Lee wrote both the first web server and the first web browser himself.

## Mosaic and the Graphic Web

The web became something ordinary users could recognize in 1993 when researchers at the University of Illinois released Mosaic — the first browser to render images inline alongside text. Before Mosaic, browsers displayed text only. Mosaic introduced the visual page layout that most people now associate with the web: text, images, and links together on a single readable screen.

## From Directories to Search Engines

As the web grew, navigation became a problem. The first model was human-maintained directories. Yahoo launched in 1994 as "Jerry and David's Guide to the World Wide Web" — Jerry Yang and David Filo hand-catalogued sites they found useful. That approach could not scale.

The crawler-and-index model replaced it. JumpStation, created by Jonathon Fletcher in 1993, was among the first to automatically crawl pages and build a searchable index. The crucial innovation came from Larry Page and Sergey Brin at Stanford: their BackRub project (1996) introduced PageRank — ranking pages partly by how many other pages linked to them, treating inbound links as a signal of relevance rather than just counting keyword occurrences. Google launched publicly in 1998 and quickly displaced earlier search approaches.

## Net Neutrality as Governance

The episode closes with [[concepts/net-neutrality|net neutrality]] — the principle that network operators should route all traffic equally, without privileging or penalizing specific content or services. Once the reader has the technical foundation (packets, routing, physical infrastructure), the debate stops sounding abstract. The question is whether companies that are simultaneously network operators and content producers — Comcast, which also owns NBC Universal, is the episode's example — can be allowed to slow competitors' traffic or charge more for preferred routing. The episode presents both sides without settling it, but gives the technical skeleton needed to understand why the argument exists and what is actually at stake.

Worth coming back to: this source's value is the sequence. Associative links (Bush, 1945) became a design proposal (Berners-Lee, 1989) that became a browsable system (Mosaic, 1993) that became navigable through directories (Yahoo, 1994), then through automated search (PageRank, 1996; Google, 1998), and then became politically contested (net neutrality). The web is one artifact with a specific history, and the history is what makes its present structure legible.

## Sources

- `raw/The World Wide Web Crash Course Computer Science 30 (ingested).md`
