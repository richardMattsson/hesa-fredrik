<script>
  // import { defineConfig } from 'vite';
  // import vueDevTools from 'vite-plugin-vue-devtools';

  // export default defineConfig({
  //   plugins: [vueDevTools()]
  // });
  import NavigationComp from './components/NavigationComp.vue';

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
