<template>
  <main>
    <RouterView />
  </main>
  <h1>Home</h1>
  <HelloWorld />

  <li>
    <router-link to="/question/fråga-1" tag="button"
      ><button>Starta spel</button></router-link
    >
  </li>
  <!-- <input @click="onSubmit" type="button" value="Starta spel" /> -->
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
export default {
  components: {
    HelloWorld,
  },
};
</script>
