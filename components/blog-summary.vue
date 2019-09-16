<template>
  <div>
    <ImageResponsive :name="post.attributes.name" />
    <h3>
      <nuxt-link
        :to="localePath({ name: 'posts-slug', params: { slug: post.attributes.name }})"
      >{{ post.attributes.title }}</nuxt-link>
    </h3>
    <pre>{{ post.attributes.description }}</pre>
  </div>
</template>

<script>
import ImageResponsive from './image-responsive.vue'

export default {
  components: { ImageResponsive },
  props: ['post']
}
</script>