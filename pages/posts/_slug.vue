<template>
  <div>
    <div class="post-title">
      <h1>{{title}}</h1>
    </div>
    <div class="content" v-html="content"></div>
  </div>
</template>
<script>
export default {
  async asyncData({ params, app }) {
    const post = await import(
      `~/contents/${app.i18n.locale}/posts/${params.slug}.md`
    )
    const attr = post.attributes

    return {
      title: attr.title,
      date: attr.date,
      description: attr.description,
      content: post.html
    }
  }
}
</script>

<style lang="scss" scoped>
</style>