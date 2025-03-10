<script>
import { RouterLink } from 'vue-router';
import { useAuthStore } from '../stores/useAuthStore';

export default {
  data() {
    return {
      authStore: useAuthStore(),
      isMobile: window.innerWidth <= 470
    }
  },
  computed: {
    currentUser() {
      return this.authStore.currentUser
    },
  },
  methods: {
    updateView() {
      this.isMobile = window.innerWidth <= 470
    },
  },
  mounted() {
    window.addEventListener('resize', this.updateView)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateView)
  }
}
</script>
<template>
  <nav :class="{ 'nav-top': !isMobile, 'nav-bottom': isMobile }">
    <ul id="nav-ul">
      <li>
        <a v-if="currentUser" class="nav-links" href="#" @click.prevent="authStore.logout()">Logga ut</a>
        <a v-else class="nav-links" href="#/login">Logga in</a>
      </li>
      <li class="nav-links">
        <RouterLink to="/tutorial/introduktion">Övningar</RouterLink>
      </li>
      <li class="nav-links" >
        <RouterLink to="/">Quiz</RouterLink>
      </li>
      <li class="nav-links">
        <RouterLink to="/scoretable">Ledartavla</RouterLink>
      </li>
      <li class="nav-links">
        <RouterLink to="/information">Information</RouterLink>
      </li>
    </ul>
  </nav>
  <main :class="{'main-desktop': !isMobile, 'main-mobile': isMobile}">
    <RouterView />
  </main>
</template>

<style scoped>
.main-desktop{
margin-top: 3rem;
}

.main-mobile{
  margin-bottom: 3rem;
}

nav {
  position: fixed;
  width: 100%;
  padding: 0.5rem 0;
  background-color: #333;
  color: whitesmoke;
}

.nav-top {
  top: 0;
  left: 0;
}

.nav-bottom {
  bottom: 0;
  left: 0;
}

#nav-ul {
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  list-style-type: none;
  align-content: center;
  justify-content: space-around;
}

.nav-links {
  display: flex;
  align-items: center;
  height: 1.5rem;
  padding: 0.3rem 1rem;
  border-radius: 6px;
}

.nav-links:hover {
  cursor: pointer;
  background-color: #555;
}

@media screen and (max-width: 470px) {

  #nav-ul {
    font-size: small;
  }

  .nav-links {
    height: 1rem;
    padding: 0.3rem 0.5rem;
  }

}
</style>
