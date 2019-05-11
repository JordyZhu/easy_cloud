<template>
  <div class="AppHeader">
    <div class="AppHeader-header">
      <ul class="AppHeader-tabs">
        <li class="AppHeader-tab" v-for="{link, name} in tabs" :key="name">
          <router-link
            class="AppHeader-link"
            v-bind:to="link"
          >
            {{ name }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="AppHeader-content">
      <router-link class="AppHeader-logo" to="/">{{ name }}</router-link>
    </div>
  </div>
</template>

<script>
import {APP_NAME} from '../constants.js'

export default {
  name: 'appHeader',
  data () {
    return {
      name: APP_NAME,
      tabs: [
        {
          name: 'HOME',
          link: '/'
        },
        {
          name: 'EXPLORE',
          link: '/explore'
        },
        {
          name: 'ABOUT',
          link: '/about'
        }
      ],
      isMoblile: window.versions && (window.versions.mobile || window.versions.android || window.versions.ios)
    }
  }
}
</script>

<style src="../assets/css/components/AppHeader.postcss"></style>
