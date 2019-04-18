<template>
    <div>
        <app-header></app-header>
        <div id="background" class="hero is-primary ">
            <div class="hero-body">
                <div class="container">
                    <div class="title">
                       
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div id="section" class="container">
                <h1 class="is-size-3">Privacy Policy</h1>
                <p class="is-size-6">This Application collects some Personal Data from its Users.</p>
                <hr>
                <h1 class="is-size-5">Personal Data collected for the following purposes and using the following services:</h1>
                <div id="purpose" class="columns is-mobile">
                    <div id="analyticsContainer" class="column is-one-fifth">
                        <img id="analytics" style="margin-left: 9px; margin-top:8px;" width="60" src="@/assets/analytics.svg" alt="">
                    </div>
                    <div class="column">
                        <h1 class="is-size-3">Analytics</h1>
                        <p class="is-size-6">Personal data: Usage data</p>
                    </div>
                </div>
                <div style="margin-top: 10px;" class="contact columns is-mobile">
                    <div class="column is-one-fifth envelopeContainer">
                        <img id="envelope" src="@/assets/envelope.svg" style="margin-left: 10px; margin-top:17px;" width="60" alt="">
                    </div>
                    <div class="column">
                        <h1 class="is-size-3" >Contacting the user</h1>
                        <h1 class="is-size-5 ">Contact form</h1>
                        <h1 class="is-size-6">Personal Data: email address, first name, last name</h1>
                    </div>
                </div>
            
            </div>
        </div>
        <app-footer></app-footer>
    </div>
</template>
<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
export default {
    components: {
        appHeader : Header,
        appFooter : Footer,
    },
}
</script>
<style scoped>
    #background{
        height:350px;
        width:60%;
        margin: auto;
        background-image: url("~assets/dermalogic-cover-14.jpg");
        background-size: 100%;
    }
    #section{
        width:80%;
          
        height:auto;
    }
    
    #analyticsContainer{

    }
    #purpose{
        margin-top:20px;

    }
    .envelopeContainer{
    }

    @media(max-width: 768px){
        #envelope{
            width:40px;
        }
        #background{
            width:100%;
            height:160px;
        }
    }
</style>

