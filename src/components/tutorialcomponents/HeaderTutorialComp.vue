<template>
  <header class="container-white">
    <h1 class="tutorial-h1">{{ title }}</h1>
    <nav class="container-flex tutorial-nav">
      <router-link :to="navigateBack" @click="counterStore.increment()">
        <button>{{ previousPage }}</button></router-link
      >
      <div class="progress-indicator">😲</div>
      <router-link :to="navigateForward"
        ><button>{{ nextPage }}</button></router-link
      >
      <div>
        {{ counterStore.color[counterStore.value] }}
      </div>
      <section>
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
<script>
  export default {
    props: {
      title: { type: String, default: 'Rubrik 1' },
      previousPage: { type: String, default: 'Föregående sida' },
      nextPage: { type: String, default: 'Nästa sida' },
      navigateBack: { type: String, default: '/tutorial/introduktion' },
      navigateForward: { type: String, default: '/tutorial/introduktion' }
    }
  };
</script>
