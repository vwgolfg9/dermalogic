<template>
    <div class="global">
        <app-header></app-header>
        <div class="hero is-medium is-bold is-primary">
            <div class="hero-body">
                <div class="container">
                    <h1 ref="title" class="title is-1">ΕΥΧΑΡΙΣΤΟΥΜΕ</h1>
                    <h1 ref="subtitle" class="subtitle is-1">Καλή Επιτυχία!</h1>
                    <a ref="" href="/" class="button is-danger">Επιστροφή στην Αρχική</a>   

                </div>
            </div>
        </div>
        
        
    </div>
</template>
<script>
import { TimelineLite } from 'gsap'
import Header from "@/components/Header.vue"
export default {
    components: {
        appHeader : Header,
    },
    mounted() {
        const {title} = this.$refs;
        const timeline = new TimelineLite();
        
        timeline.to(title, 1, {y: -80, ease: Back.easeInOut})

        const {subtitle} = this.$refs;

        timeline.to(subtitle, 1, {y: -60, ease: Back.easeInOut, }, "-=0.5" )

    }
}
</script>
<style scoped>
    .hero-body{
        background: #502eb0;
    }
</style>
