<template>
  <div class="AppHeader">
    <div class="AppHeader-content">
      <a class="AppHeader-logo" href="/">{{ name }}</a>
      <div class="AppHeader-right">
        <ul class="AppHeader-tabs">
          <li v-for="{link, name} in tabs">
            <a class="AppHeader-link" v-bind:href="link">{{ name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {APP_NAME} from '../constants.js'
import '../assets/css/components/AppHeader.css'

export default {
  name: 'app-header',
  data () {
    return {
      name: APP_NAME,
      tabs: [
        {
          name: 'HOME',
          link: '/'
        }
      ]
    }
  }
}
</script>
