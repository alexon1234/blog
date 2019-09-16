<template>
  <div>
    <h1>My blog posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.attributes.title">
        <nuxt-link to="#">{{post.attributes.title}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
import blogsEn from '~/contents/en/postsEn'
import blogsEs from '~/contents/es/postsEs'

export default {
  async asyncData({ app }) {
    const blogs = app.i18n.locale === 'en' ? blogsEn : blogsEs
    async function asyncImport(blogName) {
      const wholeMD = await import(
        `~/contents/${app.i18n.locale}/posts/${blogName}.md`
      )
      return wholeMD
    }
    return Promise.all(blogs.map(blog => asyncImport(blog))).then(res => {
      return {
        posts: res
      }
    })
  }
}
</script>