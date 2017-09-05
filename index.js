const fs = require("fs")
const MarkdownIt = require("markdown-it")
const Prism = require("prismjs")
const HeaderLinks = require("markdown-it-anchor")

const aliases = {
  js: "jsx",
  render: "jsx",
  "render-babel": "jsx",
  html: "markup",
  sh: "bash"
}

const supportedTypes = {
  render: true,
  "render-babel": true
}

const highlight = (str, lang) => {
  if (lang) {
    highlightLang = aliases[lang] || lang
    require(`prismjs/components/prism-${highlightLang}.js`)
    if (Prism.languages[highlightLang]) {
      const highlighted = Prism.highlight(str, Prism.languages[highlightLang])
      return supportedTypes[lang]
        ? appendScript(lang, str, highlighted)
        : highlighted
    } else {
      return str
    }
  } else {
    return str
  }
}

const appendScript = (lang, js, html) => {
  const type = lang === "render-babel" ? "babel" : "javascript"
  const id = `render-${Math.random()
    .toString(32)
    .substring(2)}`

  const script =
    lang === "render-babel"
      ? `
(function() { var DOM_NODE = document.getElementById("${id}");
${js}
})()`
      : `
document.addEventListener("DOMContentLoaded", function(event) { var DOM_NODE = document.getElementById("${id}");
${js}
})`

  return `<pre class="render-js-code"><code class="jsx">${html}</code></pre>
<div id="${id}" class="render-js"></div>
<script type="text/${type}">${script}</script>
`
}

const md = new MarkdownIt({
  html: true,
  highlight: highlight
}).use(HeaderLinks, {
  permalink: true,
  permalinkBefore: true,
  permalinkSymbol: "#"
})

module.exports = source => md.render(source)
