import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        type: "kolye",
        image: "https://via.placeholder.com/400x200",
        title: "Product 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 10,
      },
      {
        id: 2,
        type: "bileklik",
        image: "https://via.placeholder.com/400x200",
        title: "Product 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 20,
      },
      {
        id: 3,
        type: "yuzuk",
        image: "https://via.placeholder.com/400x200",
        title: "Product 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 30,
      },
      {
        id: 4,
        type: "kupe",
        image: "https://via.placeholder.com/400x200",
        title: "Product 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 40,
      },
      {
        id: 5,
        type: "hediye",
        image: "https://via.placeholder.com/400x200",
        title: "Product 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 50,
      },
      {
        id: 6,
        type: "setler",
        image: "https://via.placeholder.com/400x200",
        title: "Product 6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 60,
      },
    ],
  },
  getters: {
    getProduct: (state) => {
      return state.products.find((product) => product.id === state.id);
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
