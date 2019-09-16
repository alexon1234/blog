<template>
  <div>
    <select>
      <option v-for="locale in selectedLocale" :key="locale.code">{{locale.name}}</option>
      <option
        v-for="locale in availableLocales"
        :key="locale.code"
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