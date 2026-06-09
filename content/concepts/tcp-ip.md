---
title: "TCP/IP"
type: concept
tags: [web, networking, protocols, internet]
created: 2026-06-09
updated: 2026-06-10
sources: 1
---

# TCP/IP

TCP/IP, short for Transmission Control Protocol and Internet Protocol, is the basic transport and addressing framework that moves data across the internet. In beginner web explanations it is the layer that carries data between browser and server underneath higher-level protocols like [[concepts/http|HTTP]].

## Why The Layer Distinction Matters

The important distinction is that HTTP describes the application-level language of request and response, while TCP/IP handles the lower-level movement of that data through the network. When someone says a browser "sends an HTTP request," that request is still traveling across infrastructure shaped by TCP/IP conventions.

This is one reason web problems can fail in different places. The request language might be valid while the transport path is unstable, misaddressed, or interrupted.

## What The Concept Adds

The MDN explanation does not go deep into networking internals, but it makes one useful beginner point clear: web traffic is not one magical blob moving intact from point A to point B. It travels as smaller pieces through a transport stack, gets addressed correctly, and is reassembled into the page or resource the user sees.

That makes TCP/IP a layer-separation concept. It helps keep the web from collapsing into one undifferentiated blur. Browsers, URLs, DNS, HTTP, packets, and servers all play different roles. TCP/IP is part of the machinery that lets those parts communicate at all.

## Sources

- [[sources/how-the-web-works-mdn]]
