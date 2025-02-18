<template>
  <article class="container-result">
    <section class="section-form">
      <form id="container-form" action="">
        <p id="quiz-result">
          {{ points }} rätta svar av {{ numberOfQuestions }}
        </p>
        <label id="container-input-name" for="">
          Vill du spara ditt resultat?
          <input
            id="input-name"
            v-model="playerName"
            type="text"
            placeholder="Namn"
          />
        </label>
        <section id="section-save-button">
          <input id="save-button" type="button" value="Spara" @click="onSave" />
        </section>
      </form>
    </section>

    <section class="section-link">
      <a href="https://rib.msb.se/filer/pdf/30828.pdf" target="_blank"
        >Broshyren</a
      >
    </section>

    <section class="section-restart">
      <input type="button" @click="restartQuiz" value="Starta om quiz" />
    </section>
  </article>
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
