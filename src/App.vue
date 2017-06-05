<template>
  <div id="app" v-bind:class="appClassName">
    <AppHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
  name: 'app',
  components: {
    AppHeader
  },
  computed: {
    appClassName () {
      return `App-${this.$route.name}`
    }
  }
}
</script>

<style src="./assets/css/reset.postcss"></style>
<style src="./assets/css/App.postcss"></style>
