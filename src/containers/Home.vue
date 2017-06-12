<template>
  <div class="Home">
    {{ content }}
  </div>
</template>

<script>
  import {Http} from 'vue-resource'

  export default {
    name: 'home',
    data () {
      return {}
    },
    computed: {
      content () {
        Http.get('http://www.baidu.com').then(response => {
          return response.body
        })
      }
    }
  }
</script>

<style src="../assets/css/containers/Home.postcss"></style>
