<template>
  <article>
    <ImageResponsive class="thumbnail" :name="post.attributes.name" />
    <section>
      <nuxt-link
        tag="a"
        :to="
          localePath({
            name: 'posts-slug',
            params: { slug: post.attributes.name }
          })
        "
      >
        {{ post.attributes.title }}
      </nuxt-link>

      <pre>{{ post.attributes.description }}</pre>
    </section>
  </article>
</template>

<script>
import ImageResponsive from './image-responsive.vue'

export default {
  components: { ImageResponsive },
  props: ['post']
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss';

article {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 1fr 1fr 1fr;
  background-color: $lightest-color;
  padding: 10px;
  border-radius: 1rem;
  border: 1px solid $dark-color;

  .thumbnail {
    grid-row: span 2;
  }

  section {
    grid-row: span 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
}
</style>
