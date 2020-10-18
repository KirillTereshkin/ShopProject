<template>
  <div
    class="order"
    :class="{ order_ready: isDone, order_accomplished: isAccomplished }"
  >
    <h1>
      Заказ №({{ id }}) -
      <span
        :class="[{ accomplished: isAccomplished }, { ready: isDone }, 'status']"
        >{{
          isAccomplished
            ? "Закрыт"
            : isDone
            ? "Готов к выдаче"
            : "Не готов к выдаче"
        }}</span
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

    <div class="order__personal-info" v-if="orderInfo.additionalInfo">
      <h5>
        <span class="text-black"> Дополнительная информация:</span>
        {{ orderInfo.additionalInfo }}
      </h5>
    </div>

    <OrdersTable :orders="orderInfo.orders" :id="id" :isEditable="isEditable"/>

    <div class="buttons-container" v-if="isEditable">
      <button
        class="delete-button buy-now btn btn-sm height-auto px-4 py-3"
        @click="deleteOrder"
      >
        <span class="material-icons"> delete </span> Удалить заказ
      </button>

      <div class="buttons-container__left">
        <button
          class="close-button buy-now btn btn-sm height-auto px-4 py-3 btn-primary"
          @click="accomplishOrder"
          :disabled="isAccomplished"
        >
          <span class="material-icons"> shopping_bag </span>Закрыть заказ
        </button>

        <button
          class="save-button buy-now btn btn-sm height-auto px-4 py-3 btn-primary"
          :disabled="!updateEnable"
          @click="updateOrderInfo"
        >
          <span class="material-icons"> refresh </span> Обновить данные о заказе
        </button>
      </div>
    </div>
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
    isEditable: {
      type: Boolean,
      default: true,
    },
  },
  components: { OrdersTable },
  data: () => ({
    updateEnable: false,
  }),
  computed: {
    isDone() {
      this.updateEnable = true;
      return this.orderInfo.orders.reduce(
        (prevVal, item) => prevVal && item.isDone,
        true
      );
    },
    isAccomplished() {
      return this.orderInfo.isAccomplished;
    },
    orderInfo(){
      return this.$store.getters.getOrderById(this.id);
    }
  },
  methods: {
    async updateOrderInfo() {
      try {
        await this.$store.dispatch("updateOrderInfoById", this.id);
        this.updateEnable = false;
      } catch (e) {
        console.error(e);
      }
    },
    async deleteOrder() {
      try {
        await this.$store.dispatch("deleteOrderById", this.id);
      } catch (e) {
        console.error(e);
      }
    },
    async accomplishOrder() {
      try {
        await this.$store.dispatch("accomplishOrderById", this.id);
      } catch (e) {
        console.error(e);
      }
    },
  },
  mounted() {
    this.updateEnable = false;
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
  &_accomplished {
    border: 3px solid #9e9e9e;
  }
}
.status {
  color: #ee6e73;
}
.ready {
  color: #26a69a;
}
.accomplished {
  color: #9e9e9e;
}
.delete-button,
.save-button,
.close-button {
  display: flex;
  align-items: center;
  span {
    margin-right: 5px;
  }
}
.save-button {
  margin-left: 15px;
}
.buttons-container {
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  &__left {
    display: flex;
  }
}
</style>