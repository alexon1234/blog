<template>
  <div class="lang-switcher">
    <select v-model="selected" @change="changeLocale()" class="lang-switcher">
      <option :value="selected" selected>{{ $i18n.locale }}</option>
      <option v-for="locale in availableLocales" :key="locale.code">{{ locale.code }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'LangSwitcher',
  data() {
    return {
      selected: ''
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  methods: {
    changeLocale(code) {
      this.$router.push(this.switchLocalePath(this.selected))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss';

.lang-switcher {
  & select {
    border-radius: 0;
    color: $black;
    padding: 1rem 3rem 1rem 1rem;
    border: 1px solid transparent;
    appearance: none;
    background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 50'><polygon fill='rgb(108, 92, 255)' points='0,0 100,0 50,50'/></svg>")
      no-repeat;
    background-size: 12px;
    background-position: calc(100% - 1rem) center;
    background-repeat: no-repeat;
    text-transform: uppercase;
    transition: border-color 0.3s;
    cursor: pointer;
    &:hover {
      border-color: $gray2;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
