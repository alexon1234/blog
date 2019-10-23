<template>
  <section class="container">
    <header></header>
    <nuxt class="main" />
    <footer></footer>
  </section>
</template>

<script>
export default {}
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
  height: 100vh;
  display: grid;
  grid-template-areas:
    'header header header header'
    '. main main .'
    'footer footer footer footer';
}
</style>
