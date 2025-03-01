<script>
  import HeaderTutorialComp from './HeaderTutorialComp.vue';

  export default {
    components: {
      HeaderTutorialComp
    },
    data() {
      return {
        chosenAlternative: null,
        questionAlternatives: [
          {
            isCorrect: false,
            text: 'Är du i behov av skydd vid höjd beredskap, har du rätt att komma in i närmaste skyddsrum.'
          },
          {
            isCorrect: false,
            text: 'Skyddsrum ska kunna ställas i verkstad inom ett 48 timmarsspann'
          },
          {
            isCorrect: false,
            text: 'Det enda kravet på provianter i ett skyddsrum är vatten och enklare toaletter'
          },
          {
            isCorrect: true,
            text: 'En källarlokal är alltid godtycklig som ett skyddsrum och erbjuder gott skydd i de flesta lägen'
          }
        ]
      };
    }
  };
</script>
<template>
  <HeaderTutorialComp
    title="Skyddsrum"
    previous-page="Tillbaka till Utrymning"
    next-page="Starta övning Varningssystem"
    navigate-back="/tutorial/utrymning"
    navigate-forward="/tutorial/varningssystem"
  />

  <article class="container-color article-tutorial">
    <section class="section-intro">
      <h2 class="tutorial-h2">Skyddsrum</h2>
      <p>
        Du tillhör inget särskilt skyddsrum utan använder det som är närmast. På
        msb.se finns en karta över skyddsrum.
      </p>
      <p>
        I skyddsrum ska det finnas vatten och enklare toaletter. Om du hinner
        bör du ha med dig något att äta, varma kläder och hygienartiklar. Var
        beredd på att du kan behöva stanna i skyddsrumet några dagar.
      </p>
    </section>
    <section class="container-white section-info">
      <h2 class="tutorial-h2">Närmaste skydd</h2>
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
        <p class="question-paragraph">
          Välj det påstående angående skyddsrum som inte gäller vid en krisfull
          situation.
        </p>

        <form action="" class="radiobuttons">
          <label
            v-for="alternative in questionAlternatives"
            :key="alternative.text"
            :class="{
              falseColor:
                chosenAlternative === alternative.text &&
                alternative.isCorrect === false,
              correctColor:
                chosenAlternative === alternative.text &&
                alternative.isCorrect === true
            }"
            class="label-class"
            ><input
              type="radio"
              v-model="chosenAlternative"
              :value="alternative.text"
            />{{ alternative.text }}
            <p
              class="answer-message-text"
              v-if="
                alternative.text === chosenAlternative &&
                alternative.isCorrect === false
              "
            >
              Fel svar. ×
            </p>
            <p
              class="answer-message-text"
              v-else-if="
                alternative.text === chosenAlternative &&
                alternative.isCorrect === true
              "
            >
              Rätt svar! ✓
            </p>
          </label>
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
  .question-paragraph {
    padding: 5px;
  }
  .label-class {
    padding: 5px;
  }
  .correctColor {
    /* background-color: green; */
    border: 2px solid green;
  }
  .falseColor {
    /* background-color: red; */
    border: 2px solid red;
  }
  .answer-message-text {
    margin-bottom: 0;
    margin: 2px;
    margin-top: 4px;
  }
  .progress-indicator {
    background-color: rgb(30, 255, 0);
  }
</style>
