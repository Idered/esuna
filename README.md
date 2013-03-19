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

 [1]: https://github.com/Idered/snippets/blob/master/JS/devtools.js
 [2]: https://github.com/Idered/snippets

## License

**MIT Licensing**

Copyright (c) 2013 Kasper Mikiewicz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.