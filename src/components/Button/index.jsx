import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import cx from 'classnames'
import './index.postcss'

@Component
export default class Button extends Vue {
  @Prop({
    type: String,
    default: () => 'plain'
  }) type
  @Prop({
    type: Function,
    default: () => () => {}
  }) onClick

  @Emit('click')
  handleClick(e) {
    return e
  }

  render() {
    return (
      <button
        class={cx('Button', `Button-${this.type}`)}
        onClick={this.handleClick}
      >
        {this.$slots.default}
      </button>
    )
  }
}
