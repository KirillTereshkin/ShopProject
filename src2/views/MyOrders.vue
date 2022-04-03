<template>
  <div class="site-section">
    <div class="container">
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
      <Loader v-if="!orders" />
      <h3
        v-else-if="orders.length===0"
        class="text-black"
        style="margin-top: 20px"
      >
        Заказы пока отсутствуют,
        <router-link to="/collection">перейти в коллекцию</router-link>
      </h3>
      <h3
        v-else-if="!filteredProducts.length"
        class="text-black"
        style="margin-top: 20px"
      >
        Заказы, удволетворяющие фильтрам отсутствуют
      </h3>
      <div v-else>
        <OrderItem
          v-for="item in filteredProducts"
          :key="item[0]"
          :id="item[0]"
          :isEditable="false"
        />
      </div>
    </div>
  </div>
</template>
<script>
import OrderItem from "@/components/Orders/OrderItem";
import Loader from "@/components/Loader";

export default {
  name: "my-orders",
  data: () => ({
    orderData: "",
    hideReady: false,
    hideAccomplished: false,
    orders: null,
  }),
  components: { OrderItem, Loader },
  computed: {
    filteredProducts() {
      return Object.entries(this.orders).filter((item) => {
        let isAppropriate = false;
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
  async mounted() {
    this.orders = await this.$store.dispatch("fetchOrdersById");
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