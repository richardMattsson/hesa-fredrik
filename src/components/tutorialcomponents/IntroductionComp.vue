<script>
import './TutorialStyles.css';
export default {
  data() {
    return {
      showAnswer: false,
    };
  },
};
</script>
<template>
  <header class="container-white">
    <h1>Om krisen eller kriget kommer - övningar</h1>
    <nav class="container-flex nav">
      <router-link to="/"><button>Hem</button></router-link>
      <div class="progress-indicator">🫣</div>
      <router-link to="/tutorial/hemberedskap"
        ><button>Starta övning Hemberedskap</button></router-link
      >
    </nav>
  </header>
  <article class="container-color">
    <h2>Introduktion</h2>
    <p>
      Vi lever i en orolig tid. Krig pågår i vår omvärld. Terrorism,
      cyberattacker och vilseledande information används för att skada och
      påverka oss.
    </p>
    <p>
      I dessa övningar får du information om hur du kan förbereda dig, och vad
      du ska göra om krisen kommer.
    </p>
    <router-link to="/tutorial/hemberedskap"
      ><button>Starta övningar nu</button></router-link
    >
    <section class="container-white section-info">
      <h2>Exempel inom varje tema</h2>
      <p>
        Inom varje tema kommer du att få information om ämnet samt någon
        exempelfråga för att testa din kunskap.
      </p>
    </section>
    <section class="container-white container-example">
      <h3>Exempel</h3>
      <div class="container-color">
        <h4>Hemberedskap - vatten</h4>
        <p>Hur många liter vatten behöver en person i genomsnitt per dag?</p>
        <button @click="showAnswer = !showAnswer">
          Klicka här för rätt svar
        </button>
        <p v-if="showAnswer">
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
  margin-left: 4rem;
  margin-right: 4rem;
  border: 1px dotted black;
}
.section-info {
  margin-top: 20px;
  border: 1px dotted black;
}
.progress-indicator {
  background-color: red;
}
</style>
