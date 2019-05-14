import { Vue, Component, Prop } from 'vue-property-decorator'
import moment from 'moment'
import headImage from '@/assets/img/default.jpg'
import './Item.postcss'

@Component
export default class PostItem extends Vue {
  @Prop({ type: Object, default: {} }) post

  render() {
    return (
      <div class="PostItem">
        <div class="PostItem-header">
          <img src={headImage} />
        </div>
        <div class="PostItem-content">
          <h2 class="PostItem-title">
            <router-link to={`/post/${this.post._id}`}>{this.post.title}</router-link>
          </h2>
          <div class="PostItem-meta">
            发布于 {moment(Number(this.post.createdAt)).format('YYYY-MM-DD HH:mm')}
          </div>
          <article class="PostItem-body">
            {this.post.body}
          </article>
        </div>
      </div>
    )
  }
}
