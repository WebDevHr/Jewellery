import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        image: "https://via.placeholder.com/400x200",
        title: "Product 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 10,
      },
      {
        id: 2,
        image: "https://via.placeholder.com/400x200",
        title: "Product 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 20,
      },
      {
        id: 3,
        image: "https://via.placeholder.com/400x200",
        title: "Product 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 30,
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
