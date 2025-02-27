<script>
import './TutorialStyles.css';
export default {
  data() {
    return {
      correctAnswer: false,
      correctAnswer1: false,
      correctAnswer2: false,
      correctAnswer3: false,
    };
  },
  methods: {
    onClick() {
      this.correctAnswer = false;
      this.correctAnswer1 = false;
      this.correctAnswer2 = false;
      this.correctAnswer3 = false;
    },
  },
};
</script>
<template>
  <header class="container-white">
    <h1>Skyddsrum</h1>
    <nav class="container-flex nav">
      <router-link to="/tutorial/utrymning"
        ><button>Tillbaka till Utrymning</button></router-link
      >
      <div class="progress-indicator">🤗</div>
      <router-link to="/tutorial/varningssystem"
        ><button>Starta övning Varningssystem</button></router-link
      >
    </nav>
  </header>
  <article class="container-color">
    <h2>Skyddsrum</h2>
    <p>
      Du tillhör inget särskilt skyddsrum utan använder det som är närmast. På
      msb.se finns en karta över skyddsrum.
    </p>
    <p>
      I skyddsrum ska det finnas vatten och enklare toaletter. Om du hinner bör
      du ha med dig något att äta, varma kläder och hygienartiklar. Var beredd
      på att du kan behöva stanna i skyddsrumet några dagar.
    </p>

    <section class="container-white section-info">
      <h2>Närmaste skydd</h2>
      <p>
        Är du i behov av skydd vid höjd beredskap, har du rätt att komma in i
        närmaste skyddsrum.
      </p>
      <p>
        I fredstid får skyddsrum användas till annat, men de ska kunna ställas
        iordning inom 48 timmar. Vid höjd beredskap ansvarar fastighetsägaren
        för iordningsställandet.
      </p>
    </section>
    <section class="container-white container-example">
      <h3>Exempelfråga</h3>
      <div class="container-color container-radiobuttons">
        <p>
          Välj det påstående angående skyddsrum som inte gäller vid en krisfull
          situation
        </p>
        <form action="" class="radiobuttons">
          <label for="radiobutton" :class="{ falseColor: correctAnswer1 }"
            ><input
              @click="onClick"
              name="radiobutton"
              type="radio"
              v-model="correctAnswer1"
              :value="true"
            />Är du i behov av skydd vid höjd beredskap, har du rätt att komma
            in i närmaste skyddsrum.</label
          >
          <label for="" :class="{ falseColor: correctAnswer2 }"
            ><input
              @click="onClick"
              type="radio"
              v-model="correctAnswer2"
              :value="true"
            />Skyddsrum ska kunna ställas i verkstad inom ett 48 timmars
            spann</label
          >
          <label for="" :class="{ falseColor: correctAnswer3 }"
            ><input
              @click="onClick"
              type="radio"
              v-model="correctAnswer3"
              :value="true"
            />Det enda kravet på provianter i ett skyddsrum är vatten och
            enklare toaletter</label
          >
          <label for="" :class="{ correctColor: correctAnswer }"
            ><input
              @click="onClick"
              type="radio"
              v-model="correctAnswer"
              :value="true"
            />En källarlokal är alltid godtycklig som ett skyddsrum och erbjuder
            gott skydd i de flesta lägen</label
          >
        </form>
      </div>
    </section>
  </article>
</template>
<style scoped>
.container-example {
  margin-top: 20px;
  margin-left: 2rem;
  margin-right: 2rem;
  border: 1px dotted black;
}
.section-info {
  margin-top: 20px;
  border: 1px dotted black;
}
.container-radiobuttons {
  display: flex;
  flex-direction: column;
}
.radiobuttons {
  display: flex;
  flex-direction: column;
}
.correctColor {
  /* background-color: green; */
  border: 4px solid green;
}
.falseColor {
  /* background-color: red; */
  border: 4px solid red;
}
.progress-indicator {
  background-color: rgb(30, 255, 0);
}
</style>
