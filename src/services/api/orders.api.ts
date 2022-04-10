import firebase, { FirebaseApp } from "firebase/app";

import {
  getDatabase,
  ref,
  child,
  get,
  remove,
  update,
  push,
  DatabaseReference,
} from "firebase/database";
import { ApiEndpoints } from "@/services/model/Api";
import { Order, OrderRepsonse } from "@/services/model/Orders";
import { Product } from "../model/Products";
import { BaseApi } from "./base.api";

class OrdersApi extends BaseApi {
  static fetchOrders = async (): Promise<OrderRepsonse | null> => {
    const snapshot = await get(child(this.getDbRef, ApiEndpoints.orders));

    return snapshot.exists() ? snapshot.val() : null;
  };

  static deleteOrder = async (orederId: string) => {
    remove(child(this.getDbRef, `${ApiEndpoints.orders}/${orederId}`));
  };

  static updateOrder = async (orederId: string, order: Order) => {
    const orderObj = {
      [`${ApiEndpoints.orders}/${orederId}`]: order,
    };

    update(this.getDbRef, orderObj);
  };

  static addOrder = async (orderData: Partial<Order>, proudcts: Product[]) =>
    push(child(this.getDbRef, ApiEndpoints.orders), {
      ...orderData,
      proudcts,
    }).key;
}

export default OrdersApi;
