import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import ContactView from './views/ContactView.vue';
import QuestionView from './views/QuestionView.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: '/',
    },
    {
      component: QuestionView,
      path: '/question/:number?',
    },
    {
      component: ResultsView,
      path: '/result',
    },
  ],
});
