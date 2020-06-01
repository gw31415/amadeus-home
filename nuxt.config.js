export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Amadeus_vn',//process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: '天輝主のホームページです.'//process.env.npm_package_description || ''
      }
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {color: '#fff'},
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/vueinview.js',
    '@/plugins/vuetify.js'
  ],
  /*
   ** Nuxt.js modules
   */
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/sitemap',
    '@nuxtjs/pwa',
    'nuxt-webfontloader',
    '@aceforth/nuxt-optimized-images'
  ],
  purgeCSS: {
    paths: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      './node_modules/vuetify/dist/vuetify.js'
    ]
  },
  optimizedImages: {
    optimizeImages: true
  },
  sitemap: {
    hostname: 'https://amas.dev',
  },
  webfontloader: {
    google: {
      families: ['Griffy', 'Life Savers', 'Julius Sans One']
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
