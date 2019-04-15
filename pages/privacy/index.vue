<template>
    <div>
        <app-header></app-header>
        <div id="background" class="hero is-primary ">
            <div class="hero-body">
                <div class="container">
                    <div class="title">
                        mply
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
                        <img id="analytics"  src="@/assets/analytics.png" alt="">
                    </div>
                    <div class="column">
                        <h1 is-size-2>Analytics</h1>
                        <p></p>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
</template>
<script>
import Header from "@/components/Header.vue"

export default {
    components: {
        appHeader : Header,
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
    #analytics{
     width:30%;
     margin-left:10px;
    }
    #analyticsContainer{

    }
    #purpose{
        margin-top:20px;

    }
</style>

