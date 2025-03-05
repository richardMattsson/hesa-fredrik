<script>
import logo from '/hesa-fredrik-logo.png';
import { RouterLink } from 'vue-router';
import { useAuthStore } from '../stores/useAuthStore';

export default{
  data(){
    return {
      logo,
      authStore: useAuthStore()
    }
  },
  computed: {
    currentUser(){
      return this.authStore.currentUser
    }
  }
}
</script>

<template>
  <article id="article-main">
    <h1>HESA FREDRIK</h1>
    <img :src="logo" alt="hesa fredrik logga, radiomast alarm" id="img-home"/>
    <p>Testa din krisberedskap – innan det är skarpt läge!</p>
    <p v-if="currentUser" >Inloggad som: {{currentUser.username}}</p>
    <p v-else >Du är inte inloggad</p>
    <div><router-link to="/question"><button class="start-button">Starta spel</button></router-link></div>
    <div v-if="!currentUser"><router-link to="/login" ><button>Logga in här</button></router-link></div>
    <div><router-link to="/createuser"><button>Skapa nytt konto</button></router-link></div>
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
}

button {
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border-style: none;
  color: #333;
  font-weight: 750;
  font-size: small;
  background: linear-gradient(to bottom, #f8f8f8, #e0e0e0);
  margin-top: 1rem;
}
</style>
