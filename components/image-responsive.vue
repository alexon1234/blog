<template>
  <div>
    <figure class="picture">
      <source
        :data-srcset="require(`~/assets/images/${name}/_thumbnail.jpg?webp`)"
        type="image/webp"
      />
      <source :data-srcset="require(`~/assets/images/${name}/_thumbnail.jpg`)" type="image/jpg" />
      <img
        :data-src="require(`~/assets/images/${name}/_thumbnail.jpg`)"
        class="lazyload"
        alt="Alternate text for the image"
      />
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: auto;
  max-width: 500px;
}

figure {
  margin: 0;
}
</style>