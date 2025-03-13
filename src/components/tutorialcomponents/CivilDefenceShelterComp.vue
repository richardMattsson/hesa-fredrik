<script>
  import HeaderTutorialComp from './HeaderTutorialComp.vue';
  import { mapStores } from 'pinia';
  import { useAuthStore } from '../../stores/useAuthStore';

  import IntroParagraphComp from './IntroParagraphComp.vue';
  import InfoQuestionComp from './InfoQuestionComp.vue';

  export default {
    computed: {
      ...mapStores(useAuthStore)
    },
    components: {
      HeaderTutorialComp,
      IntroParagraphComp,
      InfoQuestionComp
    },
    data() {
      return {
        chosenAlternative: null,
        infoQuestion: {
          title: 'Närmaste skydd',
          info: 'Är du i behov av skydd vid höjd beredskap, har du rätt att komma in i närmaste skyddsrum.',
          info2:
            ' I fredstid får skyddsrum användas till annat, men de ska kunna ställas iordning inom 48 timmar. Vid höjd beredskap ansvarar fastighetsägaren för iordningsställandet.'
        },
        introText: {
          title: 'Skyddsrum',
          text: ' Du tillhör inget särskilt skyddsrum utan använder det som är närmast. På msb.se finns en karta över skyddsrum.',
          text2:
            'I skyddsrum ska det finnas vatten och enklare toaletter. Om du hinner bör du ha med dig något att äta, varma kläder och hygienartiklar. Var beredd på att du kan behöva stanna i skyddsrumet några dagar.'
        },
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
    },
    methods: {
      answerQuestion(alternative) {
        if (alternative.isCorrect) {
          this.authStore.users.forEach((user) => {
            if (user.username === this.authStore.currentUser.username) {
              if (user.level > 1 && user.level < 3) {
                user.level += 1;
                localStorage.setItem(
                  'users',
                  JSON.stringify(this.authStore.users)
                );
                this.authStore.currentUser = user;
                localStorage.setItem(
                  'currentUser',
                  JSON.stringify(this.authStore.currentUser)
                );
              }
            }
          });
        }
      }
    }
  };
</script>
<template>
  <HeaderTutorialComp
    title="Övning 3 - Skyddsrum"
    previous-page="Tillbaka till Utrymning"
    next-page="Starta övning Varningssystem"
    navigate-back="/tutorial/utrymning"
    navigate-forward="/tutorial/varningssystem"
  />

  <article class="container-white article-tutorial">
    <IntroParagraphComp :input-text="introText" />

    <InfoQuestionComp :item="infoQuestion" />

    <section class="container-white container-example">
      <h3>Exempelfråga</h3>
      <div class="container-white container-radiobuttons">
        <p class="question-paragraph container-color">
          Välj det påstående angående skyddsrum som inte gäller vid en krisfull
          situation.
        </p>

        <form action="" class="radiobuttons">
          <label
            v-for="alternative in questionAlternatives"
            @click="answerQuestion(alternative)"
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
                alternative.text === chosenAlternative && !alternative.isCorrect
              "
            >
              Fel svar. ×
            </p>
            <p
              class="answer-message-text"
              v-else-if="
                alternative.text === chosenAlternative && alternative.isCorrect
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
    border: 1px solid #333;
    border-radius: 4px;
  }
  .section-info {
    margin-top: 20px;
    border: 1px solid #333;
    border-radius: 4px;
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
    cursor: pointer;
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
</style>
