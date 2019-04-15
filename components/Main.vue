<template>
    <div class="global">
        <div id="firstHero"  class="hero is-primary ">
            <div class="hero-body">
                <div ref="title" class="title ">
                    <h1 id="titlos" >Κέρδισε την θεραπεία INTENSIVE INSTANT LIFTING & GLOW αξίας 120 ευρώ</h1>
                </div>
                <div id="subtitle" ref="subtitle" class="subtitle">
                    <h2>
                       Επαναστατική μεσοθεραπεία Ιατρικής Αισθητικής χωρίς βελόνες ή μηχανήματα για άμεσο λιφτινγκ, λείανση, αναδόμηση και λάμψη προσώπου και λαιμού.
                    </h2>
                </div>
                <div class="">
                    <a id="koumpi" href="" class="button is-danger" v-scroll-to="{el:'form', duration:'1600'}">Μπες στον Διαγωνισμό!</a>
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
                        Αt Dermatologic Skin Reconstruction & Antiaging Center we specialize in innovating, cutting-edge, Skin Reconstruction, Rejuvenation and Anti-aging procedures as well as  Plastic Surgery for the face and body. 
                    </div>
               
            </div>
        </div>
        
        <div id="oroiContainer" class="hero is-medium ">
            <div id="oroi" class="hero-body">
                <div class="title"><h2>ΟΡΟΙ ΚΑΙ ΠΡΟΫΠΟΘΕΣΕΙΣ</h2></div>
                <div class="subtitle">
                    <ul>
                        <li ><span> <img ref="arrow" class="arrow" src="@/assets/arrow.svg" width="15" alt=""></span> Ο διαγωνισμός λήγει στις τέλος Απριλίου </li>
                        <li><span> <img ref="arrow" class="arrow" src="@/assets/arrow.svg" width="15" alt=""></span> Θα υπάρξει ένας τυχερός/ή νικητής/ια που θα επιλεχθεί τυχαία μετά από κλήρωση</li>
                        <li><span> <img ref="arrow" class="arrow" src="@/assets/arrow.svg" width="15" alt=""></span> Ο νικητής/ια θα ανακοινωθεί στη σελίδα μας στο Facebook και θα ενημερωθεί προσωπικά από εμάς </li>
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

        const {arrow} = this.$refs;
        const arrowAnimation = new TimelineLite();

        arrowAnimation.to(arrow, 1, {x: 10})
        arrowAnimation.to(arrow, 1, {x: 0})

        this.arrowAnimation = new TimelineLite({
            onComplete: () => this.arrowAnimation.restart()
         })

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

    

    .arrow{
        opacity: 0.9;
    }
    
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
        background: url('~assets/banner.jpg');
        background-size: 100%;
      
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
        #firstHero{
        height:500px;
        background: url('~assets/banner-mobile.jpg');
        background-size: 100%;
        }
        #titlos{
            font-size: 31px;
            margin-top:17px;
        }
        #subtitle{
            margin-top:0px;
        }
        #lastHero{
         background-image: url("~assets/medical-website-mobile.jpg");
         background-attachment: fixed;
         background-size: 100%;
         height:300px;
        }
        #koumpi{
            margin-top:-9px;
        }
    }
</style>
