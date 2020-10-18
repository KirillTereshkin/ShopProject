import firebase from "firebase/app";

export default {
  state: { userInfo: null },
  actions: {
    async fetchSubscribers() {
      try {
        const response = (
          await firebase
            .database()
            .ref(`/subscribers`)
            .once("value")
        ).val();
        return response;
      } catch (e) {}
    },
    async fetchQuestions() {
      try {
        const response = (
          await firebase
            .database()
            .ref(`/questions`)
            .once("value")
        ).val();
        return response;
      } catch (e) {
        console.error(e);
      }
    },
    async subscribe(_, email) {
      try {
        await firebase
          .database()
          .ref(`/subscribers`)
          .push(email);
      } catch (e) {
        console.error(e);
      }
    },
    async askQuestion(_, question) {
      try {
        await firebase
          .database()
          .ref(`/questions`)
          .push(question);
      } catch (e) {
        console.error(e);
      }
    },
    async fetchOrdersById({ commit, state }) {
      try {
        const orders = state.userInfo.orders;
        if(!orders) return {};
        const response = (
          await firebase
            .database()
            .ref("/orders")
            .once("value")
        ).val();
        for (let id in response) if (!orders.includes(id)) delete response[id];
        commit("setOrders", response);
        return response;
      } catch (e) {
        console.error(e);
      }
    },
    async logIn({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        const userId = await dispatch("getUserId");
        const info = (
          await firebase
            .database()
            .ref(`users/${userId}/info`)
            .once("value")
        ).val();
        commit("setUserInfo", info);
      } catch (e) {
        throw e;
      }
    },
    async register(
      { dispatch, commit },
      { email, password, name, surname, phoneNumber }
    ) {
      try {
        const userInfo = {
          email,
          name,
          surname,
          phoneNumber,
          orders: [],
          isAdmin: false,
        };
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const userId = await dispatch("getUserId");
        await firebase
          .database()
          .ref(`/users/${userId}/info`)
          .set(userInfo);
        commit("setUserInfo", userInfo);
      } catch (e) {
        console.error(e);
      }
    },
    async updateUserInfo({ dispatch, state }) {
      if (!state.userInfo) return;
      try {
        const userId = await dispatch("getUserId");
        await firebase
          .database()
          .ref(`/users/${userId}/info`)
          .update(state.userInfo);
      } catch (e) {
        console.error(e);
      }
    },
    async logout({ commit }) {
      try {
        await firebase.auth().signOut();
        commit("clearUserInfo");
      } catch (e) {
        throw e;
      }
    },
    getUserId() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },
  },
  mutations: {
    setUserInfo(state, info) {
      state.userInfo = info;
    },
    clearUserInfo(state) {
      state.userInfo = null;
    },
    addOrderId(state, id) {
      if (state.userInfo.orders)
        state.userInfo.orders = [...state.userInfo.orders, id];
      else state.userInfo.orders = [id];
    },
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo;
    },
  },
};
