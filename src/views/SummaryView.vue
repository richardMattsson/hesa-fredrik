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
      <form id="container-form" action="">
        <p id="quiz-result">
          {{ quizStore.score }} rätta svar av
          {{ quizStore.currentQuestionIndex + 1 }}
        </p>
        <label id="container-input-name" v-if="currentUser == null">
          Vill du spara ditt resultat?
          <input
            id="input-name"
            v-model="playerName"
            type="text"
            placeholder="Namn"
          />
        </label>
        <p v-else>Vill du spara ditt resultat {{ currentUser.username }}?</p>
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
    background-color: #ffda00;
    display: grid;
    grid-template-rows: auto auto auto auto auto;
    grid-template-columns: 1fr;
    height: 100vh;
    overflow: auto;
    justify-items: center;
  }

  .section-form {
    grid-row: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #container-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #quiz-result {
    grid-row: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    background-color: whitesmoke;
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
    grid-row: 4;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  #save-button,
  .restart-button {
    width: 15vh;
    height: 5vh;
    border-style: none;
    border-radius: 4px;
    font-weight: 750;
    background-color: #333;
    font-size: medium;
    color: whitesmoke;
    cursor: pointer;
  }

  #save-button {
    width: 10vh;
    height: 5vh;
    border-style: none;
    border-radius: 4px;
    font-weight: 750;
    background-color: #333;
    font-size: medium;
    color: whitesmoke;
    margin-left: 10vh;
    margin-bottom: auto;
    justify-items: flex-start;
  }

  .restart-button {
    width: 20vh;
    height: 5vh;
    border-style: none;
    border-radius: 4px;
    font-weight: 750;
    background-color: #333;
    font-size: medium;
    color: whitesmoke;
    margin-right: 10vh;
    margin-bottom: auto;
    justify-items: flex-start;
  }

  .section-link {
    grid-area: 2 / 1 / span 1 / span 1;
  }

  .quiz-summary {
    grid-row: 2;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
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
