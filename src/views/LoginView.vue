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
        login() {
            try {
                const response = this.authStore.login(this.username, this.password)
                this.message = response.message

                if (response.success) {
                    this.username = ''
                    this.password = ''
                    this.$router.push('/')
                }
            }
            catch (error) {
                console.error("Inloggningsfel: ", error)
                this.message = "Ett oväntat fel uppstod vid inloggning"
            }
        }
    }
}
</script>
<template>
    <article id="article-login">
        <form id="form-login" @submit.prevent="login">
            <h1>Logga in</h1>
            <div class="div-create-account">
                <input id="username" v-model="username" placeholder="Användarnamn" aria-label="username" required>
            </div>
            <div class="div-create-account">
                <input id="password" type="password" v-model="password" placeholder="Lösenord" aria-label="password"
                    required>
            </div>
            <div class="div-create-account">
                <button id="login-button" type="submit">Logga in</button>
            </div>
            <p v-if="message">{{ message }}</p>
        </form>
        <hr>
        <router-link to="/registration"><button id="create-account-nav-btn">Skapa nytt konto</button></router-link>
    </article>
</template>
<style scoped>
#article-login {
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

.div-create-account {
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
    color: white;
    font-weight: 750;
    font-size: small;
}

#login-button {
    background-color: #0145E6;
}

#create-account-nav-btn {
    background-color: #28800C;
}

hr {
    margin: 20px 0;
}
</style>
