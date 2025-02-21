<script>
import NavigationComp from './components/NavigationComp.vue';

export default{
  components: {NavigationComp}
}
</script>

<template>
  <NavigationComp />
  <main>
    <RouterView />
  </main>
</template>
