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

Yes, first include babel standalone at the top of your markdown file and then use the `render-babel` language instead of `render`. Check out the [demo](https://raw.githubusercontent.com/ryanflorence/render-markdown-javascript/master/demo.md):

````md
<link rel="stylesheet" type="text/css" href="https://unpkg.com/prismjs@1.6.0/themes/prism-tomorrow.css"/>
<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: hsl(0, 0%, 90%);
}
pre {
  color: hsl(0, 0%, 90%);
  background: hsl(0, 0%, 10%);
  padding: 10px;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  margin-bottom: 0;
}
.render-js {
  background: white;
  border: 2px solid hsl(0, 0%, 10%);
  padding: 10px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
}
</style>

# Actually render your code blocks

This is my markdown file.

```render
DOM_NODE.innerHTML = 'Hey there!'
```

What About babel?
-----------------

If you want to use babel, make sure to add babel-standalone like this file does at the top:

```render-babel
class Demo extends React.Component {
  componentDidMount() {
    setInterval(() => this.forceUpdate(), 500)
  }
  render() {
    return <h1>This is cool times {Date.now()}</h1>
  }
}

ReactDOM.render(
  <Demo/>,
  DOM_NODE
)
```

Isn't that

- Cool
- Awesome
- Incredibly inflexible?

Yes.

<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script src="https://unpkg.com/react@15.6.1/dist/react.min.js"></script>
<script src="https://unpkg.com/react-dom@15.6.1/dist/react-dom.min.js"></script>
````

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
