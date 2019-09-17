<template>
  <div class="main">
    <nuxt class="content" />
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
  & .content {
    flex: 1;
  }
}
</style>