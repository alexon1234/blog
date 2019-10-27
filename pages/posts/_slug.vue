<template>
  <article>
    <header>
      <section>
        <nuxt-link :to="
          localePath({
            name: 'index'
          })
        ">
          <div class="back_home">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path
                d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"
              />
            </svg>
            <p>{{ $t('back_home') }}</p>
          </div>
        </nuxt-link>
        <h1>{{ title }}</h1>
        <pre>{{ description }}</pre>
      </section>
      <ImageResponsive class="thumbnail" :name="name" />
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
  },
  methods: {
    back() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
article {
  & header {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    & .back_home {
      display: flex;
      flex-direction: row;
      align-items: center;

      svg {
        cursor: pointer;
      }
    }
  }
}
</style>
