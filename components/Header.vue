<template>
  <div class="global">
    <div id="headerContainer" class="columns is-mobile">
      <div class="column">
        <a href="/" ><img class="logo" src="@/assets/dermalogic-logo-2.png" width="80" alt=""></a>
      </div>
      <div id="socialContainer" class="columns column is-4-mobile is-3-desktop is-mobile container-social ">
        <a href="https://www.facebook.com/dermalogicskin/?ref=search&__tn__=%2Cd%2CP-R&eid=ARA5NRFIIf93j1q1R8JdHhK2uCGBB9oM9E2Cq4AvbOH3czJtZrVPeYeD94U5FIi55VvclwsB0AVcH2lF" 
          class="column  is-one-fifth-tablet social"><img class="socialImages" src="@/assets/facebook-logo.png" alt=""></a>
        <a href="https://www.instagram.com/dermalogic_skin/" 
        class="column is-one-fifth-tablet social"><img class="socialImages" src="@/assets/instagram.png" alt=""></a>
        
      </div>
    </div>
    <!--
    <div class="div">
      <a href="#" class="button is-primary" v-scroll-to="{el: '#hey', duration: 1600}">go bottom</a>
    </div>
    <div class="hero">
      <h1 id="hey">HEEY</h1>
    </div>
    -->
  </div>
</template>
<script>

export default {
  head (){
    return{
      link: [
        
        {rel:"stylesheet", href:"https://use.fontawesome.com/releases/v5.8.1/css/all.css", integrity:"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf", crossorigin:"anonymous"}
      ]

    }
  },

}
</script>

<style>
  .logo{
    margin: 9px auto auto 9px;
  }
  
  #socialContainer{
    margin:0;
  }

  .social{
    margin: auto 0 ;
   
  }
  .social:hover{
    background:rgb(212, 212, 212);
  }
  .socialImages{
   
  }

  #socialContainer{
    margin-right: 18px;
  }
  
  @media(max-width:800px){
    .social{
      width:30px;
    }
  }
</style>
