<template>
  <article>
    <ImageResponsive :name="post.attributes.name" />
    <section>
      <h3>
        <nuxt-link
          :to="localePath({ name: 'posts-slug', params: { slug: post.attributes.name }})"
        >{{ post.attributes.title }}</nuxt-link>
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