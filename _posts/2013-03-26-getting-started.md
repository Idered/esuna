---
date: 2013-03-26 16:56:14
layout: section
slug: getting-started
title: Getting started
---

{:id .visuallyhidden}
## About

{:id .delta .text--center .bar}
Esuna is [open source](http://git.io/esuna) Front-End framework and set of coding guidelines. <br class="mobile-hide">It's a solid base on which you can build your projects.

Here's a round up of info about Esuna:

* It's [BEM based](/esuna/style-guidelines#css-naming-conventions) and mobile first framework
* Basic style for most useful elements used during development - no candy look
* Contains custom set of [development tools]({{ site.url }}/framework#development-tools)
* Has [optimized comments style](/esuna/style-guidelines#css-comments) which allow to fully utilize Sublime Text goto symbol function

## Installation {#installation}

You can clone repo or just download:

* `git clone https://github.com/Idered/esuna`
* [Download zip](https://github.com/Idered/esuna/archive/master.zip)

## Configuration {#configuration}

Esuna uses custom set of [development tools]({{ site.url }}/framework#development-tools), some of them needs additional configuration. Those tools are only initialized on specified development domains, to set those domains, open `_ui/js/script.js` and find `devDomains` variable at the beginning of file. Add there your development domains.

If you're going to add retina images in your project then open `_ui/style.css` adn goto `Sprites` sections. There's a special media query which applies to devices with higher resolution - update `background-size` property with width and height of `_ui/img/sprite.png`. If you don't want to support retina devices then simply remove that media query.


