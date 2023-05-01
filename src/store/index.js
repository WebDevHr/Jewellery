import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 101,
        type: "kolye",
        image: require("@/assets/pictures/kolye/1.jpg"),
        title: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 1000,
      },
      {
        id: 102,
        type: "kolye",
        image: require("@/assets/pictures/kolye/2.jpg"),
        title: "Product 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 1000,
      },
      {
        id: 103,
        type: "kolye",
        image: require("@/assets/pictures/kolye/3.webp"),
        title: "Product 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 1000,
      },
      {
        id: 104,
        type: "kolye",
        image: require("@/assets/pictures/kolye/4.webp"),
        title: "Product 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 1000,
      },
      {
        id: 105,
        type: "kolye",
        image: require("@/assets/pictures/kolye/5.jpg"),
        title: "Product 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 1000,
      },
      {
        id: 106,
        type: "kolye",
        image: require("@/assets/pictures/kolye/6.jpg"),
        title: "Product 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 1000,
      },
      {
        id: 201,
        type: "bileklik",
        image: require("@/assets/pictures/bileklik/1.jpg"),
        title: "Cartier Kelepçe",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 2000,
      },
      {
        id: 202,
        type: "bileklik",
        image: require("@/assets/pictures/bileklik/2.webp"),
        title: "Cartier Kelepçe",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 2000,
      },
      {
        id: 203,
        type: "bileklik",
        image: require("@/assets/pictures/bileklik/3.jpg"),
        title: "Cartier Kelepçe",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 2000,
      },
      {
        id: 204,
        type: "bileklik",
        image: require("@/assets/pictures/bileklik/4.jpg"),
        title: "Cartier Kelepçe",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 2000,
      },
      {
        id: 301,
        type: "yuzuk",
        image: require("@/assets/pictures/yuzuk/1.png"),
        title: "Eklem yüzüğü",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 3000,
      },
      {
        id: 302,
        type: "yuzuk",
        image: require("@/assets/pictures/yuzuk/2.jpg"),
        title: "Eklem yüzüğü",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 3000,
      },
      {
        id: 303,
        type: "yuzuk",
        image: require("@/assets/pictures/yuzuk/3.webp"),
        title: "Eklem yüzüğü",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 3000,
      },
      {
        id: 304,
        type: "yuzuk",
        image: require("@/assets/pictures/yuzuk/4.webp"),
        title: "Minimal Baget Yüzük",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 3000,
      },
      {
        id: 305,
        type: "yuzuk",
        image: require("@/assets/pictures/yuzuk/5.jpg"),
        title: "Baget Yüzük",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 3000,
      },
      {
        id: 306,
        type: "yuzuk",
        image: require("@/assets/pictures/yuzuk/6.jpeg"),
        title: "şövalye eklem yuzugu",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 3000,
      },
      {
        id: 307,
        type: "yuzuk",
        image: require("@/assets/pictures/yuzuk/7.jpg"),
        title: "Baget Yüzük",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 3000,
      },
      {
        id: 308,
        type: "yuzuk",
        image: require("@/assets/pictures/yuzuk/8.jpg"),
        title: "Eklem yüzüğü",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 3000,
      },
      {
        id: 309,
        type: "yuzuk",
        image: require("@/assets/pictures/yuzuk/9.avif"),
        title: "şövalye eklem yüzük",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 3000,
      },
      {
        id: 401,
        type: "kupe",
        image: require("@/assets/pictures/kupe/1.jpeg"),
        title: "Product 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 4000,
      },
      {
        id: 402,
        type: "kupe",
        image: require("@/assets/pictures/kupe/2.webp"),
        title: "Product 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 4000,
      },
      {
        id: 403,
        type: "kupe",
        image: require("@/assets/pictures/kupe/3.webp"),
        title: "Product 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 4000,
      },
      {
        id: 601,
        type: "setler",
        image: require("@/assets/pictures/setler/1.webp"),
        title: "Tiffany Set",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 6000,
      },
    ],
  },
  getters: {
    getIndirim: (state) => {
      return state.products.filter((product) => !(product.id % 2));
    },
    getKolye: (state) => {
      return state.products.filter((product) => product.type == "kolye");
    },
    getBileklik: (state) => {
      return state.products.filter((product) => product.type == "bileklik");
    },
    getYuzuk: (state) => {
      return state.products.filter((product) => product.type == "yuzuk");
    },
    getKupe: (state) => {
      return state.products.filter((product) => product.type == "kupe");
    },
    getHediye: (state) => {
      return state.products.filter((product) => product.type == "hediye");
    },
    getSetler: (state) => {
      return state.products.filter((product) => product.type == "setler");
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
