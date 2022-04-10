import firebase from "firebase/app";
import { defineStore } from "pinia";
import ProductsApi from "../api/products.api";
import { Product, ProductResponse } from "../model/Products";

type ProductsState = {
  products: ProductResponse | null;
};

const initialState: ProductsState = {
  products: null,
};

const useProductsStore = defineStore("productsStore", {
  state: () => ({ ...initialState }),

  actions: {
    async fetchProducts() {
      try {
        const products = await ProductsApi.fetchProducts();
        this.products = products;
      } catch (e) {
        throw e;
      }
    },

    async deleteProduct(productId: string) {
      try {
        await ProductsApi.deleteProduct(productId);
        delete this.products?.[productId];
      } catch (e) {
        throw e;
      }
    },

    async updateProduct(productId: string, product: Product) {
      if (!this.products) {
        return;
      }

      try {
        await ProductsApi.updateProduct(productId, product);
        this.products[productId] = product;
      } catch (e) {
        throw e;
      }
    },

    async addProduct(product: Product) {
      try {
        const id = await ProductsApi.addProduct(product);
        if (!id || !this.products) {
          return;
        }

        this.products[id] = product;
      } catch (e) {
        throw e;
      }
    },
  },

  getters: {
    getProductsArray(state) {
      return state.products ? Object.entries(state.products) : null;
    },

    getRandomProducts() {
      return (n: number) =>
        this.getProductsArray
          ? this.getProductsArray.sort(() => 0.5 - Math.random()).slice(n)
          : null;
    },
  },
});

export default useProductsStore;
