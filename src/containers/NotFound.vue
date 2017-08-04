<template>
  <div class="NotFound">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'notFound',
  data () {
    return {
      message: '404 Not Found'
    }
  }
}
</script>

<style src="../assets/css/containers/NotFound.css"></style>
