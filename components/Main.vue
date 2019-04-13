<template>
    <div class="global">
        <div id="firstHero"  class="hero is-primary ">
            <div class="hero-body">
                <div ref="title" class="title ">
                    <h1 id="titlos" >Dermalogic</h1>
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
            <script type="text/javascript">var submitted=false;</script>
            <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" 
            onload="if(submitted) {window.location='thankyou';}"></iframe>
           <form ref="form" class="forma" method="post"
                 target="hidden_iframe" onsubmit="submitted=true;" action="https://docs.google.com/forms/d/e/1FAIpQLSeUdgkkkcq9xG2d6gBrJuTMgW0YbHS4pHaENBlH37GNBmXF4w/formResponse">
               <h1 id="stixeia" class="title">Συμπλήρωσε τα στοιχεία σου <br> για να λάβεις μέρος στον Διαγωνισμό!</h1>
               <div class="field">
                <label class="label">Όνομα</label>
                <div class="control">
                    <input class="input" type="text" name="entry.596945731" placeholder="Το Όνομα σας">
                </div>
                </div>

                <div class="field">
                <label class="label">Επίθετο</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input" name="entry.1964927439" type="text" placeholder="Το Επίθετο σας">
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
                    <input class="input " type="email" name="entry.40194550" placeholder="Email" >
                    <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                    </span>
                    
                </div>
                </div>

                <div class="field">
                <label class="label">Αριθμός τηλεφώνου</label>
                <div class="control">
                    <input type="number" class="input" name="entry.1011499247" placeholder="Το τηλέφωνο σας">
                </div>
                </div>

                <div class="field">
                <div class="control">
                    <label class="checkbox">
                    <input type="checkbox"  required>
                    Συμφωνώ στους <a href="#">Όρους και Προϋποθέσεις</a>
                    </label>
                </div>
                </div>

                <div class="field">
                    <p>Αν προτιμάτε να παρακάμψετε αυτή τη φόρμα και να επικοινωνήσετε μαζί μας, στείλτε μας το email σας στο <a>dermalogicskin@gmail.com</a> ή τηλεφωνήστε στο 70003065 ή 99697296</p>
                </div>

                <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link">Submit</button>
                </div>
                
                </div>
           </form>
        </div>
        <div id="sxetikaContainer" class="hero is-large is-primary">
            <div id="sxetika" class="hero-body">
               
                    <div class="title">
                        ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ
                    </div>
                    <div class="subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae sapiente perferendis, quis laboriosam tenetur, obcaecati nam, enim cum error aut quaerat suscipit sequi eveniet quae sed consequuntur iusto corrupti quisquam?
                    </div>
               
            </div>
        </div>
        
        <div id="oroiContainer" class="hero is-medium ">
            <div id="oroi" class="hero-body">
                <div class="title"><h2>ΟΡΟΙ ΚΑΙ ΠΡΟΫΠΟΘΕΣΕΙΣ</h2></div>
                <div class="subtitle">
                    <ul>
                        <li>Ο διαγωνισμός λήγει στις τέλος Απριλίου </li>
                        <li>Θα υπάρξει ένας τυχερός/ή νικητής/ια που θα επιλεχθεί τυχαία μετά από κλήρωση</li>
                        <li>Ο νικητής/ια θα ανακοινωθεί στη σελίδα μας στο Facebook και θα ενημερωθεί προσωπικά από το εμάς </li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="lastHero" class="hero is-small">
            <div class="hero-body">

            </div>
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

    
    #firstHero{
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

    #sxetika{
        padding:0px;
        margin-top:80px;
        text-align: center;
        height:400px;
    }

    #sxetika .subtitle{
        margin:38px auto auto auto;
        width:600px;
        font-size: 30px;
        
    }

    #sxetikaContainer{
        background-image: url("~assets/medical-website.jpg");
        background-attachment: fixed;
        background-size: 100%;
    }

    #oroi{
        
        padding:50px;
        
        text-align: center;
    
    }

    #oroiContainer{
    }

    #lastHero{
         background-image: url("~assets/medical-website.jpg");
         background-attachment: fixed;
         background-size: 100%;
         height:300px;
    }
    @media(max-width:930px){
        #titlos{
            font-size: 45px;
        }

        form{
        width:97vw;
        margin:auto auto auto auto;
        background:white; 
        padding: 15px;
        border-radius:7px;
        }
        
        .forma-container{
        background-image: url("~assets/formaBg-mobile.jpg" );
        width:auto;
        margin:-20px auto auto auto;
        background-size: 190%;
        height:110vh;
        }

        #stixeia{
            font-size:18px ;
        }

        #sxetika{
            margin-top:80px;
        }

        #sxetika .subtitle{
        margin:38px auto auto auto;
        width:300px;
        font-size: 25px;
        }
        #sxetikaContainer{
        background-image: url("~assets/medical-website-mobile.jpg");
        background-attachment: fixed;
        background-size: 100%;
    }
    }
</style>
