<template>
  <div class="site-section">
    <div class="container">
      <div class="row">
        <LoginNavbar />
        <div class="col-md-12">
          <form @submit.prevent="register">
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
                  <div class="col-md-6"></div>
                  <label for="c_repeat-password" class="text-black"
                    >Повторите пароль <span class="text-danger">*</span></label
                  >
                  <input
                    type="password"
                    class="form-control"
                    id="c_repeat-password"
                    name="c_repeat-password"
                    v-model="passwordRepeat"
                  />
                </div>
              </div>

              <hr />

              <div class="form-group row">
                <div class="col-md-12">
                  <label for="c_name" class="text-secondary">Имя</label>
                  <input
                    type="text"
                    class="form-control"
                    id="c_name"
                    name="c_name"
                    v-model="name"
                  />
                  <div class="col-md-6"></div>
                  <label for="c_surname" class="text-secondary">Фамилия</label>
                  <input
                    type="text"
                    class="form-control"
                    id="c_surname"
                    name="c_surname"
                    v-model="surname"
                  />
                  <div class="col-md-6"></div>
                  <label for="c_telephone" class="text-secondary"
                    >Номер телефона</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="c_telephone"
                    name="c_telephone"
                    v-model="phoneNumber"
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
                    Зарегестрироваться
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
  name: "register",
  data: () => ({
    email: "",
    password: "",
    passwordRepeat: "",
    name: "",
    surname: "",
    phoneNumber: "",
  }),
  components: { LoginNavbar },
  computed: {
    isFormValid() {
      return (
        validateEmail(this.email) &&
        this.password.length &&
        this.password === this.passwordRepeat
      );
    },
  },
  methods: {
    async register() {
      try {
        if (this.password === this.passwordRepeat) {
          await this.$store.dispatch("register", {
            email: this.email,
            password: this.password,
            name: this.name,
            surname: this.surname,
            phoneNumber: this.phoneNumber,
          });
          this.$toasted.success(getToastMessage("successRegister"));
          this.$router.push("/");
        }
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
  justify-content: center;
  align-items: center;
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
