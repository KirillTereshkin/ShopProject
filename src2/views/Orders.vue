<template>
  <div class="site-section">
    <div class="container">
      <AdminNavbar />

      <div class="filter-form">
        <h3 class="text-black">Найти заказ</h3>
        <div class="filter-form__element">
          <h5>
            Введите в поле имя, фамилию, код заказа или контактную информацию:
          </h5>
          <input
            type="text"
            v-model="orderData"
            placeholder="Введите данные заказы"
          />
        </div>

        <div class="filter-form__element">
          <input
            type="checkbox"
            id="is-ready-hidden"
            v-model="hideReady"
          /><label for="is-ready-hidden">Скрыть готовые заказы</label>
        </div>

        <div class="filter-form__element">
          <input
            type="checkbox"
            id="is-accomplished-hidden"
            v-model="hideAccomplished"
          /><label for="is-accomplished-hidden">Скрыть закрытые заказы</label>
        </div>
      </div>

      <div v-if="orders">
        <OrderItem
          v-for="item in filteredProducts"
          :key="item[0]"
          :id="item[0]"
        />
      </div>
      <Loader v-else/>
    </div>
  </div>
</template>
<script>
import OrderItem from "@/components/Orders/OrderItem";
import AdminNavbar from "@/components/AdminNavbar";
import Loader from "@/components/Loader"

export default {
  name: "orders-page",
  data: () => ({
    orderData: "",
    hideReady: false,
    hideAccomplished: false,
  }),
  computed: {
    orders() {
      return this.$store.getters.getOrders;
    },
    filteredProducts() {
      return Object.entries(this.orders).filter((item) => {
        let isAppropriate = false;

        isAppropriate = isAppropriate || item[0].includes(this.orderData);
        for (let i in item[1])
          if (typeof item[1][i] === "string")
            isAppropriate =
              isAppropriate || item[1][i].includes(this.orderData);

        if (this.hideReady)
          isAppropriate =
            isAppropriate &&
            item[1].orders.reduce(
              (prevVal, item) => prevVal && !item.isDone,
              true
            );

        if (this.hideAccomplished)
          isAppropriate = isAppropriate && item[1].isAccomplished;
        return isAppropriate;
      });
    },
  },
  components: { OrderItem, AdminNavbar, Loader },
  async mounted() {
    await this.$store.dispatch("fetchOrders");
  },
};
</script>
<style lang="scss" scoped>
.filter-form {
  margin-top: 20px;

  &__element {
    margin-top: 10px;

    input[type="text"] {
      width: 50%;
    }

    label {
      margin-left: 10px;
    }
  }
}
</style>