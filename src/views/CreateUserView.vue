<script>
import { useAuthStore } from '../stores/useAuthStore';

export default {
    data() {
        return {
            username: '',
            password: '',
            confirmPassword: '',
            message: ''
        }
    },
    computed: {
        authStore() {
            return useAuthStore()
        }
    },
    methods: {
        register() {
            try {
                const response = this.authStore.register(this.username, this.password, this.confirmPassword)
                this.message = response.message

                if (response.success) {
                    this.username = ''
                    this.password = ''
                    this.confirmPassword = ''
                }
            }  
            catch(error){
                console.error("Registreringsfel: ", error)
                this.message = "Ett oväntat fel uppstod vid registrering"
            }
        }
    }
}
</script>
<template>
    <article id="article-create-account">
        <h1>Registrera Konto</h1>
        <form id="form-create-account" @submit.prevent="register">
            <div>
                <label for="username">Användarnamn</label>
                <input id="username" v-model="username" placeholder="Användarnamn" required>
            </div>
            <div>
                <label for="password">Lösenord</label>
                <input id="password" type="password" v-model="password" placeholder="Lösenord" required>
            </div>
            <div>
                <label for="confirm-password">Bekräfta Lösenord</label>
                <input id="confirm-password" type="password" v-model="confirmPassword" placeholder="Bekräfta Lösenord"
                    required>
            </div>
            <button type="submit">Registrera</button>
            <p v-if="message">{{ message }}</p>
        </form>
        <p> Har du redan ett konto ? <router-link to="/login">Logga in här</router-link></p>
    </article>
</template>
<style scoped>
h1 {
    font-size: 2rem;
    margin: 1rem 0;
}
</style>