<template>
  <div class="site-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <span class="icon-check_circle display-3 text-success"></span>
          <h2 class="display-3 text-black">Спасибо!</h2>
          <h3 class="text-black">
            Заказ №(<b class="text-primary">{{ orderId }}</b
            >) успешно создан.
          </h3>
          <p class="lead mb-5">
            Мы начали обрабатывать ваш заказ. Когда он будет готов, мы с вами
            свяжемся.
            <br />
            <br />
            За ходом выполнения заказа можете следить через
            <router-link to="/my-orders">личный кабинет</router-link>, если Вы
            зарегестрированы, либо на странице
            <router-link to="/check-order">отслеживания заказа</router-link>,
            для этого используйте номер заказа.
          </p>
          <p>
            <router-link
              to="/collection"
              class="btn btn-sm height-auto px-4 py-3 btn-primary"
              >Продолжить покупки</router-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "thank-you",
  data: () => ({
    orderId: null,
  }),
  mounted() {
    if (!this.$route.query.orderId) this.$router.push("/");
    this.orderId = this.$route.query.orderId;
  },
};
</script>