<script>
import CitiesList from './components/CitiesList.vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
  components: {
    CitiesList,
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
  <HelloWorld msg="Hello Hesa Fredrik!" />
  <CitiesList />
</template>
