<template>
  <article>
    <header>
      <section>
        <h1>{{title}}</h1>
        <pre>{{description}}</pre>
      </section>
      <ImageResponsive :name="name" />
    </header>
    <div class="content" v-html="content"></div>
  </article>
</template>
<script>
import ImageResponsive from '~/components/image-responsive'

export default {
  components: {
    ImageResponsive
  },
  async asyncData({ params, app }) {
    const post = await import(
      `~/contents/${app.i18n.locale}/posts/${params.slug}.md`
    )
    const attr = post.attributes

    return {
      title: attr.title,
      date: attr.date,
      description: attr.description,
      content: post.html,
      name: attr.name
    }
  }
}
</script>

<style lang="scss" scoped>
article {
  display: flex;
  flex-direction: column;
  align-items: center;
  & .content {
    display: flex;
    justify-content: center;
  }
  & header {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}
</style>