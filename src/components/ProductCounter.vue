<template>
  <div class="mb-5 product-counter">
    <div class="input-group mb-3" style="max-width: 120px">
      <div class="input-group-prepend">
        <button
          class="btn btn-outline-primary js-btn-minus"
          type="button"
          @click="value > 1 && changeValue(value - 1)"
        >
          &minus;
        </button>
      </div>
      <input
        type="text"
        class="form-control text-center"
        :value="value"
        @input="changeValue($event.target.value)"
        placeholder=""
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
      />
      <div class="input-group-append">
        <button
          class="btn btn-outline-primary js-btn-plus"
          type="button"
          @click="changeValue(value + 1)"
        >
          &plus;
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "product-counter",
  props: {
    value: {
      type: Number,
    },
  },
  methods: {
    changeValue(val) {
      this.$emit("input", val);
    },
  },
};
</script>