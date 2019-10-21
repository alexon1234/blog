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
  grid-row: 1;
  grid-column: 1 / 5;
}

.main {
  grid-row: 2;
  grid-column: 2/4;
}

footer {
  grid-row: 3;
  grid-column: 1/5;
}
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 50px 1fr 50px;
}
</style>