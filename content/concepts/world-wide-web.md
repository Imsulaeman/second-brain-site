---
title: "World Wide Web"
type: concept
tags: [web, internet, hypertext, history]
created: 2026-06-08
updated: 2026-06-09
sources: 3
---

# World Wide Web

The World Wide Web is a distributed hypertext system built on top of the internet, made of interlinked documents identified by URLs, retrieved through browsers using HTTP, and authored in HTML. The web is not the internet — the internet is the underlying infrastructure of cables, routers, and protocols that moves data. The web is one application layer built on top of that infrastructure.

What made the web historically distinctive is the hyperlink. A document on the web is not just a file — it is a connected node that can point outward to other nodes, turning isolated files into a navigable structure of association. This is the architectural decision that separates the web from earlier file-sharing or networked document systems.

## Origins

The idea of associative navigation through documents predates the web by decades. Vannevar Bush described a hypothetical device called the Memex in 1945 — a machine that would let a researcher navigate trails of linked documents and build personal associative indexes through a corpus of material. Bush never built it.

[[entities/tim-berners-lee|Tim Berners-Lee]] proposed the World Wide Web in 1989 at CERN and designed the three technologies that make it function together: HTML to mark up documents, HTTP to transfer them between server and browser, and URLs to locate resources. His first HTML specification had 18 commands. Modern HTML5 defines over a hundred. Berners-Lee wrote both the first web server and the first web browser himself.

## Browsers and the Visual Web

The web became familiar to ordinary users in 1993 when researchers at the University of Illinois released Mosaic — the first browser to render images inline alongside text. Before Mosaic, browsers displayed text only. Mosaic introduced the visual page layout — text, images, and links together on a readable screen — that people now associate with web browsing by default.

## Search as Navigation Infrastructure

As the number of pages grew, navigation became a problem the web did not initially solve. The first model was human-curated directories: Yahoo launched in 1994 as "Jerry and David's Guide to the World Wide Web," a hand-maintained catalogue of sites that Jerry Yang and David Filo found useful. That model could not scale.

Automatic crawlers replaced it. JumpStation (1993, Jonathon Fletcher) was among the first to crawl and index pages automatically. The crucial innovation came from Larry Page and Sergey Brin at Stanford: their BackRub project (1996) introduced PageRank, which ranked pages partly by how many other pages linked to them. Treating inbound links as a relevance signal was a significant improvement over keyword frequency alone. Google launched publicly in 1998.

## Net Neutrality

Once the web became central infrastructure, governance questions followed. [[concepts/net-neutrality|Net neutrality]] is the principle that network operators should route all traffic equally without privileging or penalizing specific content or services. The debate became sharp when companies became both infrastructure operators and content producers simultaneously — an internet provider that also owns a major broadcaster has structural incentives to treat its own content differently from a competitor's.

## Sources

- [[sources/the-world-wide-web-crash-course-computer-science-30]]
- [[sources/how-the-web-works-mdn]]
- [[sources/browsing-the-web-mdn]]
