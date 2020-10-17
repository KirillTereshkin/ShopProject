import firebase from "firebase/app";

export default {
  state: {
    cartProducts: [],
  },
  actions: {
    async makeCartProductsOrder({ dispatch, commit, state }, orderData) {
      try {
        const response = await firebase
          .database()
          .ref(`/orders`)
          .push({
            ...orderData,
            date: new Date().toDateString(),
            orders: state.cartProducts,
          });
        commit("addOrderId", response.key);
        await dispatch("updateUserInfo");
        commit("clearCartProducts");
      } catch (e) {
        console.log(e)
        throw e;
      }
    },
  },
  mutations: {
    setCartProducts(state, cartProduct) {
      if (Array.isArray(cartProduct))
        state.cartProducts = [...state.cartProducts, ...cartProduct];
      else state.cartProducts = [...state.cartProducts, cartProduct];
    },
    setCartProductsCount(state, { productIndex, productCount }) {
      state.cartProducts[productIndex].count = productCount;
    },
    deleteCartProduct(state, index) {
      state.cartProducts.splice(index, 1);
    },
    clearCartProducts(state) {
      state.cartProducts = [];
    },
  },
  getters: {
    getCartProducts(state) {
      return state.cartProducts;
    },
    getItemById(state, getters) {
      return state.cartProducts;
    },
    getCartProductsTotalSum(state) {
      const priceWithSale = state.cartProducts.reduce(
        (prevVal, item) => prevVal + item.price * item.count,
        0
      );
      const priceWithoutSale = state.cartProducts.reduce(
        (prevVal, item) =>
          prevVal + (item.salePrice ? item.salePrice : item.price) * item.count,
        0
      );
      return { priceWithSale, priceWithoutSale };
    },
  },
};
