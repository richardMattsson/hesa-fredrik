import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from './views/HomeView.vue';
import QuestionView from './views/QuestionView.vue';
import RegisterView from './views/RegisterView.vue';
import ScoreTableView from './views/ScoreTableView.vue';
import InformationView from './views/InformationView.vue';
import TutorialView from './views/TutorialView.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: '/',
    },
    {
      component: QuestionView,
      path: '/question',
    },
    {
      component: RegisterView,
      path: '/register',
    },
    {
      component: ScoreTableView,
      path: '/scoretable',
    },
    {
      component: InformationView,
      path: '/information',
    },
    {
      component: TutorialView,
      path: '/tutorial',
    },
  ],
});
