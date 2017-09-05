Render Markdown JavaScript
==========================

Renders markdown files to HTML with highlighted code blocks BUT ALSO RENDERS THE JAVASCRIPT ONES.

![screenshot](./screenshot.png)

Why?
---

I've got a bunch of little JavaScript UI libs that don't need much more than a README.md for documentation, but a demo is worth a thousand README.md's, so I'd like the code in the README.md to actually render in a browser. Also great so people can copy/paste from the docs and *know* that it runs.

How?
----

Write normal markdown but for code fence blocks you want to have render in the browser also, use the "render" or "render-babel" language. Github markdown hates code fenced blocks inside of code fenced blocks, so I don't have an example here, look at the [demo.md](https://raw.githubusercontent.com/ryanflorence/render-markdown-javascript/master/demo.md)

How do I get JavaScript and CSS onto the page?
----------------------------------------------

With `<script>`, `<link>`, and `<style>` of course.

```markdown
<script src="https://unpkg.com/react@15.6.1/dist/react.js"></script>
<script src="https://unpkg.com/react-dom@15.6.1/dist/react-dom.js"></script>
<link rel="stylesheet" type="text/css" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css"/>
<style>body { color: red }</style>

# Then markdown as usual...
```

You can place your scripts at the bottom of the markdown file to prevent blocking your content from rendering, all scripts are run after `DOMContentLoaded`.

Also check out the [demo.md](https://raw.githubusercontent.com/ryanflorence/render-markdown-javascript/master/demo.md) file from the screenshot.

Does it babel?
--------------

Yes, first include babel standalone at the top of your markdown file and then use the `render-babel` language instead of `render`. Again, github hates code fence blocks inside code fence blocks here so I can't really show you in this README. Check out the [demo](https://raw.githubusercontent.com/ryanflorence/render-markdown-javascript/master/demo.md)

How Do I Attach Stuff to the DOM?
---------------------------------

There will be a variable called `DOM_NODE` available to use, its the node for just that script.


CLI Usage
---------

```sh
npm install render-markdown-js
render-markdown-js ./some-file.md > output.html
```

Node API Usage
--------------

```js
const rmj = require('render-markdown-js')
const html = rmj('#string of markdown')
```

Options
-------

There are none. Copy, paste, tweak.

Enjoy!
------

Please enjoy!
