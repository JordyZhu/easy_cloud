<template>
  <div class="PageHeader">
    <div class="PageHeader-content">
      <slot>
        <Tabs :tabs="tabs" />
      </slot>
    </div>
  </div>
</template>

<script>
import Tabs from './Tabs'

export default {
  name: 'PageHeader',
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  components: {
    Tabs
  },
  data () {
    return {
      isMoblile: window.versions && (
        window.versions.mobile ||
          window.versions.android ||
          window.versions.ios
      )
    }
  }
}
</script>

<style src="./PageHeader.postcss"></style>
