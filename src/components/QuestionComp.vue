<!-- Main component for section-question and content -->
<script>
export default {
  props: {
    results: { type: Array },
    index: { type: Number },
    // question: { type: String },
  },
  data(){
    return {
      answer: null,
      points: 0,
      index: 0,
    }
  },
  methods: {
    onClick() {
      if (this.answer === this.results[this.index].correctAnswer) {
        this.points++;
        console.log(
          `Rätt svar på fråga ${this.index + 1}. Total poäng: ${this.points}`
        );
      } else {
        console.log(
          `Fel svar på fråga ${this.index + 1}. Total poäng: ${this.points}`
        );
      }
      this.answer = null;
      this.index++;

      // This will dictate the amount of questions - deciding later
      if (this.index > 6) {
        localStorage.setItem('points', JSON.stringify(this.points));
        localStorage.setItem(
          'numberOfQuestions',
          JSON.stringify(this.results.length)
        );
        this.$router.push('/register');
      }
    },
  },
};
</script>
<template>
<!---->
  <article class="container-questions">
    <template v-if="index < results.length">
      <section class="section-question">
    <p id="question">{{ results[index].question }}</p>
    <!-- <p>{{ question }}</p> -->
  </section>
      <section class="section-answer-options">
        <label v-for="answerAlternative in results[index].answerAlternatives">
          <input v-model="answer" type="radio" :value="answerAlternative" />
          {{ answerAlternative }}
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
<style>
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
}

.section-question,
.section-answer-options,
.section-answer-button {
  border: 3px solid black;
}

.section-answer-options {
  grid-area: 2 / 1 / span 1 / span 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 250px;
  font-size: 1.2rem;
  padding: 10px;
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
</style>
