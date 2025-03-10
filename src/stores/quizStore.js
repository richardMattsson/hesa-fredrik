import { defineStore } from 'pinia';

export const useQuizStore = defineStore('quizStore', {
  state: () => ({
    questions: [],
    currentQuestionIndex: 0,
    score: 0
  }),
  actions: {
    updateScore(score, total) {
      this.score = score;
      console.log(`Final Score: ${score}/${total}`);
    },

    async fetchQuestions() {
      try {
        const response = await fetch('quizData.json');
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          let shuffledQuestions = [...data.results];

          for (let i = shuffledQuestions.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = shuffledQuestions[i];
            shuffledQuestions[i] = shuffledQuestions[j];
            shuffledQuestions[j] = temp;
          }

          this.questions = shuffledQuestions.slice(0, 7);
        }
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    },

    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
      }
    },
    resetQuiz() {
      this.currentQuestionIndex = 0;
      this.score = 0;
      this.fetchQuestions();
    }
  }
});
