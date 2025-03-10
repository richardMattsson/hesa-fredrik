<template>
  <article class="article-resulttable">
    
      <h1>Ledartavla</h1>
    
    <section class="section-resulttable">
      <table class="table-resulttable">
        <thead>
          <tr>
            <th>Rankning</th>
            <th>Spelare</th>
            <th>Resultat</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(results, index) in resultData" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ results.player }}</td>
            <td>{{ results.result }}</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section class="section-restart">
      <input class="restart-button" type="button" @click="restartQuiz" value="Starta om quiz" />
    </section>
  </article>
</template>
<script>
import { useQuizStore } from '../stores/quizStore';

export default {
  data() {
    return {
      resultData: JSON.parse(localStorage.getItem('savedResult')) || [],
      quizStore: useQuizStore()
    };
  },

  methods: {
    restartQuiz() {
      this.quizStore.resetQuiz();
      this.$router.push('/question');
    }
  }
};
</script>

<style scoped>

h1 {
  width: 100%;
  margin-top: 0;
  margin-bottom: 20px;
  padding: 20px 0;
  text-align: center;
  font-size: large;
  background-color: whitesmoke;
  color: black;
}


.article-resulttable {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
}

.section-resulttable {
  width: 90%;
  min-height: 70%;
  max-height: 70%;
  margin: 0 auto 15px;
  border-radius: 5px;
  overflow: scroll;
  background-color: whitesmoke;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.table-resulttable {
  border-collapse: collapse;
  width: 100%;
  padding: 10px;
}

th,
td {
  text-align: center;
  padding: 5px 0;
}

th {
  position: sticky;
  top: 0;
  width: 33%;
  background-color: whitesmoke;
  border-bottom: 1px solid #333;
}

.section-restart {
  display: flex;
  justify-content: center;
}

.restart-button {
  height: 40px;
  border-radius: 4px;
  border-style: none;
  background-color: #333;
  color: whitesmoke;
  font-weight: 750;
  font-size: small;
  margin-top: 1rem;
}



</style>
