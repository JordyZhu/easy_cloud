<template>
  <div class="AppHeader">
    <div class="AppHeader-content">
      <router-link class="AppHeader-logo" to="/">{{ name }}</router-link>
      <div class="AppHeader-right">
        <ul class="AppHeader-tabs">
          <li class="AppHeader-tab" v-for="{link, name} in tabs">
            <router-link
              class="AppHeader-link"
              v-bind:to="link"
            >
              {{ name }}
            </router-link>
          </li>
        </ul>
      </div>
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
          name: 'ABOUT',
          link: '/about'
        }
      ]
    }
  }
}
</script>

<style src="../assets/css/components/AppHeader.postcss"></style>
