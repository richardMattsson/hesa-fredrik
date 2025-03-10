<script>
  import HeaderTutorialComp from './HeaderTutorialComp.vue';
  import { mapStores } from 'pinia';
  import { useAuthStore } from '../../stores/useAuthStore';
  import { useQuizStore } from '../../stores/quizStore';

  export default {
    components: {
      HeaderTutorialComp
    },
    computed: {
      ...mapStores(useAuthStore, useQuizStore)
    },
    data() {
      return {
        showAnswer: false,
        quizStore: useQuizStore()
      };
    }
  };
</script>
<template>
  <HeaderTutorialComp
    title="Om krisen eller kriget kommer - övningar"
    previous-page="Tillbaka Hem"
    next-page="Gå till Hemberedskap"
    navigate-back="/"
    navigate-forward="/tutorial/hemberedskap"
  />

  <article class="container-white article-tutorial">
    <section class="section-intro">
      <section
        v-if="authStore.currentUser && authStore.currentUser.level > 3"
        class="container-white section-info"
      >
        <h2 class="tutorial-h2">
          Du har genomfört alla upgifterna! Bra jobbat 💪
        </h2>
        <p>Om du vill kan du nu testa dina nya kunskaper i ett quiz.</p>
        <router-link to="/question"
          ><button @click="quizStore.resetQuiz" class="buttonColor">
            Starta quiz nu
          </button></router-link
        >
      </section>
      <h2 class="tutorial-h2">Introduktion</h2>
      <p>
        Vi lever i en orolig tid. Krig pågår i vår omvärld. Terrorism,
        cyberattacker och vilseledande information används för att skada och
        påverka oss.
      </p>
      <p>
        I dessa övningar får du information om hur du kan förbereda dig, och vad
        du ska göra om krisen kommer. Klicka dig genom frågorna för att skaffa
        poäng.
      </p>
      <router-link to="/tutorial/hemberedskap"
        ><button class="buttonColor">Starta övningar nu</button></router-link
      >
    </section>
    <section class="container-white section-info">
      <h2 class="tutorial-h2">Exempel inom varje tema</h2>
      <p>
        Inom varje tema kommer du att få information om ämnet samt någon
        exempelfråga för att testa din kunskap.
      </p>
    </section>
    <section class="container-white container-example">
      <h3>Exempel</h3>
      <div class="container-white">
        <h4>Hemberedskap - vatten</h4>
        <p>Hur många liter vatten behöver en person i genomsnitt per dag?</p>
        <button class="buttonColor" @click="showAnswer = !showAnswer">
          Klicka här för rätt svar
        </button>
        <p class="exampleAnswer" v-if="showAnswer">
          Du behöver minst tre liter varje dag, i första hand för att dricka och
          laga mat.
        </p>
      </div>
    </section>
  </article>
</template>
<style scoped>
  .container-example {
    margin-top: 20px;
    margin-left: 2rem;
    margin-right: 2rem;
    border: 1px solid #333;
    border-radius: 4px;
  }
  .section-info {
    margin-top: 20px;
    border: 1px solid #333;
    border-radius: 4px;
  }
</style>
