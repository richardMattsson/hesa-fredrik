import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  actions: {
    increment(amount) {
      this.value += amount;
    }
  },
  state: () => ({ value: 0 })
});
