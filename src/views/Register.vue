<template>
  <div class="site-section">
    <div class="container">
      <LoginNavbar />
      <form class="form" @submit.prevent="register">
        <div class="form__login">
          <h4 class="text-black">Email<span class="text-danger">*</span>:</h4>
          <input type="email" placeholder="Введите email" v-model="email" />
        </div>

        <div class="form__password">
          <h4 class="text-black">Пароль<span class="text-danger">*</span>:</h4>
          <input
            type="password"
            placeholder="Введите пароль"
            v-model="password"
          />
        </div>
        <div class="form__password">
          <h4 class="text-black">Повторите пароль<span class="text-danger">*</span>:</h4>
          <input
            type="password"
            placeholder="Введите пароль"
            v-model="passwordRepat"
          />
        </div>
        <hr />
        <div class="form__password">
          <h6 class="text-black">Имя</h6>
          <input type="text" placeholder="Введите пароль" v-model="name" />
        </div>

        <div class="form__password">
          <h6 class="text-black">Фамилия:</h6>
          <input
            type="text"
            placeholder="Введите пароль"
            v-model="surname"
          />
        </div>

        <div class="form__password">
          <h6 class="text-black">
            Номер телефона:
          </h6>
          <input
            type="text"
            placeholder="Введите пароль"
            v-model="phoneNumber"
          />
        </div>

        <button
          type="submit"
          class="send-button buy-now btn btn-sm height-auto px-4 btn-primary"
          :disabled="!isFormValid"
        >
          Зарегестрироваться<span class="material-icons"> send </span>
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import validateEmail from "@/filters/email.validation";
import LoginNavbar from "@/components/LoginNavbar";

export default {
  name: "register",
  data: () => ({
    email: "",
    password: "",
    passwordRepat: "",
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
        this.passwordRepat.length>6 &&
        this.password === this.passwordRepat
      );
    },
  },
  methods: {
    async register() {
      if (this.password === this.passwordRepat) {
        await this.$store.dispatch("register", {
          email: this.email,
          password: this.password,
          name: this.name,
          surname: this.surname,
          phoneNumber: this.phoneNumber
        });
        this.$router.push("/");
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