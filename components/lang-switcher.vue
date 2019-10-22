<template>
  <div>
    <select aria-label="Language Switcher">
      <option
        v-for="locale in selectedLocale"
        :key="locale.code"
        :label="locale.name"
      >{{ locale.name }}</option>
      <option
        v-for="locale in availableLocales"
        :key="locale.code"
        :label="locale.code"
        @click="changeLocale(locale.code)"
      >{{ locale.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
    selectedLocale() {
      return this.$i18n.locales.filter(i => i.code === this.$i18n.locale)
    }
  },
  methods: {
    changeLocale(code) {
      this.$router.push(this.switchLocalePath(code))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss';

select {
  color: $primary-color;
}
</style>
