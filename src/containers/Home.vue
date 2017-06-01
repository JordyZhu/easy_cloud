<template>
  <div class="Home">
    <div class="Home-back"></div>
    <div class="Home-myHeadContainer">
      <img class="Home-head" src="../assets/img/head.jpg">
      <div class="Home-info">
        <span class="Home-name">{{ name }}</span>
        <span class="Home-desc">{{ desc }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {MY_NAME} from '../constants.js'
import '../assets/css/containers/Home.css'

export default {
  name: 'home',
  data () {
    return {
      name: MY_NAME,
      desc: 'Web Front-End Engineer / Audiophile / Cinephile / Logophile'
    }
  }
}
</script>
