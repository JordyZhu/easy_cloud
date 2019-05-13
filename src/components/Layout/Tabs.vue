<template>
  <ul class="TabList">
    <li
      v-for="{link, name} in tabs"
      :key="name"
      class="TabItem"
    >
      <router-link
        class="TabItem-link"
        :to="link"
      >
        {{ name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style src="./Tabs.postcss"></style>

