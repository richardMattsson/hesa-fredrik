<template>
  <section class="section-resulttable">
    <table class="table-resulttable">
      <thead>
        <tr>
          <th>Spelare</th>
          <th>Resultat</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="results in resultData">
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
.section-resulttable {
  background-color: whitesmoke;
  padding: 10px;
  width: 95%;
  border-radius: 5px;
}

.table-resulttable {
  table-layout: auto;
  width: 100%; 
  border-collapse: collapse;
  border: 1px solid black;
}

th,td {
  text-align: center;
  padding: 5px 0;
}

.restart-button{
  width: 100px;
  height: 40px;
  border-radius: 4px;
}
</style>
