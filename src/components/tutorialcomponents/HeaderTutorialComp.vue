<script>
  import { mapStores } from 'pinia';
  import { useCounterStore } from '../../stores/store';

  export default {
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
      <section class="progress-bar">
        <progress :value="counterStore.value" :max="4" />
        <p>{{ counterStore.value }} / 4</p>
      </section>
      <router-link :to="navigateForward" @click="counterStore.increment()"
        ><button>
          {{ nextPage }}
        </button></router-link
      >
    </nav>
  </header>
</template>

<style>
  progress::-webkit-progress-bar {
    background-color: #ddd;
    border-radius: 5px;
  }
  progress::-webkit-progress-value {
    background-color: #4caf50;
    border-radius: 5px;
  }
  progress::-moz-progress-bar {
    background-color: #4caf50;
    border-radius: 5px;
  }
</style>
