import { defineStore } from 'pinia';

export const useQuizStore = defineStore('quizStore', {
  state: () => ({
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
  }),
  actions: {
    async fetchQuestions() {
      try {
        const response = await fetch('/quizData.json'); // Fetch
        const data = await response.json();

        // sju random frågor
        this.questions = this.getRandomQuestions(data.results, 7);

      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    },
    getRandomQuestions(allQuestions, num) {
      if (!allQuestions || allQuestions.length === 0) return [];

      const shuffled = allQuestions.sort(() => Math.random() - 0.5); // Shufflar om
      return shuffled.slice(0, num);
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
    },
  },
});
