<template>
  <article>
    <header>
      <section>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          @click="back()"
        >
          <path
            d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"
          />
        </svg>
        <h1>{{ title }}</h1>
        <pre>{{ description }}</pre>
      </section>
    </header>
    <ImageResponsive class="thumbnail" :name="name" />
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
  },
  methods: {
    back() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  grid-area: header;
}

.thumbnail {
  grid-area: image;
}

.content {
  grid-area: main;
}

article {
  display: grid;
  grid-template-rows: 300px auto;
  grid-template-areas:
    'header image'
    'main main';
}
svg {
  cursor: pointer;
}
</style>