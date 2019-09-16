<template>
  <div class="main">
    <nuxt />
    <Footer class="footer" />
  </div>
</template>


<script>
import Footer from './footer'
export default {
  components: {
    Footer
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .footer {
    margin-top: auto;
  }
}
</style>