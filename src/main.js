import { createApp, watch } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import '../assets/main.css';

const pinia = createPinia();

watch(
  pinia.state,
  (state) => {
    localStorage.setItem('counter', JSON.stringify(state.counter));
  },
  { deep: true }
);

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');
