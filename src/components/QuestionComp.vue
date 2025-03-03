<!-- Main component for section-question and content -->
<script>
  export default {
    props: {
      results: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        answer: null,
        points: 0,
        index: 0,
        showResults: false
      };
    },
    methods: {
      onClick() {
        if (this.answer === this.results[this.index].correctAnswer) {
          this.points++;
        }
        this.showResults = true; // Visar röd/grön efter "nästa"

        setTimeout(() => {
          this.answer = null;
          this.index++;
          this.showResults = false; // Reset för nästa fråga
        }, 2500); // delay innan ny fråga

        if (this.index > 6) {
          localStorage.setItem('points', JSON.stringify(this.points));
          localStorage.setItem('numberOfQuestions', JSON.stringify(this.index));
          this.$router.push('/register');
        }
      }
    }
  };
</script>
<template>
  <article class="container-questions">
    <!-- progress bar -->
    <section class="progress-bar">
      <progress :value="index" :max="7"></progress>
      <p>{{ index }} / 7</p>
    </section>
    <template v-if="index < results.length">
      <section class="section-question">
        <p id="question">{{ results[index].question }}</p>
        <!-- <p>{{ question }}</p> -->
      </section>
      <section class="section-answer-options">
        <!-- Nedan key id är frågan plus svarsalternativet för att få ett unikt id.  -->
        <label
          class="container-answer-options"
          :key="results[index].question + answerAlternative"
          v-for="answerAlternative in results[index].answerAlternatives"
          :class="{
            correct:
              showResults && answerAlternative === results[index].correctAnswer,
            incorrect:
              showResults &&
              answerAlternative !== results[index].correctAnswer &&
              answer === answerAlternative
          }"
        >
          <input v-model="answer" type="radio" :value="answerAlternative" />
          {{ answerAlternative }}

          <span v-if="showResults">
            <span
              v-if="answerAlternative === results[index].correctAnswer"
              class="feedback correct-feedback"
              aria-live="polite"
            >
              ✔️ Correct answer
            </span>
            <span
              v-else-if="answer === answerAlternative"
              class="feedback incorrect-feedback"
              aria-live="polite"
            >
              ❌ Wrong answer
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
    /* min-height: 812px; */
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
  }
  #answer-button:disabled {
    background-color: white;
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
