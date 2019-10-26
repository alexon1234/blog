<template>
  <section class="container">
    <header>
      <Header />
    </header>
    <nuxt class="main" />
    <footer></footer>
  </section>
</template>

<script>
import Header from '~/components/header'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
header {
  grid-area: header;
}

.main {
  grid-area: main;
}

footer {
  grid-area: footer;
}
.container {
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    '. header header .'
    '. main main .'
    'footer footer footer footer';
}
</style>
