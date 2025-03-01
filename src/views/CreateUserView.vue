<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            confirmPassword: '',
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
            <div>
                <label for="confirm-password">Bekräfta Lösenord</label>
                <input id="confirm-password" v-model="confirmPassword" placeholder="Bekräfta Lösenord">
            </div>
            <button type="submit">Registrera</button>
        </form>
        <p> Har du redan ett konto ? <router-link to="/login">Logga in här</router-link></p>
    </article>
</template>
