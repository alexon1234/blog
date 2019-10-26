<template>
  <section>
    <h1>
      <b>{{ $t('posts') }}</b>
    </h1>
    <LangSwitcher />
  </section>
</template>

<script>
import LangSwitcher from './lang-switcher'

export default {
  components: {
    LangSwitcher
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss';

section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: $black;
    text-transform: uppercase;
  }
}
</style>