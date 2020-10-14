import firebase from "firebase/app";

export default {
  state: {
    isLoaded: false,
    products: [],
  },
  actions: {
    async fetchProducts({commit}) {
      let products = (
        await firebase
          .database()
          .ref(`/products`)
          .once("value")
      ).val();

      products = Object.entries(products).map(([key, value]) => {
        value.id=key;
        return value;
      });

      commit("setProducts", products);
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
      state.isLoaded = true;
    },
  },
  getters: {
    getRandomProducts: ({ products }) => (n) => {
      return [...products].sort(() => 0.5 - Math.random()).slice(0, n);
    },
    getProducts({ products }) {
      return products;
    },
    getProductById: ({ products }) => (id) => {
      return products.find((item) => item.id === id);
    },
    getLoadingStatus({ isLoaded }) {
      return isLoaded;
    },
  },
};
