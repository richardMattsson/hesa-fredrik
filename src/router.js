import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from './views/HomeView.vue';
import RegistrationView from './views/RegistrationView.vue';
import LoginView from './views/LoginView.vue';
import QuestionView from './views/QuestionView.vue';
import SummaryView from './views/SummaryView.vue';
import ScoreTableView from './views/ScoreTableView.vue';
import InformationView from './views/InformationView.vue';
import TutorialView from './views/TutorialView.vue';
import EvacuationComp from './components/tutorialcomponents/EvacuationComp.vue';
import HomePreparednessComp from './components/tutorialcomponents/HomePreparednessComp.vue';
import CivilDefenceShelterComp from './components/tutorialcomponents/CivilDefenceShelterComp.vue';
import WarningSystemsComp from './components/tutorialcomponents/WarningSystemsComp.vue';
import IntroductionComp from './components/tutorialcomponents/IntroductionComp.vue';


export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: '/'
    },
    {
      component: RegistrationView,
      path: '/registration'
    },
    {
      component: LoginView,
      path: '/login'
    },
    {
      component: QuestionView,
      path: '/question'
    },
    {
      component: SummaryView,
      path: '/summary'
    },
    {
      component: ScoreTableView,
      path: '/scoretable'
    },
    {
      component: InformationView,
      path: '/information'
    },
    {
      component: TutorialView,
      path: '/tutorial/:page?',
      children: [
        { path: 'introduktion', component: IntroductionComp },
        { path: 'hemberedskap', component: HomePreparednessComp },
        { path: 'utrymning', component: EvacuationComp },
        { path: 'skyddsrum', component: CivilDefenceShelterComp },
        { path: 'varningssystem', component: WarningSystemsComp }
      ]
    }
  ]
});
