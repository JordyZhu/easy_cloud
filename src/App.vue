<template>
  <div id="app">
    <AppHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import './assets/css/reset.css'
import './assets/css/app.css'

export default {
  name: 'app',
  components: {
    AppHeader
  },
  data () {
    return {}
  }
}
</script>
