<template>
<div class="global">
  <app-header></app-header>
  <app-main></app-main>
  <app-footer></app-footer>
</div>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";

import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo)

export default {
  head (){
    return{
      link: [
        
        {rel:"stylesheet", href:"https://use.fontawesome.com/releases/v5.8.1/css/all.css", integrity:"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf", crossorigin:"anonymous"}
      ]

    }
  },
  components: {
    appHeader : Header,
    appMain : Main,
    appFooter : Footer,
  }
}
</script>

<style>
/*
* {
  background: #000 !important;
  color: #0f0 !important;
  outline: solid #f00 1px !important;
}
*/
  .global{
    width:100%;
    margin:0px;
  }

  html, body{
    width: 100%;
    margin:0px;
    padding:0px;
   
   
  
  }

  html{
    height: 100%;
  }

  body{
    min-height: auto;
  }
</style>
