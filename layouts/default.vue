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
  flex-grow: 1;
}

footer {
  grid-area: footer;
}
.container {
  min-height: 100vh;
  margin: 10px;
  display: grid;
  grid-template-areas:
    'header header header header'
    '. main main .'
    'footer footer footer footer';
}
</style>