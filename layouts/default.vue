<template>
  <section class="container">
    <header>Header</header>
    <nuxt class="main" />
    <footer>
      <Footer />
    </footer>
  </section>
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
header {
  grid-area: header;
}

.main {
  grid-area: main;
  margin: 10px;
}

footer {
  grid-area: footer;
}
.container {
  display: grid;
  grid-template-rows: 0 auto 50px;
  grid-template-areas:
    'header header header header'
    '. main main .'
    'footer footer footer footer';
}
</style>