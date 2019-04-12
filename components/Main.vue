<template>
    <div>
       <Box class="box" :pose="isVisible ?   'hidden' : 'visible'" >
           <h1>Hello</h1>
       </Box>
        <div  class="hero is-primary ">
            <div class="hero-body">
                <div class="title ">
                    <h1 >Dermalogic</h1>
                </div>
                <div class="subtitle">
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
           <form class="forma" action="POST">
               <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Text input">
                </div>
                </div>

                <div class="field">
                <label class="label">Username</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input is-success" type="text" placeholder="Text input">
                    <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                    </span>
                </div>
                <p class="help is-success">This username is available</p>
                </div>

                <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
                    <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle"></i>
                    </span>
                </div>
                <p class="help is-danger">This email is invalid</p>
                </div>

                <div class="field">
                <label class="label">Subject</label>
                <div class="control">
                    <div class="select">
                    <select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                    </select>
                    </div>
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
import posed from 'vue-pose';



export default {
    components: {
        Box: posed.div({
            visible: { opacity: 1 },
            hidden: { opacity: 0 }
        })
    },
    data(){
        return{
            
        }
    }

}
</script>

<style scoped>

    .forma-container{
        background-image: url("~assets/formaBg.jpg" );
        width:100%;
        margin-top:-20px;
        background-size: 100%;
        height:150vh;
        background-repeat: no-repeat;
        

    }

    .title h1{
        font-size: 70px;
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
        height:100%;
        margin-top:-20px;
        background-size: 100%;
        height:150vh;
        background-repeat: no-repeat;
        

    }
    }
</style>
