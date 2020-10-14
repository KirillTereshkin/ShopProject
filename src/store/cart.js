export default {
  state: {
    cartProducts: [],
  },
  mutations: {
    setCartProducts(state, cartProduct) {
      state.cartProducts.push(cartProduct);
    },
    setCartProductsCount(state, { productIndex, productCount }) {
      state.cartProducts[productIndex].count = productCount;
    },
    deleteCartProduct(state, index) {
      state.cartProducts.splice(index, 1);
    },
  },
  getters: {
    getCartProducts(state) {
      return state.cartProducts;
    },
    getItemById(state, getters) {
      console.log(getters);
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
