<script>
import { useAuthStore } from '../stores/useAuthStore';
export default {
    data() {
        return {
            username: '',
            password: '',
            message: ''
        }
    },
    computed: {
        authStore() {
            return useAuthStore()
        }
    },
    methods: {
        login(){
            try {
                const response = this.authStore.login(this.username, this.password)
                this.message = response.message

                if (response.success) {
                    this.username = ''
                    this.password = ''
                    this.$router.push('/')
                }
            }  
            catch(error){
                console.error("Inloggningsfel: ", error)
                this.message = "Ett oväntat fel uppstod vid inloggning"
            }
        }
    }
}
</script>
<template>
    <article id="article-create-account">
        <form id="form-create-account" @submit.prevent="login">
            <h1>Logga in på ditt konto</h1>
            <div class="div-create-account">
                <input id="username" v-model="username" placeholder="Användarnamn" required>
            </div>
            <div class="div-create-account">
                <input id="password" type="password" v-model="password" placeholder="Lösenord" required>
            </div>
            <button type="submit">Logga in</button>
            <p v-if="message">{{ message }}</p>
            
            <p><router-link to="/createuser"><button>Skapa konto här</button></router-link></p>
            
        </form>
        
    </article>
</template>
<style scoped>
#article-create-account {
   margin: auto;
}
#form-create-account {
    background-color: white;
    padding: 2rem 2rem;
    border-radius: 8px;
    box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}

h1 { 
    margin-top: auto;
    margin-bottom: 1rem;
}

.div-create-account {
    margin-bottom: 1rem;
}

a:-webkit-any-link { color: black}

.label-create-account{
    margin-right: 0.5rem;
}

button{
    height: 30px;
    border-radius: 4px;
}


</style>