<script>
  import axios from 'axios';
  import QuestionComp from '../components/QuestionComp.vue';
  export default {
    components: {
      QuestionComp
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
            // sparar undan frågan som ska blandas i en temporär varibel "temp"
            let temp = this.results[i];
            // frågan som ska blandas får en ny plats i arrayen.
            this.results[i] = this.results[j];
            // tar den slumpade frågan i variabeln j och låter den byta platsmed temp.
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
        results: []
      };
    }
  };
</script>
<template>
  <!-- Frågan -->
  <QuestionComp :results="results" />
</template>

<style scoped>
  .container-questions {
    height: 100vh;
    margin-bottom: auto;
  }
</style>
