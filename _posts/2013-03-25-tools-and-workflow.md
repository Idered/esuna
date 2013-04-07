---
date: 2013-03-25 16:56:14
layout: section
slug: tools-and-workflow
title: Tools and workflow
sections: [
	{
		id: 'snippets',
		title: 'ST - Snippets'
	}
]
---

## Sublime Text

### Snippets {#snippets}

Esuna uses custom Sublime Text snippets. You can install them by following instructions [here](https://github.com/Idered/esuna-snippets).

Esuna snippets are namespaced. Each snipped beggins with `esuna-`. This way you can quicly find framework related snippets.

In `index.html` you can find comments like this:

	<!-- @snippet esuna-twitter-card -->

Those comments are placeholders for those snippets. To use them, place cursor inside comment, press `Ctrl/CMD + /` , go to the end of line and press `Ctrl/CMD + Space`. This will expand snippet into full form. After that, please remove remaining `@snippet` text.

This way allow developer to quicly decide if he will be using that snippet or no. If no, then he can quicly remove it or leave for future use.

Full list of snippets can be found in this [repo](https://github.com/Idered/esuna-snippets).
