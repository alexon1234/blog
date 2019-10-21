const path = require('path')

import i18n from './locales/i18n-nuxt-config'
import postsEn from './contents/en/postsEn'
import postsEs from './contents/es/postsEs'

export default {
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  loading: { color: '#5a46ff', height: '3px' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/vue-lazysizes.client.js',
    '~/plugins/modernizr-plugin.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources', ['nuxt-i18n', i18n], 'nuxt-purgecss'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(
      config,
      {
        isDev,
        isClient,
        loaders: { vue }
      }
    ) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }

      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, 'contents'),
        loader: 'frontmatter-markdown-loader'
      })
    }
  },
  generate: {
    routes: []
      .concat(postsEn.map(p => `/posts/${p}`))
      .concat(postsEs.map(p => `es/posts/${p}`))
  },
  purgeCSS: {
    // your settings here
  }
}
