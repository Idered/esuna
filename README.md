# esuna

Personal starting point for Front-End projects.

## Structure

```
.
|-- README
|-- index.html
|-- _ui
|   |-- style.css
|   |-- fonts
|   |-- img
|   |-- js
|      |-- jquery.js
|      |-- plugins.js
|      |-- main.js
|-- _assets
|-- _media
```

### index.html

Contains basic structure.

### style.css

This is where we write all those cool css stuff. It also contains normalize.css, some helpers, objects and media queries.

Please see [my snippets repo][2] for basic strucure of elemenets included in `style.css`, I've put ther structure of comments, post, blockquotes, tags and many more elements.

### plugins.js

This file contains matchMedia() polyfill and Respond.js to add min/max-width media query polyfill. It also contains [DEVTools][1], it's a set of simple tools(css refresher, window size viewier).

### script.js

This file is where you work on JS stuff. There's already a basic structure with placholder polyfill and some other useful scripts.

**Don't forget to set custom development domain at the beggining of file**.

### __assets

In this folder you can put not converted fonts, PSD's including sprite.psd, documentations from client, etc.

### __media

This is where you hold videos, placeholder images for articles, user avatars and other elements not directly conected with UI.


## HTML guideline

### Comments

#### Informational comments

```
<!-- @see dev.twitter.com/docs/cards -->
```

These comments are used to pass additional info about used technique, element, etc. These comments are optional.

#### Ending comments

```
<ul class="nav site-nav">
	<li></li>
</ul>
<!-- /.site-nav -->
```

These comments helps to maintain readability of source and are suggested to use.


## CSS guideline

### Indetation

Tabs are used to indent code in all files. Tab size is equal to 4 spaces.

### Style

```
.header {
	paddding: 0 10px;
}

.content {
	float: left;
	width: auto;
}
```

One empty line is used to separate each declaration.

One empty space before `{` and `:`.

For helpers you can ommit this rules and write your code in one line but only if that helps to maintain readability.

### Comments

There're 3 main type of comments used in `style.css`. Max width is 79 chars so you can use 80 chars column to wrap your css.

#### Top level comments

```


/*---------------------------------------------------------------------------*\
   $NORMALIZE normalize.css v2.1.0 | git.io/normalize
\*---------------------------------------------------------------------------*/

```

This is primary style of comments used to separate main sections of css.

There're two empty lines before this comment and one after.

Please note that these comments aren't used in media queries.

#### Section comments

```

/* Pagination
\*------------------------------------*/

```

These comments are used for single objects like pagination, post, footer, etc.

One empty line before and after this comment.

#### Separator comments

```

/*------------------------------------*/

```

These comments are used to visualy separate objects into smaller parts. For example you can separate two different styles of `<ul>` lists using this comment.

## License

**MIT Licensing**

Copyright (c) 2013 Kasper Mikiewicz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 [1]: https://github.com/Idered/snippets/blob/master/JS/devtools.js
 [2]: https://github.com/Idered/snippets