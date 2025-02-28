<template>
  <article class="article-resulttable" >
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
    <input
      class="restart-button"
      type="button"
      @click="restartQuiz"
      value="Starta om quiz"
    />
  </section>
</article>
</template>
<script>
export default {
  data() {
    return {
      resultData: JSON.parse(localStorage.getItem('savedResult')),
    };
  },

  methods: {
    restartQuiz() {
      this.$router.push('/question');
    },
  },
};
</script>

<style scoped>

.article-resulttable{
  width: 100%;
  height: 80vh;
  margin: 15px auto;
  height:100vh;
  margin-bottom: auto;
}

.section-resulttable {
  border-radius: 5px;
  max-height: 88%;
  width: 90%;
  overflow: scroll; /* hidden eller scroll?  */
  margin: 0 auto 15px;
  box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}

.table-resulttable {
  background-color: whitesmoke;
  padding: 10px;
  table-layout: auto;
  width: 100%;
  border-collapse: collapse;
}

th,td {
  text-align: center;
  padding: 5px 0;
}

th {
  position: sticky;
  top: 0;
  width: 33%;
  background-color: whitesmoke;
}


.section-restart{
  display: flex;
  justify-content: center;
}

.restart-button{
  width: 100px;
  height: 40px;
  border-radius: 4px;
}
</style>
