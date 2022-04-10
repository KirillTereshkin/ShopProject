<template>
  <div class="row mb-5">
    <form class="col-md-12" method="post">
      <div class="site-blocks-table">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th class="product-thumbnail">Изображение</th>
              <th class="product-name">Товар</th>
              <th class="product-price">Размер</th>
              <th class="product-price">Цена</th>
              <th class="product-quantity">Количество</th>
              <th class="product-total">Итоговая цена</th>
              <th class="product-remove">Готово к выдаче</th>
            </tr>
          </thead>
          <tbody>
            <OrdersTableLine
              v-for="(order, index) in orders"
              :key="index"
              :order="order"
              :index="index"
              :id="id"
              :isEditable="isEditable"
            />
          </tbody>
        </table>
      </div>
    </form>
  </div>
</template>
<script>
import OrdersTableLine from "@/components/Orders/OrdersTableLine";

export default {
  name: "orders-table",
  props: {
    orders: {
      type: Array,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    isEditable: {
      type: Boolean,
      default: true,
    }
  },
  components: { OrdersTableLine },
};
</script>