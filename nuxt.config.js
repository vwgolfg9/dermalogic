import pkg from './package'

export default {
  
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { property: "og:title", content : "Dermalogic Διαγωνισμός"},
      { property: "og:description", content: "Λάβε μέρος και κέρδισε!"},
      { property: "og:image", content: "https://d33wubrfki0l68.cloudfront.net/b3eaa354facc61a06dcf06a5c7034f75b3707772/722b0/_nuxt/img/3bb488f.jpg"},
      { propertu: "og:url", content: "https://www.dermalogic.ml"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:"stylesheet", href:"https://use.fontawesome.com/releases/v5.8.1/css/all.css", integrity:"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf", crossorigin:"anonymous"}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    'vue-scrollto/nuxt'
    
  ],

  
  /*
  ** Build configuration
  */
  
  build: {
    
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
   
    extend(config, ctx) {
      
    }
  }
}
