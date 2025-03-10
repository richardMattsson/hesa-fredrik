<script>
  import { useQuizStore } from '../stores/quizStore';
  import { useAuthStore } from '../stores/useAuthStore';
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';

  export default {
    setup() {
      const quizStore = useQuizStore();
      const authStore = useAuthStore();
      const playerName = ref('');
      const currentUser = computed(() => authStore.currentUser);
      const router = useRouter();

      const onSave = () => {
        const finalPlayer = currentUser.value
          ? currentUser.value.username
          : playerName.value;
        let existingResults =
          JSON.parse(localStorage.getItem('savedResult')) || [];
        existingResults.push({ player: finalPlayer, result: quizStore.score });
        existingResults.sort((a, b) => b.result - a.result);
        localStorage.setItem('savedResult', JSON.stringify(existingResults));
        console.log('Updated saved results:', existingResults);
        router.push('/scoretable');
      };

      const restartQuiz = () => {
        quizStore.resetQuiz();
        router.push('/question');
      };

      return {
        quizStore,
        playerName,
        currentUser,
        onSave,
        restartQuiz,
        randomizedQuestions: computed(() => quizStore.questions)
      };
    }
  };
</script>

<template>
  <article class="container-result">
    <h1>Sammanställning av resultat</h1>
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
    <section class="section-form">
      <form id="registration-form">
        <p id="quiz-result">
          {{ quizStore.score }} rätta svar av
          {{ quizStore.currentQuestionIndex + 1 }}
        </p>
        <label id="container-input-name" for="input-name" v-if="currentUser == null">Vill du spara ditt resultat?</label>
          <input v-if="!currentUser"
            id="input-name"
            v-model="playerName"
            type="text"
            placeholder="Namn"
          />
        <p v-if="currentUser">Vill du spara ditt resultat {{ currentUser.username }}?</p>
      </form>
      <section class="button-container">
        <input id="save-button" type="button" value="Spara" @click="onSave" />
        <input
          class="restart-button"
          type="button"
          value="Starta om quiz"
          @click="restartQuiz"
        />
      </section>
    </section>
  </article>
</template>

<style scoped>
  .container-result {
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
    overflow: auto;
    justify-items: center;
  }

  .section-form {
    grid-row: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: whitesmoke;
    padding: 1rem;
    margin-top: 1rem;
    width: 80%;
    border-radius: 4px;
    max-width: 800px;
  }

  #registration-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
  grid-row: 1;
  width: 100%;
  margin: 0;
  padding: 20px 0;
  text-align: center;
  font-size: large;
  background-color: whitesmoke;
  color: black;
}

  #quiz-result {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    padding: 10px;
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

  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  #save-button,
  .restart-button {
  height: 40px;
  width: 100px;
  border-radius: 4px;
  border-style: none;
  background-color: #333;
  color: whitesmoke;
  font-weight: 750;
  font-size: small;
  margin-top: 1rem;
  cursor: pointer;
  }

  .quiz-summary {
    grid-row: 3;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    width: 90%;
    max-width: 800px;
    padding: 10px;
    margin: 10px auto;
    background-color: whitesmoke;
    border-radius: 4px;
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
