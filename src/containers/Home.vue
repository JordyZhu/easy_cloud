<template>
  <div class="Home">
    <div class="Home-main">
      <div class="Home-everydayRecommend">
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'vue-swiper'
  import ImageLink from '../components/ImageLink'

  export default {
    name: 'home',
    components: {
      Swiper,
      ImageLink
    },
    data () {
      return {
        banners: [
          {
            image: '/aaa/a.jpg',
            text: 'aaaa',
            link: '/'
          }
        ]
      }
    }
  }
</script>

<style src="../assets/css/containers/Home.postcss"></style>
