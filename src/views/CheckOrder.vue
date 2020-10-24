<template>
  <div class="site-section">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-md-8">
          <h5 class="mb-3 text-black">Отследить заказ</h5>
          <form @submit.prevent="checkOrder">
            <div class="p-3 p-lg-5 border">
              <div class="form-group row">
                <div class="col-md-12">
                  <label for="c_code" class="text-black"
                    >Код заказа <span class="text-danger">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="c_code"
                    name="c_code"
                    v-model.trim="code"
                  />
                  <div class="col-md-6"></div>
                  <label for="c_email" class="text-black"
                    >Email <span class="text-danger">*</span></label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="c_email"
                    name="c_email"
                    v-model.trim="email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class="col-lg-12">
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg btn-block"
                    :disabled="!isFormValid"
                  >
                    Войти
                  </button>
                </div>
              </div>
            </div>
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
  </div>
</template>
<script>
import validateEmail from "@/filters/email.validation";
import Loader from "@/components/Loader";
import OrderItem from "@/components/Orders/OrderItem";
import getToastMessage from "@/toast/toast-messages";

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
        this.$toasted.error(getToastMessage(e.code || e.message));
        this.isError = true;
      }
      this.isLoading = false;
      this.code = "";
      this.email = "";
    },
  },
};
</script>
