<template>
  <article class="container-questions">
    <!-- Progress bar -->
    <section class="progress-bar">
      <progress
        :value="quizStore.currentQuestionIndex"
        :max="results.length"
      ></progress>
      <p>{{ quizStore.currentQuestionIndex + 1 }} / {{ results.length }}</p>
    </section>

    <!-- Display questions and answers -->
    <template
      v-if="
        results.length > 0 && quizStore.currentQuestionIndex < results.length
      "
    >
      <section class="section-question">
        <p id="question">
          {{ results[quizStore.currentQuestionIndex].question }}
        </p>
      </section>

      <section class="section-answer-options">
        <label
          class="container-answer-options"
          v-for="(answerAlternative, i) in results[
            quizStore.currentQuestionIndex
          ].answerAlternatives"
          :key="i"
          :class="{
            correct:
              showResults &&
              answerAlternative ===
                results[quizStore.currentQuestionIndex].correctAnswer,
            incorrect:
              showResults &&
              answerAlternative !==
                results[quizStore.currentQuestionIndex].correctAnswer &&
              answer === answerAlternative
          }"
        >
          <input
            v-model="answer"
            type="radio"
            :value="answerAlternative"
            :disabled="showResults"
          />
          {{ answerAlternative }}

          <!-- Feedback for correct/incorrect answers -->
          <span v-if="showResults">
            <span
              v-if="
                answerAlternative ===
                results[quizStore.currentQuestionIndex].correctAnswer
              "
              class="feedback correct-feedback"
              aria-live="polite"
            >
              ✔️ Rätt svar!
            </span>
            <span
              v-else-if="answer === answerAlternative"
              class="feedback incorrect-feedback"
              aria-live="polite"
            >
              ❌ Fel svar!
            </span>
          </span>
        </label>
      </section>

      <section class="section-answer-button">
        <input
          id="answer-button"
          type="button"
          @click="onClick"
          value="Nästa"
          :disabled="!answer"
        />
      </section>
    </template>
  </article>
</template>

<script>
  import { useQuizStore } from '../stores/quizStore';
  import { onMounted, computed, ref } from 'vue';
  import { useRouter } from 'vue-router';

  export default {
    setup() {
      const quizStore = useQuizStore();
      const answer = ref(null);
      const showResults = ref(false);

      const results = computed(() => quizStore.questions);
      const loading = computed(() => results.value.length === 0);

      onMounted(() => {
        quizStore.fetchQuestions();
      });

      const router = useRouter();

      const onClick = () => {
        console.log('Answer:', answer.value);
        if (
          results.value.length === 0 ||
          quizStore.currentQuestionIndex >= results.value.length
        ) {
          return;
        }

        // sparar svar
        const currentQuestion = results.value[quizStore.currentQuestionIndex];
        currentQuestion.userAnswer = answer.value;
        currentQuestion.correct =
          answer.value === currentQuestion.correctAnswer;

        if (currentQuestion.correct) {
          quizStore.score++;
        }

        showResults.value = true;

        setTimeout(() => {
          showResults.value = false;
          answer.value = null;

          if (quizStore.currentQuestionIndex < results.value.length - 1) {
            quizStore.nextQuestion();
          } else {
            quizStore.updateScore(quizStore.score, results.value.length);
            router.push('/summary');
          }
        }, 2500);
      };

      return {
        quizStore,
        answer,
        showResults,
        results,
        loading,
        onClick
      };
    }
  };
</script>

<style scoped>
  .container-questions {
    background-color: #ffda00;
    display: grid;
    gap: 5px;
    padding: 5px;
    grid: auto auto auto / auto auto auto;
  }

  .section-question {
    grid-area: 1 / 1 / span 1 / span 3;
    font-size: 1.3rem;
    padding: 10px;
    font-weight: 400;
  }
  #question {
    font-size: 1.5rem;
    border-bottom: 1px solid black;
    padding: 10px;
  }

  .section-answer-options {
    grid-area: 2 / 1 / span 1 / span 3;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 1.2rem;
    padding: 10px;
    margin-bottom: 10px;
  }
  .container-answer-options {
    margin-bottom: 10px;
  }
  .section-answer-button {
    grid-area: 3 / 3 / span 1 / span 1;
    display: flex;
    justify-content: center;
    padding: 5px;
  }
  #answer-button {
    width: 120px;
    height: 40px;
    font-size: 1.2rem;
    border-radius: 5px;
    background-color: #333;
    color: whitesmoke;
  }
  #answer-button:disabled {
    background-color: #555;
    border-radius: 5px;
  }
  .correct {
    background-color: lightgreen;
    color: black;
  }

  .incorrect {
    background-color: lightcoral;
    color: black;
  }

  .feedback {
    margin-left: 10px;
    font-weight: bold;
  }

  .correct-feedback {
    color: black;
  }

  .incorrect-feedback {
    color: black;
  }

  .progress-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }

  progress {
    width: 100%;
    height: 10px;
    appearance: none;
    border: none;
    background-color: #ddd;
  }

  progress::-webkit-progress-bar {
    background-color: #ddd;
    border-radius: 5px;
  }

  progress::-webkit-progress-value {
    background-color: #4caf50;
    border-radius: 5px;
  }

  progress::-moz-progress-bar {
    background-color: #4caf50;
    border-radius: 5px;
  }
</style>
