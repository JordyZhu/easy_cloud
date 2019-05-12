<template>
  <Layout>
    <div class="AppContent-header">
      <router-link class="AppContent-logo" to="/">{{ appName }}</router-link>
    </div>
    <div class="AppContent-content">
      <router-view />
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'
import { APP_NAME } from '@/constants'

export default {
  name: 'Index',
  components: {
    Layout
  },
  data() {
    return {
      appName: APP_NAME
    }
  }
}
</script>

<style src="./Index.postcss"></style>
