<template>
  <!-- Frågan -->
  <article class="container-questions">
    <template v-if="index < results.length">
      <section class="section-question">
        <p id="question">{{ results[index].question }}</p>
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
<script>
import axios from 'axios'
export default {
created(){
  axios.get('/quizData.json')
  .then((response) => {
  console.log(response.data.results)
  // console.log(this.results)
    this.results = response.data.results
    console.log(this.results)
  })
  .catch(function (error){
    console.log(error)
  }
)
.finally(function (){

}
);
},



  data() {
    return {
      index: 0,
      answer: null,
      points: 0,
      results: [

      ],
    };
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
        this.$router.push('/result');
      }
    },
  },
};
</script>
