<template>
  <div id="app" v-bind:class="className">
    <AppHeader />
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import './assets/css/reset.css'
import './assets/css/App.css'

export default {
  name: 'app',
  components: {
    AppHeader
  },
  data () {
    return {
      className: `App-${this.$route.name}`
    }
  }
}
</script>
