import { defineStore } from 'pinia';

export const useSomeStore = defineStore('someStore', {
  state: () => ({ message: 'default message' }),
  getters: {
    getMessage: (state) => state.message
  },
  actions: {
    updateMessage(payload: string) {
      this.message = payload;
    }
  }
});
