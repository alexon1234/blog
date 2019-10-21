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
  grid-column: 2/2;
}

footer {
  grid-row: 3;
  grid-column: 1/5;
}
.container {
  display: grid;
  grid-template-columns: calc(20% - 50px) 1fr calc(20% - 50px);
  grid-template-rows: 50px 1fr 50px;
}
</style>