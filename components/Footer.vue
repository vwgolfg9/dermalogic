<template>
    <div class="global columns is-mobile">
        <div id="logoContainer" class="column is-2">
            <img id="logo" src="@/assets/logo.svg" alt="">
        </div>
        <div id="oraria" class="column ">
            <p><strong>Δευτέρα - Σάββατο :<br> 09:00 π.μ. - 20:00 μ.μ.</strong></p>
        </div>
        <div id="logiaContainer" class="column">
            <h1 id="logia">Developed by: <span><a href="https://www.hexagoncommunication.com"><img id="hexagon" src="@/assets/logo hexagon.png" width="70" alt=""></a></span></h1>
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
        
        margin: 0;
        padding:0;
    }

    #logo{
        position: relative;
        margin:0;
        width: 50%;
        top: 5px;
        left: 20px;
    
    }
    
    #oraria p{
            position: relative;
            top:30px;
            left: 90px;
            width:170px;
            
        }

    #hexagon{
        position: relative;
        top:5px;
        margin-top: 20px;
        margin-left: 10px;
        padding-bottom: 0px; 
    }

    #logia{
        position: relative;
        top:20px;
        margin:auto;
    }
   
    @media(max-width:768px){
        #logo{
        position: relative;
        margin:0;
        width: 70%;
        top: 20px;
        left: 5px;
    
        }  


        #oraria p{
            position: relative;
            top:20px;
            font-size: 13px;
            left:10px;
            width:140px;
        }
        #hexContainer{
            position: relative;
            top:80px;
        }

        #logia{
            position:relative;
            width:80%;
            font-size: 14px;
            top:15px;
            left:10px;
        }

        #hexagon{
        position: relative;
        top:0px;
        margin-top: 0px;
        margin-left: 10px;
        padding-bottom: 0px; 
        }

        #logiaContainer{
            padding:0px;
            margin:0px;
        }
    }
</style>

