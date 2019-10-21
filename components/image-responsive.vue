<template>
  <div class="img" :style="{ 'background-image': `url(${imageUrl})` }" />
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
.img {
  position: relative;
  background-size: cover;
  background-position: center center;
  background-color: #999;
}
</style>