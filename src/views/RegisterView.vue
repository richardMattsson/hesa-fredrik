<template>
  <article class="container-result">
    <section class="section-form">
      <form id="container-form" action="">
        <p id="quiz-result">
          {{ quizStore.points }} rätta svar av {{ quizStore.numberOfQuestions }}
        </p>

        <!-- Display the list of questions, user answers, and correct answers -->
        <section id="results-summary">
          <h3>Dina svar:</h3>
          <ul>
            <li v-for="(result, index) in quizStore.results" :key="index">
              <p><strong>Fråga {{ index + 1 }}:</strong> {{ result.question }}</p>
              <p>
                <strong>Ditt svar:</strong> {{ result.userAnswer }}
                <span v-if="result.userAnswer === result.correctAnswer" class="correct-feedback">✔️ Rätt!</span>
                <span v-else class="incorrect-feedback">❌ Fel. Rätt svar: {{ result.correctAnswer }}</span>
              </p>
            </li>
          </ul>
        </section>

        <label id="container-input-name" for="">
          Vill du spara ditt resultat?
          <input
            id="input-name"
            v-model="quizStore.playerName"
            type="text"
            placeholder="Namn"
          />
        </label>

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

<script>
import { useQuizStore } from '../stores/quizStore';

export default {
  setup() {
    const quizStore = useQuizStore();
    return { quizStore };
  },
  methods: {
    onSave() {
      this.quizStore.saveResult();
      this.$router.push('/scoretable');
    },
    restartQuiz() {
      this.quizStore.resetQuiz();
      this.$router.push('/question');
    },
  },
};
</script>

<style scoped>
.container-result {
  background-color: #ffda00;
  display: grid;
  gap: 5px;
  padding: 5px;
  grid: auto auto / auto auto auto;
  height: 100vh;
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

.section-restart {
  display: flex;
  justify-content: center;
}

.restart-button {
  width: 100px;
  height: 40px;
  border-radius: 4px;
}

#results-summary {
  grid-area: 3 / 1 / span 1 / span 3;
  margin-top: 20px;
}

#results-summary ul {
  list-style-type: none;
  padding: 0;
}

#results-summary li {
  margin-bottom: 20px;
}

.correct-feedback {
  color: green;
}

.incorrect-feedback {
  color: red;
}
</style>
