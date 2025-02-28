<script>
  import HomePreparednessComp from '../components/tutorialcomponents/HomePreparednessComp.vue';
  import IntroductionComp from '../components/tutorialcomponents/IntroductionComp.vue';
  import EvacuationComp from '../components/tutorialcomponents/EvacuationComp.vue';
  import CivilDefenceShelterComp from '../components/tutorialcomponents/CivilDefenceShelterComp.vue';
  import WarningSystemsComp from '../components/tutorialcomponents/WarningSystemsComp.vue';

  export default {
    components: {
      HomePreparednessComp,
      IntroductionComp,
      EvacuationComp,
      CivilDefenceShelterComp,
      WarningSystemsComp
    }
  };
</script>
<template>
  <div id="tutorials">
    <WarningSystemsComp v-if="$route.params.page === 'varningssystem'" />
    <CivilDefenceShelterComp v-if="$route.params.page === 'skyddsrum'" />
    <EvacuationComp v-if="$route.params.page === 'utrymning'" />
    <HomePreparednessComp v-if="$route.params.page === 'hemberedskap'" />
    <IntroductionComp v-if="$route.params.page === ''" />
  </div>

  <!-- #tutorials h1 {

  }

  #tutorials p {

  }

#tutorials {
    h1 {

    }

    p {

    }
  } -->
</template>
<style scoped>
#tutorials {
  height:100vh;
  margin-bottom:auto;
}
</style>
