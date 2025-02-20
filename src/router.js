import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from './views/HomeView.vue';
import QuestionView from './views/QuestionView.vue';
import RegisterView from './views/RegisterView.vue';
import ScoreTableView from './views/ScoreTableView.vue';

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
      component: RegisterView,
      path: '/register',
    },
    {
      component: ScoreTableView,
      path: '/scoretable',
    }
  ],
});
