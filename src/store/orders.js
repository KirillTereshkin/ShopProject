import firebase from "firebase/app";

export default {
  state: {
    orders: null,
    isLoaded: false,
  },
  actions: {
    async checkOrder({ commit }, orderInfo) {
      try {
        const response = (
          await firebase
            .database()
            .ref("/orders")
            .child(orderInfo.id)
            .once("value")
        ).val();
        if (!response || (response && response.email !== orderInfo.email))
          throw Error("orderNotExist");
        commit("setOrders", { [orderInfo.id]: response });
        return orderInfo.id;
      } catch (e) {
        throw e;
      }
    },
    async fetchOrders({ commit }) {
      try {
        let orders = (
          await firebase
            .database()
            .ref(`/orders`)
            .once("value")
        ).val();
        if (!orders) orders = {};
        commit("setOrders", orders);
      } catch (e) {
        console.error(e);
      }
    },
    async fetchOrdersById({ commit, getters }) {
      try {
        const orders = getters.getUserInfo ? getters.getUserInfo.orders : [];
        if (!orders) return {};
        let response = (
          await firebase
            .database()
            .ref("/orders")
            .once("value")
        ).val();
        if (!response) response = {};
        for (let id in response) if (!orders.includes(id)) delete response[id];
        commit("setOrders", response);
        return response;
      } catch (e) {
        console.error(e);
      }
    },
    async updateOrderInfoById({ state }, id) {
      try {
        await firebase
          .database()
          .ref("/orders")
          .child(id)
          .update(state.orders[id]);
      } catch (e) {
        console.error(e);
      }
    },
    async accomplishOrderById({ commit, dispatch, state }, id) {
      commit("accomplishOrder", id);
      await dispatch("updateOrderInfoById", id);
    },
    async deleteOrderById({ commit }, id) {
      try {
        await firebase
          .database()
          .ref("/orders")
          .child(id)
          .remove();
        commit("deleteOrderById", id);
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
    accomplishOrder(state, id) {
      if (state.orders) state.orders[id].isAccomplished = true;
    },
    deleteOrderById(state, id) {
      const orders = { ...state.orders };
      delete orders[id];
      state.orders = orders;
    },
  },
  getters: {
    getOrders(state) {
      return state.orders;
    },
    getOrderById: (state) => (id) => {
      return state.orders[id];
    },
  },
};
