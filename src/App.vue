<script>
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
