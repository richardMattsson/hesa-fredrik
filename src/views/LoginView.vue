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
        <h1>Logga in på ditt konto</h1>
        <form id="form-create-account" @submit.prevent="login">
            <div>
                <label for="username">Användarnamn</label>
                <input id="username" v-model="username" placeholder="Användarnamn" required>
            </div>
            <div>
                <label for="password">Lösenord</label>
                <input id="password" type="password" v-model="password" placeholder="Lösenord" required>
            </div>
            <button type="submit">Logga in</button>
            <p v-if="message">{{ message }}</p>
        </form>
        <p> Saknar du konto? <router-link to="/createuser">Skapa konto här</router-link></p>
    </article>
</template>