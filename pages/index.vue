<template>
  <div class="main">
    <section class="main_header">
      <h1>{{ $t('posts') }}</h1>
      <LangSwitcher />
    </section>
    <section class="main_posts">
      <BlogSummary
        v-for="post in posts"
        :key="post.attributes.title"
        :post="post"
      />
    </section>
  </div>
</template>
<script>
import blogsEn from '~/contents/en/postsEn'
import blogsEs from '~/contents/es/postsEs'
import BlogSummary from '~/components/blog-summary'
import LangSwitcher from '~/components/lang-switcher'
export default {
  components: {
    BlogSummary,
    LangSwitcher
  },
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

<style lang="scss" scoped>
.main_header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.main_posts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
}
</style>
