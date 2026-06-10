---
title: "Packets"
type: concept
tags: [web, networking, internet, transport]
created: 2026-06-09
updated: 2026-06-09
sources: 2
---

# Packets

Packets are the small chunks into which data is split when it travels across the internet. They are the unit of transport in [[concepts/packet-switching|packet switching]] — the architectural principle that lets data travel across shared, decentralized infrastructure without a dedicated connection between sender and receiver.

Each packet contains both payload and control information. The payload is the actual piece of data being carried. The header contains information such as addressing, ordering, and protocol details, which lets the receiving system figure out where the packet came from, where it belongs, and how to reassemble it with the rest.

This design solves several problems at once. If one packet is dropped or corrupted, the client can recover the missing piece instead of fetching the whole file again. Different packets can also take different routes across the network, which helps traffic move efficiently when many users are requesting the same resources at the same time. The packets may arrive out of order, but the receiving client can still reconstruct the original resource because the packet metadata preserves sequence information.

Packets matter conceptually because they turn "data traveling across the internet" into something concrete. A webpage is not beamed over whole. It arrives as coordinated fragments.

## Sources

- [[sources/how-the-web-works-mdn]]
- [[sources/the-world-wide-web-crash-course-computer-science-30]]
