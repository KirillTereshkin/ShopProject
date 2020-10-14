<template>
  <div class="col-md-6 mb-5 mb-md-0">
    <h2 class="h3 mb-3 text-black">Контактная информация</h2>
    <div class="p-3 p-lg-5 border">
      <div class="form-group row">
        <div class="col-md-6">
          <label for="first_name" class="text-black">Имя <span class="text-danger">*</span></label>
          <input
            type="text"
            v-model="firstName"
            class="form-control"
            id="first_name"
          />
        </div>
        <div class="col-md-6">
          <label for="second_name" class="text-black">Фамилия <span class="text-danger">*</span></label>
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
            >Email / Номер телефона</label
          >
          <input
            type="text"
            v-model="contactInfo"
            class="form-control"
            id="email_phone_info"
          />
        </div>
        <div class="col-md-6">
          <label for="date_info" class="text-black">Дата получения <span class="text-danger">*</span></label>
          <input
            type="text"
            v-model="withdrawDate"
            class="form-control"
            id="date_info"
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
</template>
<script>
export default {
  name: "billing-info",
  data: () => ({
    firstName: "",
    secondName: "",
    contactInfo: "",
    withdrawDate: "",
    additionalInfo: "",
  }),
};
</script>