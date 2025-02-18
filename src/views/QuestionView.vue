<template>
  {{ $route.params.number }}
  <!-- <input type="radio" v-model="counter" name="" id="1" :value="false" />Fråga 1
  <input type="radio" v-model="counter" name="" id="2" :value="true" />Fråga 2
  <input type="radio" v-model="counter" name="" id="3" :value="false" />Fråga 3
  <input type="radio" v-model="counter" name="" id="4" :value="false" />Fråga 4 -->
  <h1>{{ results[index].question }}</h1>

  <label v-for="answerAlternative in results[index].answerAlternatives">
    <input v-model="answer" type="radio" :value="answerAlternative" />
    {{ answerAlternative }}
  </label>
  <input type="button" @click="onClick" value="Nästa" :disabled="!answer" />
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

      if (this.index > 4) {
        this.$router.push('/result');
      }

      this.answer = null;
      this.index++;
    },
  },
};
</script>
