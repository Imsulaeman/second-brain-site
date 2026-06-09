---
title: "Web Server"
type: concept
tags: [web, servers, hosting, internet]
created: 2026-06-08
updated: 2026-06-09
sources: 3
---

# Web Server

A web server is the computer or server-side system that hosts web resources and sends them to clients when requested. In the beginner picture, it is the place where a site's pages and assets live before a [[concepts/web-browser|browser]] asks for them.

The important conceptual cleanup is that a web server is not the same thing as a [[concepts/website|website]]. One server can host multiple websites, and one website may depend on more than one server-side system in practice. Confusing the two leads people to talk as if the content and the infrastructure were identical.

This concept becomes most concrete through the request-response loop. A browser sends a request, often over [[concepts/http|HTTP]], and the server returns the requested page, image, stylesheet, script, or data. If the server does not respond, the website may become unavailable even though the site's content still exists. The server does not only hand back finished pages either. It can return HTML, media, files, or structured data for a [[concepts/web-service|web service]].

The Crash Course version makes the relationship even more mechanical. Once a browser has the correct address, it opens a connection to a machine running special server software, then issues a command such as `GET /courses`. The server answers with the requested resource and status information like `200` or `404`. That framing is useful because it turns "the server" from a vague cloud word into a role in a concrete exchange.

As a concept, the web server is a beginner's bridge from interface thinking to system thinking. It is where the visible web starts to reveal the machinery underneath.

## Sources

- [[sources/browsing-the-web-mdn]]
- [[sources/how-the-web-works-mdn]]
- [[sources/the-world-wide-web-crash-course-computer-science-30]]
