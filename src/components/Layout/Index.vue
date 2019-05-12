<template>
  <div class="AppMain">
    <slot name="header">
      <AppHeader />
    </slot>
    <div class="AppContent">
      <slot />
    </div>
    <div class="AppFooter">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
import AppHeader from './AppHeader'

export default {
  name: 'Layout',
  components: {
    AppHeader
  }
}
</script>

<style src="./Index.postcss"></style>

