<script>
  import { mapStores } from 'pinia';
  import { useCounterStore } from '../store';
  export default {
    // computed: Object.assign({}, mapStores(useCounterStore))
    computed: {
      ...mapStores(useCounterStore)
    }
  };
</script>
<template>
  <main id="container-main">
    <input
      @click="counterStore.increment(2)"
      type="button"
      :value="counterStore.value"
    />
    <h1>HESA FREDRIK</h1>
    <img
      src="/hesa-fredrik-logo.png"
      alt="hesa fredrik logga, radiomast alarm"
      id="img-home"
    />

    <p>Testa din krisberedskap – innan det är skarpt läge!</p>

    <router-link to="/question" tag="button"
      ><button class="start-button">Starta spel</button></router-link
    >
  </main>
</template>

<style scoped>
  #container-main {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  #img-home {
    max-width: 200px;
  }

  .start-button {
    width: 100px;
    height: 40px;
    border-radius: 4px;
  }
</style>
