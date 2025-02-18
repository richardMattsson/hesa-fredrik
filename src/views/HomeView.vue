<template>
  <main>
    <RouterView />
  </main>
  <h1>Home</h1>

  <li>
    <router-link to="/question/1" tag="button"
      ><button>Starta spel</button></router-link
    >
  </li>
  <HelloWorld />
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
export default {
  components: {
    HelloWorld,
  },
};
</script>
