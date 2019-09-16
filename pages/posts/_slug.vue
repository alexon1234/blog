<template>
  <div>
    <div class="post-title">
      <h1></h1>
    </div>
    <div class="content">{{title}}</div>
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
      title: attr.title
    }
  }
}
</script>