<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  components: {
    HelloWorld,
  },
};
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Hem</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">Om</RouterLink>
      </li>
      <li>
      <RouterLink to="/contact">Kontakt</RouterLink>
    </li>
    </ul>
  </nav>
  <main>
    <RouterView />
  </main>
  <HelloWorld />
</template>
