<script>
import logo from '/hesa-fredrik-logo.png';
import { RouterLink } from 'vue-router';
import { useAuthStore } from '../stores/useAuthStore';

export default {
  data() {
    return {
      logo,
      authStore: useAuthStore()
    }
  },
  computed: {
    currentUser() {
      return this.authStore.currentUser
    }
  }
}
</script>

<template>
  <article id="article-main">
    <h1>HESA FREDRIK</h1>
    <img :src="logo" alt="hesa fredrik logga, radiomast alarm" id="img-home" />
    <p id="slogan">Testa din krisberedskap – innan det är skarpt läge!</p>
    <p class="inloggningsstatus" v-if="currentUser">Inloggad som: {{ currentUser.username }}</p>
    <p class="inloggningsstatus" v-else>Du är inte inloggad</p>
    <div><router-link to="/question"><button id="start-button">Starta Quiz</button></router-link></div>
    <div v-if="!currentUser"><router-link to="/login" class="navigation-link">Logga in här</router-link></div>
    <div v-if="!currentUser"><router-link to="/registration" class="navigation-link">Skapa nytt konto</router-link></div>
  </article>
</template>

<style scoped>
#article-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: auto;
}

#img-home {
  max-width: 200px;
}

div {
  width: 160px;
  text-align: center;
  margin-top: 1rem;
}


#slogan {
  font-style: italic;
}

.inloggningsstatus {
  font-weight: bold;
}

button {
  width: 100%;
  height: 40px;
  border-style: none;
  border-radius: 4px;
  font-weight: 750;
  background-color: #333;
  margin: 1rem 0;
  font-size: medium;
  color: whitesmoke;
}

.navigation-link {
  color: #333;
  text-decoration: underline;
}
</style>
