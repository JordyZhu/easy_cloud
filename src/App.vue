<template>
  <div id="app" :class="appClassName">
    <router-view></router-view>
  </div>
</template>

<script>
import PageHeader from '@/components/Layout/PageHeader'

export default {
  name: 'App',
  components: {
    PageHeader
  },
  computed: {
    appClassName () {
      const isMoblile = window.versions && (
        window.versions.mobile ||
          window.versions.android ||
          window.versions.ios
      )
      return `App-${this.$route.name}${isMoblile ? ' is-mobile' : ''}`
    },
    versions () {
      const u = window.navigator.userAgent
      window.versions = {
        trident: u.indexOf('Trident') > -1,
        presto: u.indexOf('Presto') > -1,
        webKit: u.indexOf('AppleWebKit') > -1,
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1,
        mobile: !!u.match(/AppleWebKit.*Mobile.*/),
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1,
        iPhone: u.indexOf('iPhone') > -1,
        iPad: u.indexOf('iPad') > -1,
        webApp: u.indexOf('Safari') === -1,
        weixin: u.indexOf('MicroMessenger') > -1,
        qq: u.match(/\sQQ/i) === ' qq'
      }
      return window.versions
    }
  }
}
</script>

<style src="./assets/css/reset.postcss"></style>
<style src="./assets/css/variables.postcss"></style>
<style src="./App.postcss"></style>
