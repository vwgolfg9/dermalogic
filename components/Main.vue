<template>
    <div>
        <div  class="hero is-primary ">
            <div class="hero-body">
                <div ref="title" class="title ">
                    <h1 >Dermalogic</h1>
                </div>
                <div ref="subtitle" class="subtitle">
                    <h2>
                       Το υπερσύγχρονο LeShape - Reshape Yourself έφτασε επιτέλους στη Κύπρο.<br> Η Dermalogic χαρίζει σε δέκα τυχερούς <strong>10</strong> θεραπείες αδυνατίσματος.
                    </h2>
                </div>
                <div class="">
                    <a href="" class="button is-danger" v-scroll-to="{el:'form', duration:'1600'}">Μπες στον Διαγωνισμό!</a>
                </div>
            </div>
        </div>
        <div class=" forma-container">
           <form ref="form" class="forma" action="POST">
               <h1 class="title">Συμπλήρωσε τα στοιχεία σου <br> για να λάβεις μέρος στον Διαγωνισμό!</h1>
               <div class="field">
                <label class="label">Όνομα</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Το Όνομα σου">
                </div>
                </div>

                <div class="field">
                <label class="label">Επίθετο</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input" type="text" placeholder="Το Επίθετο σου">
                    <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                    </span>
                </div>
                
                </div>

                <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input " type="email" placeholder="Email input" value="hello@">
                    <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                    </span>
                    
                </div>
                </div>

                <div class="field">
                <label class="label">Subject</label>
                <div class="control">
                    <input type="text" class="input">
                </div>
                </div>

                <div class="field">
                <label class="label">Message</label>
                <div class="control">
                    <textarea class="textarea" placeholder="Textarea"></textarea>
                </div>
                </div>

                <div class="field">
                <div class="control">
                    <label class="checkbox">
                    <input type="checkbox">
                    I agree to the <a href="#">terms and conditions</a>
                    </label>
                </div>
                </div>

                <div class="field">
                <div class="control">
                    <label class="radio">
                    <input type="radio" name="question">
                    Yes
                    </label>
                    <label class="radio">
                    <input type="radio" name="question">
                    No
                    </label>
                </div>
                </div>

                <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link">Submit</button>
                </div>
                <div class="control">
                    <button class="button is-text">Cancel</button>
                </div>
                </div>
           </form>
        </div>
    </div>
</template>

<script>

import { TimelineLite } from 'gsap'



export default {
    mounted(){
        const {title} = this.$refs;
        const timeline = new TimelineLite();

        timeline.to(title, 1, {y: -40,  ease: Back.easeInOut})
        

        const {subtitle} = this.$refs;
        timeline.to(subtitle, 1.5, {y: -40, ease: Back.easeInOut}, "-=1")

        const {form} = this.$refs;
        const fr = new TimelineLite()

       

        const formCoordinates = form.getBoundingClientRect();
        const vh = window.innerHeight;
        console.log(form.getBoundingClientRect())
        
        if(form.focus()){(
            fr.to(form, 1, {width: "70%", ease: Back.easeInOut} )
        )}

    },
    components: {
    },
    data(){
        return{
            
        }
    }

}
</script>

<style scoped>

    .box{
        width:300px;
        height:300px;
        background-color: brown;
    }

    .forma-container{
        background-image: url("~assets/formaBg.jpg" );
        width:100%;
        margin-top:-20px;
        background-size: 125%;
        height:130vh;
        background-repeat: no-repeat;
        

    }

    .title h1{
        margin-top:40px;
        font-size: 60px;
    }

    .hero{
        height:500px;
        background: url('~assets/adventure.jpg');
        background-attachment: fixed;
      
    }
    .subtitle h2{
        margin:70px auto auto auto;
    }

    form{
        width:58vw;
        margin:auto auto auto auto;
        background:white;
        padding: 15px;
        border-radius:7px;
    }
    .forma{
        position: relative;
        top:40px;
    }
    @media(max-width:800px){
        form{
        width:69vw;
        margin:auto auto auto auto;
        background:white;
        padding: 15px;
        border-radius:7px;
        }
        .forma-container{
        background-image: url("~assets/formaBg-mobile.jpg" );
        width:auto;
       
        margin-top:-20px;
        background-size: 125%;
        height:200vh;
        background-repeat: no-repeat;
        

    }
    }
</style>
