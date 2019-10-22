<template>
  <div>
    <picture>
      <source
        :data-srcset="
          require(`~/assets/images/${name}/_thumbnail.jpg?webp&resize&sizes[]=300&sizes[]=600&sizes[]=1000`)
        "
        type="image/webp"
      />
      <source
        :data-srcset="
          require(`~/assets/images/${name}/_thumbnail.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000`)
        "
        type="image/jpg"
      />
      <img
        :data-src="
          require(`~/assets/images/${name}/_thumbnail.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000`)
        "
        class="lazyload"
        alt="Alternate text for the image"
      />
    </picture>
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
picture {
  margin: 0px;

  img {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
  }
}
</style>
