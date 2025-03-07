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
                    setTimeout(() => {this.$router.push('/login')}, 1800)
                }
            }
            catch (error) {
                console.error("Registreringsfel: ", error)
                this.message = "Ett oväntat fel uppstod vid registrering"
            }
        }
    }
}
</script>
<template>
    <article id="article-create-account">
        <form id="form-create-account" @submit.prevent="register">
            <h1>Registrera Konto</h1>
            <div class="div-login">
                <input id="username" v-model="username" placeholder="Användarnamn" required>
            </div>
            <div class="div-login">
                <input id="password" type="password" v-model="password" placeholder="Lösenord" required>
            </div>
            <div class="div-login">
                <input id="confirm-password" type="password" v-model="confirmPassword" placeholder="Bekräfta Lösenord"
                    required>
            </div>
            <button id="register-button" type="submit">Registrera</button>
            <p v-if="message">{{ message }}</p>
        </form>
        <hr>
        <router-link to="/login"><button id="login-nav-btn">Logga in här</button></router-link>
    </article>
</template>

<style scoped>
#article-create-account {
    margin: auto;
    background-color: white;
    padding: 2rem 2rem;
    border-radius: 8px;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

h1 {
    margin-top: auto;
    margin-bottom: 1rem;
}

.div-login {
    margin-bottom: 1rem;
}

button,
input {
    box-sizing: border-box;
    height: 2rem;
    width: 100%;
    border-radius: 4px;
}

input {
    border: 1px solid black;
    background-color: white;
    padding-left: 10px;
}

button {
    border-style: none;
    color: whitesmoke;
    font-weight: 750;
    font-size: small;
}

#register-button {
    background-color: #0145E6;
}

#login-nav-btn {
    background-color: #28800C;
}

hr {
    margin: 20px 0;
}
</style>
