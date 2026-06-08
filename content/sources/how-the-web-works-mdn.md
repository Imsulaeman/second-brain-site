---
title: "How the web works - MDN"
type: source
tags: [web, mdn, networking, http, dns]
created: 2026-06-08
updated: 2026-06-08
sources: 1
file: "raw/How the web works - MDN (ingested).md"
---

# How the web works - MDN

This MDN article takes the vague experience of "opening a website" and decomposes it into a small chain of technical events: client, server, DNS lookup, TCP/IP transport, HTTP request and response, packets, status codes, and URL structure. The page is not trying to make the reader a network engineer. It is trying to replace magical thinking with a working mental model.

## The Web As A Sequence

The most useful part of the article is its event order. You enter a URL. The browser consults [[concepts/dns|DNS]] to resolve the domain name into an IP address. The client opens a connection, sends an [[concepts/http|HTTP]] request over TCP/IP, receives a response from a [[concepts/web-server|web server]], and then assembles incoming packets into the files needed to display the page.

That sequence matters because it clarifies where different failures live. Wrong URL, DNS problem, missing file, permission issue, server outage, or redirect loop are not all the same kind of problem just because the user experiences them as "the page didn't load."

## Naming The Hidden Layers

The source is especially good at giving names to the hidden infrastructure beginners interact with constantly but rarely distinguish: protocols, packets, headers, status codes, domain names, subdomains, and paths. It treats these as the basic vocabulary of web reality.

The page is also stronger than a pure beginner gloss because it includes concrete status-code thinking. `200` means success. `301` means moved. `403` means forbidden. `404` means not found. `503` means the server is temporarily unable to handle the request. These are not trivia. They are the visible labels of different failure modes.

Worth coming back to: this source makes the web legible by turning "loading a page" into a chain of named steps. Once those steps are named, later learning has places to attach.

## Sources

- `raw/How the web works - MDN (ingested).md`
