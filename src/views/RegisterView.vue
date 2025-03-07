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
    /* gap: 5px; */
    /* padding: 5px; */
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
    display: flex;
    height: 40px;
    width: 100%;
    justify-content: center;
    justify-items: center;
    font-weight: 900;
    background-color: whitesmoke;
    margin: 0%;
    padding: 0%;
  }

  #container-input-name {
    display: flex;
    flex-direction: column;
    margin-left: 5vh;
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
    width: 10vh;
    height: 5vh;
    border-style: none;
    border-radius: 4px;
    font-weight: 750;
    background-color: #333;
    /* margin: 1rem 0; */
    font-size: medium;
    color: whitesmoke;
    margin-right: 10vh;
    margin-bottom: auto;
    justify-items: flex-start;
  }

  .section-link {
    grid-area: 2 / 1 / span 1 / span 1;
  }

  .section-restart {
    display: flex;
    justify-content: center;
  }

  .restart-button {
    width: 20vh;
    height: 5vh;
    border-style: none;
    border-radius: 4px;
    font-weight: 750;
    background-color: #333;
    /* margin: 1rem 0; */
    font-size: medium;
    color: whitesmoke;
    margin-right: 10vh;
    margin-bottom: auto;
    justify-items: flex-start;
  }

  .quiz-summary {
    width: 100%;
    margin-left: 5vh;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-content: center;
    align-self: center;
  }
  ul {
    list-style: none;
    padding: 0px;
  }
  li {
    background-color: whitesmoke;
  }
  .correct {
    color: green;
    font-weight: bold;
  }
  .incorrect {
    color: red;
    font-weight: bold;
  }

  @media screen and (min-width: 1080px) {
    .quiz-summary {
      margin-left: 10vh;
    }
    #container-input-name {
      margin-left: 70vh;
    }
    #save-button {
      width: 20vh;
    }
  }
</style>
