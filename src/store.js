import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  actions: {
    increment() {
      this.value++;
    }
  },
  state: () => ({ color: ['blue', 'yellow', 'green', 'purple'], value: 0 })
});
