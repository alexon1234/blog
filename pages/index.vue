<template>
  <div class="main">
    <section class="main_posts">
      <BlogSummary class="post" v-for="post in posts" :key="post.attributes.title" :post="post" />
    </section>
  </div>
</template>
<script>
import blogsEn from '~/contents/en/postsEn'
import blogsEs from '~/contents/es/postsEs'
import BlogSummary from '~/components/blog-summary'
export default {
  components: {
    BlogSummary
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
@import '@/assets/css/colors.scss';

.main {
  & &_header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: $black;
      text-transform: uppercase;
    }
  }

  & &_posts {
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(calc(20% + 10rem), 1fr)
    ); //Hack to make it work responsive
    grid-gap: 1rem;
  }
}
</style>
