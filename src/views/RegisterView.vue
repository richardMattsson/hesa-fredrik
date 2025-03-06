<script>
  import { useQuizStore } from '../stores/quizStore';

  export default {
    data() {
      return {
        points: JSON.parse(localStorage.getItem('points')),
        numberOfQuestions: JSON.parse(
          localStorage.getItem('numberOfQuestions')
        ),
        newPlayer: { player: '', result: '' },
        playerName: '',
        resultData: JSON.parse(localStorage.getItem('savedResult')) || [],
        quizStore: useQuizStore()
      };
    },

    computed: {
      randomizedQuestions() {
        return this.quizStore.questions;
      }
    },

    methods: {
      onSave() {
        this.newPlayer.player = this.playerName;
        this.newPlayer.result = this.points;

        let existingResults =
          JSON.parse(localStorage.getItem('savedResult')) || [];

        existingResults.push({
          player: this.playerName,
          result: this.quizStore.score
        });

        existingResults.sort((a, b) => b.result - a.result);
        localStorage.setItem('savedResult', JSON.stringify(existingResults));

        console.log('Updated saved results:', existingResults);
        this.$router.push('/scoretable');
      },
      restartQuiz() {
        this.quizStore.resetQuiz();
        this.$router.push('/question');
      }
    }
  };
</script>

<template>
  <article class="container-result">
    <section class="section-form">
      <form id="container-form" action="">
        <p id="quiz-result">
          {{ quizStore.score }} rätta svar av
          {{ quizStore.currentQuestionIndex + 1 }}
        </p>
        <label id="container-input-name" for="">
          Vill du spara ditt resultat?
          <input
            id="input-name"
            v-model="playerName"
            type="text"
            placeholder="Namn"
          />
        </label>
        <section class="quiz-summary">
          <h3>Frågor och svar:</h3>
          <ul>
            <li v-for="(question, index) in randomizedQuestions" :key="index">
              <p>
                <strong>Fråga {{ index + 1 }}:</strong> {{ question.question }}
              </p>
              <p>
                Ditt svar:
                <span
                  :class="{
                    correct: question.correct,
                    incorrect: !question.correct
                  }"
                >
                  {{ question.userAnswer || 'Ej besvarad' }}
                </span>
              </p>
              <p>Korrekt svar: {{ question.correctAnswer }}</p>
            </li>
          </ul>
        </section>

        <section id="section-save-button">
          <input id="save-button" type="button" value="Spara" @click="onSave" />
        </section>
      </form>
    </section>
    <section class="section-restart">
      <input
        class="restart-button"
        type="button"
        @click="restartQuiz"
        value="Starta om quiz"
      />
    </section>
  </article>
</template>

<style scoped>
  .container-result {
    background-color: #ffda00;
    display: grid;
    gap: 5px;
    padding: 5px;
    grid: auto auto / auto auto auto;
    height: 100vh;
    overflow: auto;
  }

  .section-form {
    grid-area: 1 / 1 / span 1 / span 3;
  }

  #container-form {
    display: grid;
    grid: auto auto / auto auto;
  }

  #quiz-result {
    grid-area: 1 / 1 / span 1 / span 2;
  }

  #container-input-name {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    grid-area: 2 / 1 / span 1 / span 1;
  }

  #input-name {
    margin-top: 5px;
    width: 250px;
    height: 80%;
  }

  #section-save-button {
    grid-area: 2 / 2 / span 1 / span 1;
    display: flex;
    justify-content: center;
    align-items: end;
    padding-left: 10px;
  }

  #save-button {
    width: 80px;
    height: 40px;
    border-radius: 4px;
  }

  .section-link {
    grid-area: 2 / 1 / span 1 / span 1;
  }

  .section-restart {
    display: flex;
    justify-content: center;
  }

  .restart-button {
    width: 100px;
    height: 40px;
    border-radius: 4px;
  }

  .quiz-summary {
    margin-top: 20px;
    background: white;
    padding: 10px;
    border-radius: 8px;
    display: flex;
    align-items: center;
  }
  .correct {
    color: green;
    font-weight: bold;
  }
  .incorrect {
    color: red;
    font-weight: bold;
  }
</style>
