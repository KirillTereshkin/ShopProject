<template>
  <footer class="site-footer custom-border-top">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-6 mb-4 mb-lg-0">
          <div class="block-7">
            <h3 class="footer-heading mb-4">О нас</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              quae reiciendis distinctio voluptates sed dolorum excepturi iure
              eaque, aut unde.
            </p>
          </div>
          <div class="block-7">
            <label for="email_subscribe" class="footer-heading"
              >Подписаться на новости</label
            >
            <div class="form-group">
              <input
                type="text"
                class="form-control py-4"
                id="email_subscribe"
                placeholder="Email"
                v-model="email"
              />
              <button
                id="btn_subscribe"
                class="btn btn-sm btn-primary"
                :disabled="!isEmailValid"
                @click="subscribe"
              >
                Отправить
              </button>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-6">
          <div class="block-5 mb-5">
            <h3 class="footer-heading mb-4">Контактная информация</h3>
            <ul class="list-unstyled">
              <li class="address">
                <a
                  style="color: #207dff"
                  target="_blank"
                  href="https://www.google.com/maps/place/%D0%94%D0%BE%D0%BC%D0%B8%D0%BD%D0%BE/@55.0090657,36.4669591,17z/data=!3m1!4b1!4m5!3m4!1s0x46cad51c278b187d:0x8c515f8eaf7215bc!8m2!3d55.0090626!4d36.4691478"
                  >ул. Гагарина, 2А., тц. Домино, Второй этаж, г. Малоярославец,
                  Калужская обл., Россия, 249096
                </a>
              </li>
              <li class="phone">
                <a href="tel://89105175964">+7 (910) 517 59 64</a>
              </li>
              <li class="email">visavismaloyaroslavets@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import validateEmail from "@/filters/email.validation";

export default {
  name: "SiteFooter",
  data: () => ({
    email: "",
  }),
  computed: {
    isEmailValid() {
      return validateEmail(this.email);
    },
  },
  methods: {
    async subscribe() {
      await this.$store.dispatch("subscribe", this.email);
      this.email = "";
    },
  },
};
</script>
<style scoped>
#btn_subscribe {
  width: 100px;
}
#email_subscribe {
  padding-right: 120px;
}
</style>