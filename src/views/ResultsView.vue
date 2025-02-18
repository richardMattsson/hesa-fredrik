<template>
  <h1>ResultsView</h1>
  <p>{{ points }} rätta svar av {{ numberOfQuestions }}</p>
  <input type="button" @click="restartQuiz" value="Starta om quiz" />
  <a href="https://rib.msb.se/filer/pdf/30828.pdf" target="_blank">Broshyren</a>
  <form action="">
    <label for="">
      Skriv ditt namn
      <input v-model="playerName" type="text" placeholder="Namn" />
    </label>
    <input type="button" value="Spara" @click="onSave" />
  </form>
</template>
<script>
export default {
  data() {
    return {
      points: JSON.parse(localStorage.getItem('points')),
      numberOfQuestions: JSON.parse(localStorage.getItem('numberOfQuestions')),
      newPlayer: { player: '', result: '' },
      playerName: '',
    };
  },
  created() {
    console.log(Math.floor(Math.random() + 1));
  },
  methods: {
    restartQuiz() {
      this.$router.push('/question');
    },
    onSave() {
      this.newPlayer.player = this.playerName;
      this.newPlayer.result = this.points;
      localStorage.setItem('savedResult', JSON.stringify(this.newPlayer));
      console.log('Ny spelare: ', this.newPlayer);
    },
  },
};
</script>
