<template>
    <div class="global columns is-mobile">
        <div id="logoContainer" class="column is-2">
            <img id="logo" src="@/assets/logo.svg" alt="">
        </div>
        <div id="oraria" class="column ">
            <p><strong>Δευτέρα - Σάββατο :<br> 08:00 - 17:00</strong></p>
        </div>
        <div id="hexContainer" class="column is desktop">
            <h1 id="logia">Designed by: <span><img id="hexagon" src="@/assets/logo hexagon.png" width="70" alt=""></span></h1>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

    .columns{
        margin: 0;
        padding:0;
        
    }
    .column{
        height:100px;
        margin: 0;
        padding:0;
    }

    #logo{
        position: relative;
        margin:0;
        width: 50%;
        top: 20px;
        left: 20px;
    
    }
    #oraria{
        position:relative;
        top:20px;
        left: 80px;
    }

    #hexagon{
        position: relative;
        top:5px;
        margin-top: 20px;
        margin-left: 10px;
        padding-bottom: 0px; 
    }

    #logia{
        margin:auto;
    }
   
    @media(max-width:768px){
        #logo{
            width:100%;
        }
        #oraria{
            left: 70px;
        }
        #hexContainer{
            position: relative;
            top:80px;
        }
        #hexagon{
        position: relative;
        top:0px;
        margin-top: 0px;
        margin-left: 10px;
        padding-bottom: 0px; 
        }
    }
</style>

