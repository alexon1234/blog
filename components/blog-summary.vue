<template>
  <article>
    <ImageResponsive class="thumbnail" :name="post.attributes.name" />
    <section>
      <h3>
        <nuxt-link
          :to="
            localePath({
              name: 'posts-slug',
              params: { slug: post.attributes.name }
            })
          "
          >{{ post.attributes.title }}</nuxt-link
        >
      </h3>
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
.thumbnail {
  grid-row: span 2;
}

section {
  grid-row: span 1;
}

article {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 1fr 1fr 1fr;
  background-color: #e0e0e0;
  padding: 10px;
  border-radius: 2%;
  border: 1px solid #bdbdbd;
}
</style>
