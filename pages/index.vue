<template>
<div class="global">
  <app-header></app-header>
  <app-main></app-main>
</div>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";

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
  }
}
</script>

<style>
  .global{
      margin: 0px;
      padding:0px;
  }

  html, body{
    width: 100%;
    height: 100%;
    margin:0px;
    padding:0px;
    overflow-x: hidden;
   
  
  }
</style>
