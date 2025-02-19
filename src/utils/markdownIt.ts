import MarkdownIt from 'markdown-it'
import MarkdownItHighlightjs from 'markdown-it-highlightjs'
import 'highlight.js/styles/github-dark-dimmed.css'

const markdownIt = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})
markdownIt.use(MarkdownItHighlightjs)

export default markdownIt
