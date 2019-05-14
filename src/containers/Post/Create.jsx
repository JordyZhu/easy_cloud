import { Vue, Component } from 'vue-property-decorator'
import Layout from '@/components/Layout'
import PageHeader from '@/components/Layout/PageHeader'
import AppLogo from '@/components/AppLogo'
import Button from '@/components/Button'
import Input from '@/components/Form/Input'
import { createPost } from '@/services/post'
import './Create.postcss'

@Component({
  components: {
    Layout,
    PageHeader,
    AppLogo,
    Button,
    Input
  }
})
export default class PostCreate extends Vue {
  type = 'markdown'
  title = ''
  body = ''

  handleTitleChange(e) {
    this.title = e.target.value
  }

  handleBodyChange(e) {
    this.body = e.target.value
  }

  handlePostCreate() {
    if (!this.type || !this.title || !this.body) {
      return
    }

    createPost({
      type: this.type,
      title: this.title,
      body: this.body,
      createdAt: new Date().getTime()
    }).then(() => {
      this.$router.push('/')
    })
  }

  render() {
    return (
      <Layout>
        <PageHeader slot="header">
          <AppLogo type="link" />
          <Button onClick={this.handlePostCreate}>
            发布
          </Button>
        </PageHeader>
        <Input
          class="PostCreate-title"
          placeholder="请输入标题（最多 50 个字）"
          row={1}
          onChange={this.handleTitleChange}
          multiline
        />
        <Input
          class="PostCreate-body"
          placeholder="请输入正文"
          onChange={this.handleBodyChange}
          multiline
        />
      </Layout>
    )
  }
}
