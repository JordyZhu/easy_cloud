import { Vue, Component, Prop } from 'vue-property-decorator'
import { markdown } from 'markdown'
import headImage from '@/assets/img/default.jpg'
import './Item.postcss'

@Component
export default class PostItem extends Vue {
  @Prop({ type: Object, default: {} }) post

  render() {
    const bodyHTML = markdown.renderJsonML(
      markdown.toHTMLTree(
        markdown.parse(
          this.post.body
        ).slice(0, 5)
      )
    )

    return (
      <div class="PostItem">
        <div class="PostItem-header">
          <img src={headImage} />
        </div>
        <div class="PostItem-content">
          <h2 class="PostItem-title">
            <router-link to={`/post/${this.post._id}`}>{this.post.title}</router-link>
          </h2>
          <div
            class="PostItem-body"
            domPropsInnerHTML={bodyHTML}
          >
          </div>
        </div>
      </div>
    )
  }
}
