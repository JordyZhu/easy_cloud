import { Vue, Component } from 'vue-property-decorator'
import marked from 'marked'
import hljs from 'highlight.js'
import 'github-markdown-css/github-markdown.css'
import 'highlight.js/styles/atom-one-dark.css'
import { fetchPost } from '@/services/post'
import './Detail.postcss'

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: code => hljs.highlightAuto(code).value,
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
})

@Component()
export default class PostDetail extends Vue {
  post = {}

  created() {
    const { id } = this.$route.params
    fetchPost({ _id: id }).then(res => {
      this.post = res.data
    })
  }

  render() {
    if (!this.post.body) {
      return
    }

    const bodyHTML = marked(this.post.body)

    return (
      <div class="PostDetail">
        <div class="PostDetail-header">
          <img src={this.post.headImage || require(`@/assets/img/cover-${this.post.type}.png`)} />
        </div>
        <div class="PostDetail-content">
          <h1 class="PostDetail-title">
            {this.post.title}
          </h1>
          <article
            class="PostDetail-body markdown-body"
            domPropsInnerHTML={bodyHTML}
          />
        </div>
      </div>
    )
  }
}
