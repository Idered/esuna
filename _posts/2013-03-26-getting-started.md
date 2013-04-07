---
date: 2013-03-26 16:56:14
layout: section
slug: getting-started
title: Getting started
sectionJump: false
---

## About {#about}

Esuna is open source Front-End framework for those who don't want to struggle with heavy frameworks. It contains well formatted code for popular elements used on websites like comments, responsive navigation, tags, and many other elements which you use in most of your projects.

Main features:

* [BEM based](/esuna/style-guidelines#css-naming-conventions)
* Uses mobile-first approach
* Custom [Development Tools](/framework#development-tools)
* [Optimized comments](/esuna/style-guidelines#guide-css) allow for easier search

## Installation {#installation}

You can clone repo or just download:

1. `git clone https://github.com/Idered/esuna`
2. [Download zip](https://github.com/Idered/esuna/archive/master.zip)

## Configuration {#configuration}

Esuna uses custom DevTools set which helps with development. Those tools are only initialized on specified development domain. To set it, open `_ui/js/script.js` and find `devDomains` variable at the beginning of file. Set it to your domain, usually `localhost`.

Read more about [DevTools](/esuna/framework#development-tools).
