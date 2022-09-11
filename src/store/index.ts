import { defineStore } from "pinia";

export const userStore = defineStore("user", {
  state: () => {
    return {
      count: 0,
      age: 18,
      name: "Pinia测试",
      text: "牛逼666",
    };
  },
  getters: {
    double: (state) => state.count * 2,
    nameClick: (state) => (state.name = "Pinia测试通过"),
  },
  actions: {
    increment() {
      this.age++;
    },
    ageChang() {
      this.name = 'Pinia测试通过'
    },
  },
});
