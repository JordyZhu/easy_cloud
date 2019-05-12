<template>
  <div class="AppHeader">
    <div class="AppHeader-header">
      <slot name="header">
        <div class="AppHeader-headerContent">
          <ul class="AppHeader-tabs">
            <li class="AppHeader-tab" v-for="{link, name} in tabs" :key="name">
              <router-link
                class="AppHeader-link"
                v-bind:to="link"
              >
                {{ name }}
              </router-link>
            </li>
          </ul>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appHeader',
  data () {
    return {
      tabs: [
        {
          name: 'HOME',
          link: '/'
        },
        {
          name: 'EXPLORE',
          link: '/explore'
        },
        {
          name: 'ABOUT',
          link: '/about'
        }
      ],
      isMoblile: window.versions && (
        window.versions.mobile ||
          window.versions.android ||
          window.versions.ios
      )
    }
  }
}
</script>

<style src="./AppHeader.postcss"></style>
