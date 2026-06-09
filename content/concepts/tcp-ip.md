---
title: "TCP/IP"
type: concept
tags: [web, networking, protocols, internet]
created: 2026-06-09
updated: 2026-06-09
sources: 1
---

# TCP/IP

TCP/IP, short for Transmission Control Protocol and Internet Protocol, is the basic transport and addressing framework that moves data across the internet. In beginner web explanations it is the layer that carries data between browser and server underneath higher-level protocols like [[concepts/http|HTTP]].

The important distinction is that HTTP describes the application-level language of request and response, while TCP/IP handles the lower-level movement of that data through the network. When someone says a browser "sends an HTTP request," that request is still traveling across infrastructure shaped by TCP/IP conventions.

This concept matters mainly as a layer-separation tool. It prevents the web from collapsing into one undifferentiated blur. Browsers, URLs, DNS, HTTP, packets, and servers all play different roles. TCP/IP is part of the machinery that lets those parts communicate at all.

## Sources

- [[sources/how-the-web-works-mdn]]
