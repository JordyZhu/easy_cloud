import { Component, Prop, Vue, Emit } from 'vue-property-decorator'
import './index.postcss'

@Component
export default class Input extends Vue {
  @Prop({
    type: Boolean,
    default: () => false
  }) multiline
  @Prop({
    type: Function,
    default: () => () => {}
  }) onChange

  @Emit('change')
  handleChange(e) {
    return e
  }

  render() {
    return (
      this.multiline ? (
        <textarea
          class="Textarea"
          row={this.row || 4}
          resize={false}
          onChange={this.handleChange}
        />
      ) : (
        <input class="Input" onChange={this.handleChange} />
      )
    )
  }
}
