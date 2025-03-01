<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login(){

        }
    }
}
</script>
<template>
    <article id="article-create-account">
        <h1>Registrera Konto</h1>
        <form id="form-create-account">
            <div>
                <label for="username">Användarnamn</label>
                <input id="username" v-model="username" placeholder="Användarnamn">
            </div>
            <div>
                <label for="password">Lösenord</label>
                <input id="password" v-model="password" placeholder="Lösenord">
            </div>
            <button @click="login()" type="button">Logga in</button>
        </form>
        <p> Saknar du konto? <router-link to="/createuser">Skapa konto här</router-link></p>
    </article>
</template>