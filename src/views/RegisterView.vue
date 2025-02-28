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
        points: JSON.parse(localStorage.getItem('points')),
        numberOfQuestions: JSON.parse(
          localStorage.getItem('numberOfQuestions')
        ),
        newPlayer: { player: '', result: '' },
        playerName: '',
        resultData: JSON.parse(localStorage.getItem('savedResult')) || []
      };
    },
    methods: {
      onSave() {
        this.newPlayer.player = this.playerName;
        this.newPlayer.result = this.points;
        this.resultData.push(this.newPlayer);
        this.resultData.sort((a, b) => b.result - a.result);
        this.newPlayer = null;
        localStorage.setItem('savedResult', JSON.stringify(this.resultData));
        console.log('Ny spelare: ', this.resultData);
        this.$router.push('/scoretable');
      },

      restartQuiz() {
        this.$router.push('/question');
      }
    }
  };
</script>
<style scoped>
  .container-result {
    background-color: #ffda00;
    display: grid;
    gap: 5px;
    padding: 5px;
    grid: auto auto / auto auto auto;
    height: 100vh;
  }

  .section-form {
    grid-area: 1 / 1 / span 1 / span 3;
  }

  #container-form {
    display: grid;
    grid: auto auto / auto auto;
    /* border: 3px solid rgb(18, 179, 48); */
  }

  #quiz-result {
    /* border: 3px solid rgb(206, 65, 157); */
    grid-area: 1 / 1 / span 1 / span 2;
  }

  #container-input-name {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    /* border: 3px solid rgb(36, 23, 172); */
    grid-area: 2 / 1 / span 1 / span 1;
  }

  #input-name {
    margin-top: 5px;
    width: 250px;
    height: 80%;
  }

  #section-save-button {
    /* border: 3px solid rgb(179, 17, 17); */
    grid-area: 2 / 2 / span 1 / span 1;
    /* width: 100px;
  height: 50px; */
    display: flex;
    justify-content: center;
    align-items: end;
    padding-left: 10px;
  }
  #save-button {
    width: 80px;
    height: 40px;
    border-radius: 4px;
  }
  .section-link {
    grid-area: 2 / 1 / span 1 / span 1;
  }
  .section-restart {
    display: flex;
    justify-content: center;
  }

  .restart-button {
    width: 100px;
    height: 40px;
    border-radius: 4px;
  }
</style>
