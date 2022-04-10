import { defineStore } from "pinia";
import UtilityApi from "../api/utility.api";

type UtilityState = {
  questions: string[];
  subscribers: string[];
};

const initialState: UtilityState = {
  questions: [],
  subscribers: [],
};

const useUtilityStore = defineStore("utilityStore", {
  state: () => ({ ...initialState }),

  actions: {
    async fetchSubscribers() {
      try {
        const subscribers = await UtilityApi.fetchSubscribers();
        this.subscribers.push(subscribers);
      } catch (e) {}
    },

    async fetchQuestions() {
      try {
        const questions = await UtilityApi.fetchQuestions();
        this.questions.push(questions);
      } catch (e) {
        console.error(e);
      }
    },

    async subscribe(email: string) {
      try {
        await UtilityApi.subscribe(email);
        this.subscribers.push(email);
      } catch (e) {
        console.error(e);
      }
    },

    async askQuestion(question: string) {
      try {
        await UtilityApi.askQuestion(question);
        this.questions.push(question);
      } catch (e) {
        console.error(e);
      }
    },
  },
});

export default useUtilityStore;
