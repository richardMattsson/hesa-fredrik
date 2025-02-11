<template>
  {{ $route.params.questionNumber }}
  <!-- <input type="radio" v-model="counter" name="" id="1" :value="false" />Fråga 1
  <input type="radio" v-model="counter" name="" id="2" :value="true" />Fråga 2
  <input type="radio" v-model="counter" name="" id="3" :value="false" />Fråga 3
  <input type="radio" v-model="counter" name="" id="4" :value="false" />Fråga 4 -->

  <label v-for="question in questions" :for="question">
    {{ question.question }}
    <input v-model="answer" type="radio" :value="question"
  /></label>
  <input type="button" @click="onClick" value="Skicka" />
</template>
<script>
export default {
  data() {
    return {
      counter: 0,
      answer: null,
      questions: [
        { question: 'Svarsalternativ 1', answer: true },
        { question: 'Svarsalternativ 2', answer: false },
        { question: 'Svarsalternativ 3', answer: false },
        { question: 'Svarsalternativ 4', answer: false },
      ],
    };
  },
  methods: {
    onClick() {
      this.counter++;
      console.log(this.answer.answer);
    },
  },
};
</script>
