import { Component, Vue } from 'vue-property-decorator'
import { fetchPosts } from '@/services/post'
import PostItem from './Post/Item'
import './Home.postcss'

@Component({
  components: {
    PostItem
  }
})
export default class Home extends Vue {
  query = {
    offset: 0,
    limit: 10
  }
  posts = []

  created() {
    this.fetchList()
  }

  fetchList() {
    fetchPosts(this.query).then(res => {
      this.posts = res.data.posts
    })
  }

  render() {
    return (
      <div class="Home">
        {this.posts.map(post => (
          <PostItem post={post} />
        ))}
      </div>
    )
  }
}
