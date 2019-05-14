import { Vue, Component, Prop } from 'vue-property-decorator'
import marked from 'marked'
import 'github-markdown-css/github-markdown.css'
import headImage from '@/assets/img/default.jpg'
import { fetchPost } from '@/services/post'
import './Detail.postcss'

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
          <img src={headImage} />
        </div>
        <div class="PostDetail-content">
          <h2 class="PostDetail-title">
            {this.post.title}
          </h2>
          <article
            class="PostDetail-body markdown-body"
            domPropsInnerHTML={bodyHTML}
          />
        </div>
      </div>
    )
  }
}
