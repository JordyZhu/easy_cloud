<template>
  <swiper
    class="Banner"
    direction="horizontal"
    :mousewheel-control="true"
    :performance-mode="false"
    :pagination-visible="true"
    :pagination-clickable="true"
    :loop="true"
  >
    <div class="BannerItem" v-for="(item, index) in banners" :key="index">
      <div class="BannerFixedItem" v-if="item.type === 'fixed'">
        <img v-bind:src="logoImg" />
        <div class="BannerFixedItem">
          <span class="BannerFixedItem-title">Welcome To Jie's Blog</span>
          <div class="BannerFixedItem-links">
          </div>
        </div>
      </div>
      <div class="BannerColumnItem" v-else-if="item.type === 'column'">
        <img v-bind:src="item.cover" />
      </div>
      <div class="BannerArticleItem" v-else-if="item.type === 'article'">
        <img v-bind:src="item.headImage" />
      </div>
      <div class="BannerImageItem" v-else-if="item.type === 'image'">
        <img v-bind:src="item.url" />
      </div>
    </div>
  </swiper>
</template>

<script>
  import Swiper from 'vue-swiper'
  import logoImg from '../../assets/img/logo.png'

  export default {
    name: 'Banner',
    components: {
      Swiper
    },
    data () {
      return {
        logoImg,
        banners: [
          {type: 'fixed'},
          {
            type: 'column',
            title: '技术随记',
            cover: 'aaa.jpg',
            articles: [
              {
                type: 'article'
              }
            ]
          },
          {
            type: 'article',
            title: '技术随记',
            headImage: 'aaa.jpg'
          },
          {
            type: 'image',
            url: 'aaa.jpg'
          }
        ]
      }
    }
  }
</script>

<style src="../../assets/css/modules/Banner.postcss"></style>
