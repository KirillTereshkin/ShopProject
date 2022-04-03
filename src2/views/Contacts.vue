<template>
  <div class="site-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 class="h3 mb-3 text-black">Связаться с нами</h2>
        </div>
        <div class="col-md-7">
          <form action="#" method="post">
            <div class="p-3 p-lg-5 border">
              <div class="form-group row">
                <div class="col-md-6">
                  <label for="c_fname" class="text-black"
                    >Имя <span class="text-danger">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="c_fname"
                    name="c_fname"
                    v-model="name"
                  />
                  <div class="col-md-6"></div>
                  <label for="c_lname" class="text-black"
                    >Фамилия <span class="text-danger">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="c_lname"
                    name="c_lname"
                    v-model="surname"
                  />
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-12">
                  <label for="c_email" class="text-black"
                    >Email <span class="text-danger">*</span></label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="c_email"
                    name="c_email"
                    v-model="email"
                  />
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-12">
                  <label for="c_subject" class="text-black">Тема </label>
                  <input
                    type="text"
                    class="form-control"
                    id="c_subject"
                    name="c_subject"
                    v-model="theme"
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class="col-md-12">
                  <label for="c_message" class="text-black">Сообщение </label>
                  <textarea
                    name="c_message"
                    id="c_message"
                    cols="30"
                    rows="7"
                    class="form-control"
                    v-model="message"
                  ></textarea>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-lg-12">
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg btn-block"
                    @click.prevent="askQuestion"
                    :disabled="isSendButtonDisabled"
                  >
                    Отправить сообщение
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-5 ml-auto">
          <div class="p-4 border mb-3">
            <span class="d-block text-primary h6 text-uppercase"
              >Малоярославец</span
            >
            <p class="mb-0">ул. Гагарина, 2А., тц. Домино, Второй этаж</p>
            <a
              target="_blank"
              href="https://www.google.com/maps/place/%D0%94%D0%BE%D0%BC%D0%B8%D0%BD%D0%BE/@55.0090626,36.4691478,15z/data=!4m5!3m4!1s0x0:0x8c515f8eaf7215bc!8m2!3d55.0090626!4d36.4691478"
              >посмотреть на карте</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import validateEmail from "@/filters/email.validation";
import getToastMessage from "@/toast/toast-messages";

export default {
  name: "Contacts",
  data: () => ({
    name: "",
    surname: "",
    email: "",
    theme: "",
    message: "",
  }),
  computed: {
    isSendButtonDisabled() {
      return !(
        this.name.length &&
        this.surname.length &&
        validateEmail(this.email)
      );
    },
  },
  mounted() {
    this.setUserInfo();
  },
  methods: {
    setUserInfo() {
      const userInfo = this.$store.getters.getUserInfo;
      if (userInfo) {
        this.email = userInfo.email;
        this.name = userInfo.name;
        this.surname = userInfo.surname;
      }
    },
    async askQuestion() {
      try {
        await this.$store.dispatch("askQuestion", {
          name: this.name,
          surname: this.surname,
          email: this.email,
          theme: this.theme,
          message: this.message,
        });
        this.$toasted.success(getToastMessage("successAsk"));
        this.message = "";
        this.theme = "";
      } catch (e) {
        this.$toasted.error(e.code);
      }
    },
  },
};
</script>
