<template>
  <tr>
    <td class="product-thumbnail">
      <router-link :to="`product?id=${order.id}`"
        ><img :src="order.previewImage" alt="Image" class="img-fluid"
      /></router-link>
    </td>
    <td class="product-name">
      <h2 class="h5 text-black">{{ order.title }}</h2>
    </td>
    <td>{{ order.size }}</td>
    <td>
      {{ order.price | currencyFilter }}
      <br />
      <span style="color: gray" v-if="order.isSale"
        >( Без учета скидки - {{ order.salePrice | currencyFilter }})</span
      >
    </td>
    <td>{{ order.count }}</td>
    <td>{{ (order.price * order.count) | currencyFilter }}</td>
    <td>
      <input type="checkbox" v-model="isDone" @change="setDoneStatus" :disabled="!isEditable"/>
    </td>
  </tr>
</template>
<script>
export default {
  name: "order-tale-line",
  props: {
    order: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
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
  data: () => ({
    isDone: false,
  }),
  mounted() {
    this.isDone = this.order.isDone;
  },
  methods: {
    setDoneStatus() {
      this.$store.commit("setOrderDoneStatus", {
        index: this.index,
        id: this.id,
        status: this.isDone,
      });
    },
  },
};
</script>