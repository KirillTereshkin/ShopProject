<template>
  <div class="site-section">
    <div class="container">
      <LoginNavbar />
      <form class="form" @submit.prevent="logIn">
        <div class="form__login">
          <h4 class="text-black">Email<span class="text-danger">*</span>:</h4>
          <input type="text" placeholder="Введите email" v-model="email" />
        </div>

        <div class="form__password">
          <h4 class="text-black">Пароль<span class="text-danger">*</span>:</h4>
          <input
            type="password"
            placeholder="Введите пароль"
            v-model="password"
          />
        </div>

        <button
          type="submit"
          class="send-button buy-now btn btn-sm height-auto px-4 btn-primary"
          :disabled="!isFormValid"
        >
          Войти в систему<span class="material-icons"> send </span>
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import validateEmail from "@/filters/email.validation";
import LoginNavbar from "@/components/LoginNavbar";

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
        this.$router.push("/my-orders");
      } catch (e) {
        console.error(e);
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