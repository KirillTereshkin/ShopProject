import firebase from "firebase/app";

export default {
  state: {
    isLoaded: false,
    products: [],
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        let products = (
          await firebase
            .database()
            .ref(`/products`)
            .once("value")
        ).val();

        products = Object.entries(products).map(([key, value]) => {
          value.id = key;
          return value;
        }).reverse();

        commit("setProducts", products);
      } catch (e) {
        throw e;
      }
    },

    async deleteProduct({ commit }, productId) {
      try {
        await firebase
          .database()
          .ref("/products")
          .child(productId)
          .remove();
        commit("deleteProductById", productId);
      } catch (e) {
        throw e;
      }
    },
    async updateProduct({ commit }, product) {
      try {
        await firebase
          .database()
          .ref("/products")
          .child(product.id)
          .update(product.productInfo);
        commit("updateProduct", { ...product.productInfo, id: product.id });
      } catch (e) {
        throw e;
      }
    },
    async addProduct({ commit }, product) {
      try {
        const id = (
          await firebase
            .database()
            .ref("/products")
            .push(product.productInfo)
        ).key;
        commit("pushProduct", { ...product.productInfo, id });
      } catch (e) {
        throw e;
      }
    },
  },
  mutations: {
    pushProduct(state, product) {
      state.products.unshift(product);
    },
    updateProduct(state, product) {
      const productIndex = state.products.findIndex(
        (item) => item.id === product.id
      );
      state.products[productIndex] = product;
    },
    setProducts(state, products) {
      state.products = products;
      state.isLoaded = true;
    },
    deleteProductById(state, id) {
      const products = state.products.filter((item) => item.id !== id);
      state.products = [...products];
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
