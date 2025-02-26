<script>
import HomePreparednessComp from '../components/tutorialcomponents/HomePreparednessComp.vue';
import IntroductionComp from '../components/tutorialcomponents/IntroductionComp.vue';
import EvacuationComp from '../components/tutorialcomponents/EvacuationComp.vue';
export default {
  components: {
    HomePreparednessComp,
    IntroductionComp,
    EvacuationComp,
  },
};
</script>
<template>
  <EvacuationComp v-if="$route.params.page === '2'" />
  <HomePreparednessComp v-if="$route.params.page === '1'" />
  <IntroductionComp v-if="$route.params.page === ''" />
</template>
<style scoped></style>
