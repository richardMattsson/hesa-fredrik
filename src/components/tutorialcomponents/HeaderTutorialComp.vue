<script>
  import { mapStores } from 'pinia';
  import { useTutorialProgressStore } from '../../stores/store';

  export default {
    props: {
      title: { type: String, default: 'Rubrik 1' },
      previousPage: { type: String, default: 'Föregående sida' },
      nextPage: { type: String, default: 'Nästa sida' },
      navigateBack: { type: String, default: '/tutorial/introduktion' },
      navigateForward: { type: String, default: '/tutorial/introduktion' }
    },
    computed: {
      ...mapStores(useTutorialProgressStore)
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
        {{ tutorialProgressStore.reaction[tutorialProgressStore.value] }}
      </div>
      <section class="progress-bar">
        <progress :value="tutorialProgressStore.value" :max="4" />
        <p>{{ tutorialProgressStore.value }} / 4</p>
      </section>
      <router-link
        :to="navigateForward"
        @click="tutorialProgressStore.increment()"
        ><button>
          {{ nextPage }}
        </button></router-link
      >
    </nav>
  </header>
</template>

<style>
  .progress-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .progress-bar > p {
    margin: 0;
    margin-top: 5px;
    width: 80%;
  }
  progress {
    width: 80%;
  }
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
  a > button {
    padding: 5px 5px;
  }
</style>
