<template>
  <header class="container-white">
    <h1 class="tutorial-h1">{{ title }}</h1>
    <nav class="container-flex tutorial-nav">
      <router-link :to="navigateBack"
        ><button>{{ previousPage }}</button></router-link
      >
      <div>
        {{ counterStore.color[counterStore.value] }}
      </div>
      <router-link :to="navigateForward" @click="counterStore.increment()"
        ><button>
          {{ nextPage }}
        </button></router-link
      >
    </nav>
  </header>
</template>
<script>
  import { mapStores } from 'pinia';
  import { useCounterStore } from '../../store';

  export default {
    index: 0,
    props: {
      title: { type: String, default: 'Rubrik 1' },
      previousPage: { type: String, default: 'Föregående sida' },
      nextPage: { type: String, default: 'Nästa sida' },
      navigateBack: { type: String, default: '/tutorial/introduktion' },
      navigateForward: { type: String, default: '/tutorial/introduktion' }
    },
    computed: {
      ...mapStores(useCounterStore)
    }
  };
</script>
<style>
  .progress-indicator {
    background-color: red;
  }
  .blue {
    background-color: blue;
  }
  .yellow {
    background-color: yellow;
  }
  .green {
    background-color: green;
  }
  .purple {
    background-color: purple;
  }
</style>
