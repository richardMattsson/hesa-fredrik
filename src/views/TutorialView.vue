<script>
import HomePreparednessComp from '../components/tutorialcomponents/HomePreparednessComp.vue';
import IntroductionComp from '../components/tutorialcomponents/IntroductionComp.vue';
import EvacuationComp from '../components/tutorialcomponents/EvacuationComp.vue';
import CivilDefenceShelterComp from '../components/tutorialcomponents/CivilDefenceShelterComp.vue';

export default {
  components: {
    HomePreparednessComp,
    IntroductionComp,
    EvacuationComp,
    CivilDefenceShelterComp,
  },
};
</script>
<template>
  <CivilDefenceShelterComp v-if="$route.params.page === '3'" />
  <EvacuationComp v-if="$route.params.page === '2'" />
  <HomePreparednessComp v-if="$route.params.page === '1'" />
  <IntroductionComp v-if="$route.params.page === ''" />
</template>
<style scoped></style>
