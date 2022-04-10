import { defineStore } from "pinia";
import { UserInfo } from "@/services/model/User";
import AdminApi from "../api/admin.api";

type AdminState = {
  userInfo: UserInfo | null;
};

const initialState: AdminState = {
  userInfo: null,
};

const useAdminStore = defineStore("adminSore", {
  state: () => ({ ...initialState }),

  actions: {
    async updateUserInfo() {
      if (!this.userInfo) return;
      try {
        await AdminApi.updateUserInfo(this.userInfo);
      } catch (e) {
        console.error(e);
      }
    },

    async signIn(email: string, password: string) {
      try {
        await AdminApi.signIn(email, password);
        const userInfo = await AdminApi.getUserInfo();

        if (!userInfo) {
          throw Error();
        }

        this.userInfo = userInfo;
      } catch (e) {
        // throw e;
      }
    },

    async register(
      email: string,
      password: string,
      name?: string,
      surname?: string,
      phoneNumber?: string
    ) {
      try {
        await AdminApi.register(email, password);

        const userInfo: UserInfo = {
          email,
          name,
          surname,
          phoneNumber,
          orders: [],
          isAdmin: false,
        };

        await AdminApi.updateUserInfo(userInfo);

        this.userInfo = userInfo;
      } catch (e) {
        throw e;
      }
    },

    async signOut() {
      try {
        await AdminApi.signOut();
        this.userInfo = null;
      } catch {
        // throw e;
      }
    },
  },
});

export default useAdminStore;

//   mutations: {
//     addOrderId(state, id) {
//       if (state.userInfo.orders)
//         state.userInfo.orders = [...state.userInfo.orders, id];
//       else state.userInfo.orders = [id];
//     },
//   },
