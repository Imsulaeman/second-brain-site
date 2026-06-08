---
title: "Web Browser"
type: concept
tags: [web, browser, internet, software]
created: 2026-06-08
updated: 2026-06-08
sources: 1
---

# Web Browser

A web browser is the software layer that requests, receives, interprets, and displays web resources for a human user. Chrome, Firefox, Safari, and Edge are browsers. They are not the same thing as the websites or search engines that appear inside them.

That distinction sounds trivial until it is not. A lot of beginner confusion starts because the browser often opens directly to a familiar search page. The interface makes the tool and the service look fused. But the browser is the general-purpose client. A [[concepts/search-engine|search engine]] is only one service you might use inside it.

At a basic level the browser's job is a request-and-render loop. It asks a [[concepts/web-server|web server]] for a resource, receives a response over [[concepts/http|HTTP]], then parses and renders what came back. If the first resource is an HTML page, the browser usually discovers that it also needs styles, scripts, images, fonts, or other assets before it can show the page properly.

The browser therefore sits at an important boundary in web understanding. It is where [[concepts/website|websites]] become visible, where search results become navigation, and where technical abstractions collapse into an ordinary everyday tool.

The learning value of this concept is similar to [[concepts/specialized-terminology]]: once the term is cleanly separated from nearby terms, later explanations become much easier to follow.

## Sources

- [[sources/browsing-the-web-mdn]]
