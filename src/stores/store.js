import { defineStore } from 'pinia';

export const useTutorialProgressStore = defineStore('tutorialProgress', {
  actions: {
    increment() {
      if (this.value < 4) {
        this.value++;
      }
    }
  },
  //
  state: () => ({ reaction: ['🫣', '😳', '😲', '🤗', '🤩'], value: 0 })
});
