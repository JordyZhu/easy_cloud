<template>
  <div class="About">
    <div class="About-back"></div>
    <div class="About-myHeadContainer">
      <img class="About-head" src="../assets/img/head.jpg">
      <div class="About-info">
        <span class="About-name">{{ name }}</span>
        <span class="About-desc">{{ desc }}</span>
        <span class="About-phone">{{ phone }}</span>
        <span class="About-email">{{ email }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {MY_NAME, MY_DESC, MY_PHONE, MY_EMAIL} from '../constants.js'

export default {
  name: 'about',
  data () {
    return {
      name: MY_NAME,
      desc: MY_DESC,
      phone: MY_PHONE,
      email: MY_EMAIL
    }
  }
}
</script>

<style src="../assets/css/containers/About.postcss"></style>
