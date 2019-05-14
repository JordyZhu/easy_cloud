import { Vue, Component } from 'vue-property-decorator'
import Layout from '@/components/Layout'
import AppLogo from '@/components/AppLogo'
import './index.css'

@Component({
  components: {
    Layout,
    AppLogo
  }
})
export default class PageContainer extends Vue {
  tabs = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Explore',
      link: '/explore'
    },
    {
      name: 'About',
      link: '/about'
    }
  ]

  render(h) {
    return (
      <Layout tabs={this.tabs}>
        <div class="PageContent-header">
          <AppLogo />
        </div>
        <div class="PageContent-content">
          <router-view />
        </div>
      </Layout>
    )
  }
}
