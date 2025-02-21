
<template>
<section class="section-resulttable">
      <table>
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
      <input type="button" @click="restartQuiz" value="Starta om quiz" />
    </section>
</template>
<script>
export default{
    data(){
        return{
            resultData: JSON.parse(localStorage.getItem('savedResult'))
        }
    },

    methods: {
        restartQuiz() {
      this.$router.push('/question');
    },
    }
}

</script>
<style>
.section-resulttable {
    background-color: aqua;
}
</style>
