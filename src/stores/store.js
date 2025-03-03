import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  actions: {
    increment() {
      if (this.value < 4) {
        this.value++;
      }
    }
  },
  //
  state: () => ({ color: ['🫣', '😳', '😲', '🤗', '🤩'], value: 0 })
});
