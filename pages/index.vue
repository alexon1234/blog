<template>
  <div class="main">
    <div class="main_header">
      <h1>{{$t('posts') }}</h1>
      <LangSwitcher class="lang-switcher" />
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
  align-self: center;

  & &_header {
    display: flex;
    flex-direction: row;
    align-items: center;

    & .lang-switcher {
      margin-left: auto;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: row;
    max-width: 750px;
    margin: auto;
  }
}
</style>