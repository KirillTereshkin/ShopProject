import { defineStore } from "pinia";
import OrdersApi from "@/services/api/orders.api";
import { Order, OrderRepsonse } from "@/services/model/Orders";

type OrdersState = {
  orders: OrderRepsonse | null;
};

const initialState: OrdersState = {
  orders: null,
};

const useOrdersStore = defineStore("ordersStore", {
  state: () => ({ ...initialState }),

  actions: {
    async fetchOrders() {
      try {
        const orders = await OrdersApi.fetchOrders();
        this.orders = orders;
      } catch (e) {}
    },

    async deleteOrderById(orderId: string) {
      try {
        await OrdersApi.deleteOrder(orderId);
        delete this.orders?.[orderId];
      } catch (e) {}
    },

    async updateOrder(id: string, order: Order) {
      if (!this.orders) {
        return;
      }

      try {
        await OrdersApi.updateOrder(id, order);
        this.orders[id] = order;
      } catch (e) {}
    },
  },
});

export default useOrdersStore;
