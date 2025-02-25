<script>
import axios from 'axios';
import QuestionComp from '../components/QuestionComp.vue';
export default {
  components: {
    QuestionComp,
  },
  created() {
    axios
      .get('/quizData.json')
      .then((response) => {
        // console.log(response.data.results);
        // console.log(this.results)
        this.results = response.data.results;
        for (let i = this.results.length - 1; i > 0; i--) {
          // skapar ett slumpat indextal som jag sparar undan i variabeln j
          let j = Math.floor(Math.random() * (i + 1));
          // sparar undan kortet som ska blandas temporärt i en varibel temp
          let temp = this.results[i];
          // ändrar kortet till det slumpade indexet i variabeln j
          this.results[i] = this.results[j];
          // tar det slumpade kortet i variabeln j och låter det få det bytta kortets plats.
          this.results[j] = temp;
        }
        // console.log(this.results);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  },

  data() {
    return {
      results: [],
    };
  },
};
</script>
<template>
  <!-- Frågan -->
  <QuestionComp :results="this.results" />
</template>
