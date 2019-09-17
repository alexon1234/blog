<template>
  <div class="main">
    <div class="main_header">
      <h1>{{$t('posts') }}</h1>
      <LangSwitcher />
    </div>
    <div class="grid">
      <div v-for="post in posts" :key="post.attributes.title" class="grid-item">
        <BlogSummary :post="post" />
      </div>
    </div>
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
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  & &_header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }

  .grid {
    min-width: 50%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 1.5rem;
  }
}
</style>