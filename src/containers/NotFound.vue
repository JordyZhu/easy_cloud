<template>
  <div class="NotFound">
    {{ message }}
  </div>
</template>

<script>
import '../assets/css/containers/NotFound.css'

export default {
  name: 'notFound',
  data () {
    return {
      message: '404 Not Found'
    }
  }
}
</script>
