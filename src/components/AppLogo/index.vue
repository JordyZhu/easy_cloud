<template>
  <router-link v-if="type === 'link'" class="AppLogo" to="/">{{ appName }}</router-link>
  <span v-else class="AppLogo">{{ appName }}</span>
</template>

<script>
import { APP_NAME } from '@/constants'

export default {
  name: 'AppLogo',
  props: {
    type: {
      type: String,
      default: () => 'text'
    }
  },
  data() {
    return {
      appName: APP_NAME
    }
  }
}
</script>

<style src="./index.postcss"></style>
