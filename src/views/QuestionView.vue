<template>
  <!-- Frågan -->
  <article class="container-questions">
    <template v-if="index < results.length">
      <section class="section-question">
        <p id="question">{{ results[index].question }}</p>
      </section>
      <section class="section-answer-options">
        <label v-for="answerAlternative in results[index].answerAlternatives">
          <input v-model="answer" type="radio" :value="answerAlternative" />
          {{ answerAlternative }}
        </label>
      </section>
      <section class="section-answer-button">
        <input
          id="answer-button"
          type="button"
          @click="onClick"
          value="Nästa"
          :disabled="!answer"
        />
      </section>
    </template>
  </article>
</template>
<script>
export default {
  data() {
    return {
      index: 0,
      answer: null,
      points: 0,
      results: [
        {
          question:
            'Hur många liter vatten behöver du för att klara dig en vecka?',
          correctAnswer: '5-6 liter',
          answerAlternatives: [
            '1-2 liter',
            '2-3 liter',
            '3-4 liter',
            '5-6 liter',
          ],
        },
        {
          question: 'Vad är bra att ha hemma om elen slutar fungerar?',
          correctAnswer: 'Varma filtar',
          answerAlternatives: ['Vatten', 'Varma filtar', 'Ljus', 'Ficklampa'],
        },
        {
          question:
            'När det blir ett elavbrott på vintern, hur lång tid tar det i genomsnitt för ett hus att bli utkylt?',
          correctAnswer: 'Tre dagar',
          answerAlternatives: ['En dag', 'Tre dagar', 'En vecka'],
        },
        {
          question:
            'Vårt vatten kan förorenas eller vid elavbrott sluta rinna ur kranen. Därför är det bra att ha fyllda reservdunkar hemma. Hur mycket vatten behöver en vuxen person till dryck, matlagning och hygien per dag?',
          correctAnswer: 'Tre liter',
          answerAlternatives: ['En halvliter', 'En liter', 'Tre liter'],
        },
      ],
    };
  },
  methods: {
    onClick() {
      if (this.answer === this.results[this.index].correctAnswer) {
        this.points++;
        console.log(
          `Rätt svar på fråga ${this.index + 1}. Total poäng: ${this.points}`
        );
      } else {
        console.log(
          `Fel svar på fråga ${this.index + 1}. Total poäng: ${this.points}`
        );
      }
      this.answer = null;
      this.index++;

      if (this.index > 3) {
        localStorage.setItem('points', JSON.stringify(this.points));
        localStorage.setItem(
          'numberOfQuestions',
          JSON.stringify(this.results.length)
        );
        this.$router.push('/result');
      }
    },
  },
};
</script>
