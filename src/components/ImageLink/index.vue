<template>
  <router-link
    class="ImageLink"
    v-bind:to="link"
  >
    <img v-if="image" :src="image">
    {{ text }}
  </router-link>
</template>

<script>
export default {
  name: 'ImageLink',
  props: ['image', 'text', 'link']
}
</script>
