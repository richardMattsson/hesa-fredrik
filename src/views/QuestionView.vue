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
        console.log(response.data.results);
        // console.log(this.results)
        this.results = response.data.results;
        console.log(this.results);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () { });
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
