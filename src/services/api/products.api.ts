import {
  getDatabase,
  ref,
  child,
  get,
  remove,
  update,
  push,
} from "firebase/database";
import { ApiEndpoints } from "@/services/model/Api";
import { Product, ProductResponse } from "@/services/model/Products";
import { BaseApi } from "./base.api";

class ProductsApi extends BaseApi {
  static fetchProducts = async (): Promise<ProductResponse | null> => {
    const snapshot = await get(child(this.getDbRef, ApiEndpoints.products));

    return snapshot.exists() ? snapshot.val() : null;
  };

  static deleteProduct = async (productId: string) => {
    remove(child(this.getDbRef, `${ApiEndpoints.products}/${productId}`));
  };

  static updateProduct = async (productId: string, product: Product) => {
    const productObj = {
      [`${ApiEndpoints.products}/${productId}`]: product,
    };

    update(this.getDbRef, productObj);
  };

  static addProduct = async (product: Product) =>
    push(child(this.getDbRef, ApiEndpoints.products), product).key;
}

export default ProductsApi;
