<template>
  <div class="site-section">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mb-5 mb-md-0">
          <h2 class="h3 mb-3 text-black">Контактная информация</h2>
          <div class="p-3 p-lg-5 border">
            <div class="form-group row">
              <div class="col-md-6">
                <label for="first_name" class="text-black"
                  >Имя <span class="text-danger">*</span></label
                >
                <input
                  type="text"
                  v-model="firstName"
                  class="form-control"
                  id="first_name"
                />
              </div>
              <div class="col-md-6">
                <label for="second_name" class="text-black"
                  >Фамилия <span class="text-danger">*</span></label
                >
                <input
                  type="text"
                  v-model="secondName"
                  class="form-control"
                  id="second_name"
                />
              </div>
            </div>

            <div class="form-group row mb-5">
              <div class="col-md-6">
                <label for="email_phone_info" class="text-black"
                  >Email <span class="text-danger">*</span></label
                >
                <input
                  type="text"
                  v-model="email"
                  class="form-control"
                  id="email_phone_info"
                />
              </div>
              <div class="col-md-6">
                <label for="date_info" class="text-black"
                  >Дата получения <span class="text-danger">*</span></label
                >
                <input
                  type="text"
                  v-model="withdrawDate"
                  class="form-control"
                  id="date_info"
                />
              </div>
            </div>

            <div class="form-group row mb-5">
              <div class="col-md-12">
                <label for="email_phone_info" class="text-black"
                  >Номер телефона
                </label>
                <input
                  type="number"
                  v-model="phoneNumber"
                  class="form-control"
                  id="email_phone_info"
                />
              </div>
            </div>

            <div class="form-group">
              <label for="c_order_notes" class="text-black"
                >Дополнительная информация</label
              >
              <textarea
                name="c_order_notes"
                v-model="additionalInfo"
                id="c_order_notes"
                cols="30"
                rows="5"
                class="form-control"
                placeholder="Дополнительная информация, которой вы хотели бы поделиться..."
              ></textarea>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="row mb-5">
            <div class="col-md-12">
              <h2 class="h3 mb-3 text-black">Детали заказа</h2>
              <div class="p-3 p-lg-5 border">
                <table class="table site-block-order-table mb-5">
                  <thead>
                    <th>Товар</th>
                    <th>Итог</th>
                  </thead>
                  <tbody v-if="cartProducts">
                    <tr v-for="(product, index) in cartProducts" :key="index">
                      <td>
                        {{ product.title }} <strong class="mx-2">x</strong>
                        {{ product.count }}
                      </td>
                      <td>
                        {{ (product.count * product.price) | currencyFilter }}
                      </td>
                    </tr>

                    <tr>
                      <td class="text-black font-weight-bold">
                        <strong>Сумма заказа</strong>
                      </td>
                      <td class="text-black">
                        {{ totalSum.priceWithoutSale | currencyFilter }}
                      </td>
                    </tr>

                    <tr
                      v-if="
                        totalSum.priceWithoutSale !== totalSum.priceWithSale
                      "
                    >
                      <td class="text-black font-weight-bold">
                        <strong>Сумма заказа с учетом скидки</strong>
                      </td>
                      <td class="text-black font-weight-bold">
                        <strong>{{
                          totalSum.priceWithSale | currencyFilter
                        }}</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div class="form-group">
                  <button
                    class="btn btn-primary btn-lg btn-block"
                    @click="makeOrder"
                    :disabled="isFormValid"
                  >
                    Заказать
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import validateEmail from "@/filters/email.validation";

export default {
  name: "checkout",
  data: () => ({
    firstName: "",
    secondName: "",
    email: "",
    phoneNumber: null,
    withdrawDate: "",
    additionalInfo: "",

    cartProducts: null,
    totalSum: null,
  }),
  computed: {
    isFormValid() {
      return !(
        this.firstName.length &&
        this.secondName.length &&
        validateEmail(this.email) &&
        this.withdrawDate.length
      );
    },
  },
  mounted() {
    if (!this.$store.getters.getCartProducts.length) this.$router.push("/");
    this.setUserInfo();

    this.cartProducts = this.$store.getters.getCartProducts;
    this.totalSum = this.$store.getters.getCartProductsTotalSum;
  },
  methods: {
    setUserInfo() {
      const userInfo = this.$store.getters.getUserInfo;
      if (userInfo) {
        this.email = userInfo.email;
        this.firstName = userInfo.name;
        this.secondName = userInfo.surname;
        this.phoneNumber = userInfo.phoneNumber;
      }
    },
    async makeOrder() {
      try {
        await this.$store.dispatch("makeCartProductsOrder", {
          firstName: this.firstName,
          secondName: this.secondName,
          email: this.email,
          phoneNumber: this.phoneNumber,
          withdrawDate: this.withdrawDate,
          additionalInfo: this.additionalInfo,
          isAccomplished: false,
        });
        this.$router.push("/thankyou");
      } catch (e) {
        console.error(
          "Упс, что-то пошло не так, попробуйте перезагрузить страницу и сделать заказ заново..."
        );
      }
    },
  },
};
</script>