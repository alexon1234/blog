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
      content: post.html
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ code {
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  font-size: 85%;
  margin: 0;
  padding: 0.2em 0.4em;
}
</style>