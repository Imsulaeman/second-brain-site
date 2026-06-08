---
title: "Browsing the web - MDN"
type: source
tags: [web, browser, search, mdn, web-literacy]
created: 2026-06-08
updated: 2026-06-08
sources: 1
file: "raw/Browsing the web - MDN (ingested).md"
---

# Browsing the web - MDN

This MDN primer is a beginner-facing web-literacy page about the ordinary things people touch before they ever write code: browsers, web pages, websites, web servers, search engines, and the basic request-response loop that makes a page appear. Its main purpose is not technical depth. It is vocabulary cleanup. The source assumes that many newcomers use these words interchangeably, then shows why the distinctions matter if you want to understand what the web is actually doing.

## Core Distinctions

The page's first job is to separate four commonly confused things. A [[concepts/web-browser|web browser]] is the software that retrieves and displays content. A [[concepts/website|website]] is a collection of related pages under one domain. A [[concepts/web-server|web server]] is the machine that hosts and serves those files. A [[concepts/search-engine|search engine]] is a web service that helps you discover other pages. The source uses a library analogy to make the distinction concrete: the library is the server, each section is like a site, the books are pages, and the catalog is the search engine.

That distinction matters because beginner confusion usually starts at the interface layer. Someone opens Chrome, sees Google, and concludes that the browser and the search engine are the same thing. The source insists that they are not. One is software; the other is a service being accessed through that software.

The embedded screenshots make this distinction more memorable than the prose alone. One image isolates a full page URL in the browser bar, another isolates the shared domain/homepage view of a website, and a third shows Firefox opening directly to a Google search page. Together they visually separate page, site, and search engine instead of leaving those as abstract definitions.

## How A Page Appears

The source then gives the simplest useful account of what happens when someone enters a URL. The browser sends a request to the server using [[concepts/http|HTTP]], the server replies with the requested resource, and the browser may then discover more resources it also needs such as images, style sheets, or scripts. Only after those pieces arrive does the browser parse and render the result.

This is a stripped-down model, but it is a good first map because it replaces the vague idea that "the website loads" with a small sequence of actions. The page is especially useful here because it treats web literacy as a chain of ordinary events rather than as hidden magic.

## Searching For Information

The last third of the source turns from web mechanics to search habits. The advice is practical: start with specialized documentation when you know the domain, widen to general search when needed, search with the programming language or exact error message when solving coding problems, and treat AI-generated answers as accelerants rather than authorities.

Its caution about AI is straightforward and still important. AI can compress the search process, but it can also present outdated or subtly wrong answers with a lot of confidence. The source's real lesson is that search quality is part of judgment. You still need to know what you are asking, what kind of answer would count, and how to verify what comes back.

Worth coming back to: this is one of those beginner pages whose real value is not the facts alone but the cleanup of false equivalences. Once browser, website, search engine, and server stop collapsing into one blur, later technical learning has a firmer floor.

## Sources

- `raw/Browsing the web - MDN (ingested).md`
