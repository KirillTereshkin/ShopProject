<template>
  <footer class="site-footer custom-border-top">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-6 mb-4 mb-lg-0">
          <div class="block-7">
            <h3 class="footer-heading mb-4">О нас</h3>
            <p>Мы самые лучшие, прекрасные и восхитительные</p>
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
                <a style="color: #207dff" target="_blank" :href="storeAddress"
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

<script setup lang="ts">
import { ref, computed } from "vue";
import validateEmail from "@/services/helpers/filters/email.validation";
import { storeAddress } from "@/services/constants/utility";

const email = ref("");

const isEmailValid = computed(() => validateEmail(email.value));

const subscribe = () => {
  // await this.$store.dispatch("subscribe", this.email);
  email.value = "";
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
