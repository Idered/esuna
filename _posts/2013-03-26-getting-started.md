---
date: 2013-03-26 16:56:14
layout: section
slug: getting-started
title: Getting started
---

{:id .visuallyhidden}
## About

{:id .delta .text--center .bar}
Esuna is [open source](http://git.io/esuna) Front-End framework and set of coding guidelines. <br>It's a solid base on which you can build your projects.

Here's a round up:

* It's [BEM based](/esuna/style-guidelines#css-naming-conventions) and mobile first framework
* Basic style for most useful elements used during development - no candy look
* Contains custom set of [development tools]({{ site.url }}/framework#development-tools)
* Has [optimized comments style](/esuna/style-guidelines#css-comments) which allow to fully utilize Sublime Text goto symbol function

## Installation {#installation}

You can clone repo or just download:

1. `git clone https://github.com/Idered/esuna`
2. [Download zip](https://github.com/Idered/esuna/archive/master.zip)

## Configuration {#configuration}

Esuna uses custom DevTools set which helps with development. Those tools are only initialized on specified development domain. To set it, open `_ui/js/script.js` and find `devDomains` variable at the beginning of file. Set it to your domain, usually `localhost`.

Read more about [DevTools](/esuna/framework#development-tools).
