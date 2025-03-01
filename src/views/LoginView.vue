<script>
export default {
    data() {
        return {

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
                <input id="username" placeholder="Användarnamn">
            </div>
            <div>
                <label for="password">Lösenord</label>
                <input id="password" placeholder="Lösenord">
            </div>
            <button type="button">Logga in</button>
        </form>
        <p> Saknar du konto? <router-link to="/createuser">Skapa konto här</router-link></p>
    </article>
</template>