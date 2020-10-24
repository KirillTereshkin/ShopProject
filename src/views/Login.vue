<template>
  <div class="site-section">
    <div class="container">
      <div class="row">
        <LoginNavbar />
        <div class="col-md-12">
          <form @submit.prevent="logIn">
            <div class="p-3 p-lg-5 border">
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
                  <div class="col-md-6"></div>
                  <label for="c_password" class="text-black"
                    >Пароль <span class="text-danger">*</span></label
                  >
                  <input
                    type="password"
                    class="form-control"
                    id="c_password"
                    name="c_password"
                    v-model="password"
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
      </div>
    </div>
  </div>
</template>
<script>
import validateEmail from "@/filters/email.validation";
import LoginNavbar from "@/components/LoginNavbar";
import getToastMessage from "@/toast/toast-messages";

export default {
  name: "login",
  data: () => ({
    email: "",
    password: "",
  }),
  components: { LoginNavbar },
  computed: {
    isFormValid() {
      return validateEmail(this.email) && this.password.length;
    },
  },
  methods: {
    async logIn() {
      try {
        await this.$store.dispatch("logIn", {
          email: this.email,
          password: this.password,
        });
        this.$toasted.success(getToastMessage("successLogin"));
        this.$router.push("/my-orders");
      } catch (e) {
        this.$toasted.error(getToastMessage(e.code));
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.form {
  width: 50%;

  &__login,
  &__password {
    input {
      width: 100%;
    }
  }

  &__password {
    margin-top: 20px;
  }
}
.send-button {
  margin-top: 20px;
  display: flex;
  align-items: center;

  span {
    margin-left: 15px;
  }
}
</style>
