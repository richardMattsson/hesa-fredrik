<script>
  import NavigationComp from './components/NavigationComp.vue';
  import { useCounterStore } from './store';
  useCounterStore();
  export default {
    components: { NavigationComp }
  };
</script>

<template>
  <main id="container-main">
    <RouterView />
    <NavigationComp />
  </main>
</template>
