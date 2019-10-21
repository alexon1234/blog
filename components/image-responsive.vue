<template>
  <div>
    <figure>
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
  },
  computed: {
    imageUrl() {
      return require(`~/assets/images/${this.name}/_thumbnail.jpg`)
    }
  }
}
</script>

<style lang="scss" scoped>

figure {
  margin: 0px;

  img {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
  }
}


</style>