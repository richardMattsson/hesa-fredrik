<script>
import { RouterLink } from 'vue-router';
import { useAuthStore } from '../stores/useAuthStore';

export default {
  data() {
    return {
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
  <nav id="container-nav">
    <ul id="container-ul">
      <li class="container-links" id="nav-home">
        <RouterLink to="/">Hem</RouterLink>
      </li>
      <li class="container-links" id="nav-information">
        <RouterLink to="/information">Information</RouterLink>
      </li>
      <li class="container-links" id="nav-leaderboard">
        <RouterLink to="/scoretable">Ledartavla</RouterLink>
      </li>
      <li class="container-links" id="nav-tutorial">
        <RouterLink to="/tutorial/introduktion">Övningar</RouterLink>
      </li>
      <li>
        <a v-if="currentUser" class="container-links" href="#" @click.prevent="authStore.logout()">Logga ut</a>
        <a v-else class="container-links" href="#/login">Logga in</a>
      </li>
    </ul>
  </nav>

  <!--
  <footer id="container-footer">
   <p class="info-text">Quiz om förberedelser inför en eventuell kris.</p>
    <p class="info-text">
      Av: Richard Mattsson, Kåre Lindqvist, Louise Nensén Lagnefors
    </p>
  </footer> 
  -->

</template>
<style scoped>
#container-nav {
  background-color: #333;
  color: whitesmoke;
  display: flex;
  flex-direction: row;
  padding: 0.5rem 0;
}

#container-ul {
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-content: center;
  justify-content: space-around;
  list-style-type: none;
}

.container-links {
  display: flex;
  align-items: center;
  height: 1.5rem;
  padding: 0.3rem 1rem;
  border-radius: 6px;
}

.container-links:hover {
  cursor: pointer;
  background-color: #444;
}

/*
  #container-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 1.5rem;
    padding: 0.5rem;
    background-color: #333;
    color: whitesmoke;
  }
*/

.info-text {
  margin: 0;
}


@media screen and (max-width: 430px) {

  /*
   container-footer {
   display: none;
   }
 */
 #container-ul {
  font-size: small;
 }

 .container-links {
  height: 1rem;
  padding: 0.3rem 0.5rem;
  border-radius: 6px;
}

}
</style>
