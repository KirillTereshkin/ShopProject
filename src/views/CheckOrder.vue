<template>
  <div class="site-section">
    <div class="container">
      <div class="check-form">
        <form @submit.prevent="checkOrder">
          <div class="check-form__code">
            <h4 class="text-black">
              Введите код заказа<span class="text-danger">*</span>:
            </h4>
            <input type="text" placeholder="Код заказа" v-model.trim="code" />
          </div>
          <div class="check-form__email">
            <h4 class="text-black">
              Введите ваш Email<span class="text-danger">*</span>:
            </h4>
            <input type="email" placeholder="Email" v-model.trim="email" />
          </div>
          <button
            class="check-form__submit buy-now btn btn-sm height-auto px-4 py-3 btn-primary"
            type="submit"
            :disabled="!isFormValid"
          >
            Запросить данные о заказе<span class="material-icons"> send </span>
          </button>
        </form>
      </div>
      <div class="order-info">
        <Loader v-if="isLoading" />
        <h4 v-if="isError">
          Заказ с введенными вами данными не найден, попробуйте заново...
        </h4>
        <OrderItem v-if="orderId" :id="orderId" :isEditable="false" />
      </div>
    </div>
  </div>
</template>
<script>
import validateEmail from "@/filters/email.validation";
import Loader from "@/components/Loader";
import OrderItem from "@/components/Orders/OrderItem";

export default {
  name: "check-order",
  data: () => ({
    code: "",
    email: "",
    isLoading: false,
    isError: false,
    orderId: null,
  }),
  components: { Loader, OrderItem },
  computed: {
    isFormValid() {
      return this.code.length && validateEmail(this.email);
    },
  },
  methods: {
    async checkOrder() {
      try {
        this.isLoading = true;
        this.isError = false;
        this.orderId = null;
        this.orderId = await this.$store.dispatch("checkOrder", {
          id: this.code,
          email: this.email,
        });
      } catch (e) {
        this.isError = true;
      }
      this.isLoading = false;
      this.code = "";
      this.email = "";
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.check-form {
  width: 50%;
  margin: 20px 0;
  padding: 10px;

  &__email,
  &__submit {
    margin-top: 25px;
  }

  &__submit {
    display: flex;
    align-items: center;

    span {
      margin-left: 20px;
    }
  }

  &__code,
  &__email {
    input {
      width: 100%;
    }
  }
}
.order-info {
  margin-top: 20px;
}
</style>