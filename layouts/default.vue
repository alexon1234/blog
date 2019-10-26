<template>
  <section class="container">
    <header>
      <section>
        <h1>
          <b>{{ $t('posts') }}</b>
        </h1>
        <LangSwitcher />
      </section>
    </header>
    <nuxt class="main" />
    <footer></footer>
  </section>
</template>

<script>
import LangSwitcher from '~/components/lang-switcher'

export default {
  components: {
    LangSwitcher
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss';

header {
  grid-area: header;
  & section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: $black;
      text-transform: uppercase;
    }
  }
}

.main {
  grid-area: main;
}

footer {
  grid-area: footer;
}
.container {
  display: grid;
  grid-template-areas:
    '. header header .'
    '. main main .'
    'footer footer footer footer';
}
</style>
