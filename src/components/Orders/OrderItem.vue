<template>
  <div class="order" :class="{ order_ready: isDone }">
    <h1>
      Заказ №({{ id }}) -
      <span :class="[{ ready: isDone }, 'status']"
        >{{ isDone ? "Готов" : "Не готов" }} к выдаче</span
      >
    </h1>
    <h3 class="text-black">Информация о заказе:</h3>

    <div class="order__personal-info">
      <h5 class="text-black">
        Имя: <span class="text-primary">{{ orderInfo.firstName }}</span>
      </h5>
      <h5 class="text-black">
        Фамилия: <span class="text-primary">{{ orderInfo.secondName }}</span>
      </h5>
    </div>

    <div class="order__personal-info">
      <h5 class="text-black">
        Email: <span class="text-primary">{{ orderInfo.email }}</span>
      </h5>
      <h5 class="text-black">
        Телефонный номер:
        <span class="text-primary">{{ orderInfo.phoneNumber }}</span>
      </h5>
    </div>

    <div class="order__personal-info">
      <h5 class="text-black">
        Желаемая дата выдачи:
        <span class="text-primary">{{ orderInfo.withdrawDate }}</span>
      </h5>
      <h5 class="text-black">
        Дата совершения заказа:
        <span class="text-primary">{{
          orderInfo.date | dateFilter("date")
        }}</span>
      </h5>
    </div>

    <div class="order__personal-info">
      <h5>
        <span class="text-black"> Дополнительная информация:</span>
        {{ orderInfo.additionalInfo }}
      </h5>
    </div>

    <OrdersTable :orders="orderInfo.orders" :id="id" />

    <button
      class="save-button buy-now btn btn-sm height-auto px-4 py-3 btn-primary"
    >
      Обновить данные о заказе
    </button>
  </div>
</template>
<script>
import OrdersTable from "@/components/Orders/OrdersTable";

export default {
  name: "order-item",
  props: {
    id: {
      type: String,
      required: true,
    },
    orderInfo: {
      type: Object,
      required: true,
    },
  },
  components: { OrdersTable },
  computed: {
    isDone() {
      return this.orderInfo.orders.reduce(
        (prevVal, item) => prevVal && item.isDone,
        true
      );
    },
  },
  mounted() {
    console.log(this.id, this.orderInfo);
  },
};
</script>
<style lang="scss" scoped>
.order {
  margin: 20px 0;
  padding: 10px;
  border: 3px solid #ee6e73;
  border-radius: 15px;

  &__personal-info {
    margin: 15px 0;
    display: flex;

    h5:first-child {
      margin-right: 20px;
    }
  }

  &_ready {
    border: 3px solid #26a69a;
  }
}
.status {
  color: #ee6e73;
}
.ready {
  color: #26a69a;
}
</style>