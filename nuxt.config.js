export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5c8f94f16cc4ba51' },
      { hid: 'stripe', src: 'https://kit.fontawesome.com/bb825573ac.js', defer: true }
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/main.scss',
    'vue-slick-carousel/dist/vue-slick-carousel.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
  { src: './plugins/vue-slick-carousel.js' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt'
  ],



  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: true,
    extend(config, ctx) {}
  },
  axios: {
    baseURL: 'http://127.0.0.1:8000/'
  }

}
