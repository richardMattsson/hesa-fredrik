<script>
import FooterComp from './components/FooterComp.vue';
import NavigationComp from './components/NavigationComp.vue';

export default {
  components: { NavigationComp, FooterComp },
};
</script>

<template>
  <NavigationComp />
  <main id="container-main">
    <RouterView />
  </main>
  <FooterComp />
</template>
