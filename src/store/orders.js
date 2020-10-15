import firebase from "firebase/app";

export default {
  state: {
    orders: null,
    isLoaded: false,
  },
  actions: {
    async fetchOrders({ commit }) {
      try {
        const orders = (
          await firebase
            .database()
            .ref(`/orders`)
            .once("value")
        ).val();
        commit("setOrders", orders);
      } catch (e) {
        console.error(e);
      }
    },
  },
  mutations: {
    setOrders(state, orders) {
      state.orders = orders;
    },
    setOrderDoneStatus(state, orderInfo) {
      if (state.orders) {
        state.orders[orderInfo.id].orders[orderInfo.index].isDone =
          orderInfo.status;
      }
    },
  },
  getters: {
    getOrders(state) {
      return state.orders;
    },
  },
};
