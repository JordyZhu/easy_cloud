import { Vue, Component, Prop } from 'vue-property-decorator'
import Tabs from './Tabs'
import './PageHeader.postcss'

@Component({
  components: {
    Tabs
  }
})
export default class PageHeader extends Vue {
  @Prop({
    type: Array,
    default: () => []
  }) tabs

  render() {
    return (
      <div class="PageHeader">
        <div class="PageHeader-content">
          {this.$slots.default || <Tabs tabs={this.tabs} />}
        </div>
      </div>
    )
  }
}
