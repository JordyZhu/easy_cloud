<template>
  <div class="Page">
    <slot name="header">
      <PageHeader :tabs="tabs" />
    </slot>
    <div class="PageContent">
      <slot />
    </div>
    <div class="PageFooter">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
import PageHeader from './PageHeader'

export default {
  name: 'Layout',
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  components: {
    PageHeader
  }
}
</script>

<style src="./index.postcss"></style>

