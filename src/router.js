import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from './views/HomeView.vue';
import QuestionView from './views/QuestionView.vue';
import ResultsView from './views/ResultsView.vue';

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
