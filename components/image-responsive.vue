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
        width="300"
        height="300"
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
</style>