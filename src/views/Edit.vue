<template>
  <div class="site-section">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="form-container">
            <div class="name-input">
              <h6 class="text-black">
                Введите ссылку на изображение товара:<span class="text-danger"
                  >*</span
                >
              </h6>
              <input v-model="previewImage" placeholder="Ссылка" />
            </div>
          </div>

          <div v-if="previewImage" class="border preview-image">
            <img :src="previewImage" alt="Image" class="img-fluid" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-container">
            <div class="name-input">
              <h2 class="text-black">
                Наименование:<span class="text-danger">*</span>
              </h2>
              <input
                v-model="title"
                placeholder="Введите наименование товара"
              />
            </div>
          </div>

          <div class="form-container">
            <div class="description-input">
              <h4 class="text-black">
                Описание <span class="text-danger">*</span>
              </h4>
              <textarea
                v-model="description"
                placeholder="Введите описание товара"
              />
            </div>
          </div>

          <div class="form-container">
            <div class="price-form">
              <div class="price-input">
                <h6 class="text-black">
                  Введите цену (₽):<span class="text-danger">*</span>
                </h6>
                <input v-model.number="price" type="number" />
              </div>

              <div class="is-price-sale">
                <input id="isSaled" type="checkbox" v-model="isSale" />
                <label for="isSaled" class="text-black">Товар по скидке?</label>
              </div>

              <div class="price-input" v-if="isSale">
                <h6 class="text-black">Введите цену без учета скидки (₽):</h6>
                <input v-model.number="salePrice" type="number" />
              </div>
            </div>
          </div>

          <div class="form-container">
            <div class="size-input">
              <h6 class="text-black">
                Доступные размеры:<span class="text-danger">*</span>
                <strong>{{ chosenSizes }}</strong>
              </h6>
              <select
                multiple
                class="form-control"
                id="exampleFormControlSelect2"
                v-model="sizes"
              >
                <option
                  v-for="size in availiableSizes"
                  :key="size"
                  :value="size"
                >
                  {{ size }}
                </option>
              </select>
            </div>
          </div>

          <div class="form-container">
            <div class="type-input">
              <h6 class="text-black">
                Выберите тип товара:<span class="text-danger">*</span>
              </h6>
              <select
                class="form-control"
                id="exampleFormControlSelect2"
                v-model="type"
              >
                <option
                  v-for="productType in availiableTypes"
                  :key="productType.value"
                  :value="productType.value"
                >
                  {{ productType.title }}
                </option>
              </select>
            </div>
          </div>

          <div class="form-container">
            <div class="collection-input">
              <h6 class="text-black">
                Выберите коллекцию:<span class="text-danger">*</span>
              </h6>
              <select v-model="collection" class="form-control">
                <option
                  v-for="(col, index) in availiableCollections"
                  :key="index"
                >
                  {{ col }}
                </option>
              </select>
            </div>
          </div>

          <div class="form-container">
            <div class="collection-input">
              <h6 class="text-black">
                Выберите тип товара:<span class="text-danger">*</span>
              </h6>
              <select v-model="productType" class="form-control">
                <option
                  v-for="(type, index) in productTypes"
                  :key="index"
                  :value="type.path"
                >
                  {{ type.name }}
                </option>
              </select>
            </div>
          </div>

          <button
            class="save-button buy-now btn btn-sm height-auto px-4 py-3 btn-primary"
            :disabled="isSaveButtonEnabled"
            @click="saveEditing"
          >
            Сохранить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import getToastMessage from "@/toast/toast-messages";
import { pages } from "@/router/pages";

export default {
  name: "edit-product",
  data: () => ({
    id: null,
    previewImage: "",
    title: "",
    description: "",
    price: 0,
    salePrice: 0,
    isSale: false,
    sizes: [],
    availiableSizes: [42, 44, 46, 48, 50, 52, 54, 56, 58, 60],
    type: "",
    availiableTypes: [
      {
        title: "Женская одежда",
        value: "women",
      },
      {
        title: "Мужская одежда",
        value: "man",
      },
      {
        title: "Детская одежда",
        value: "children",
      },
    ],
    collection: "",
    availiableCollections: [
      "Зимнняя коллекция",
      "Весенняя коллекция",
      "Летняя коллекция",
      "Осенняя коллекция",
      "Всесезон",
    ],
    productTypes: pages.collection.productType,
    productType: "",
  }),
  computed: {
    chosenSizes() {
      return this.sizes.length
        ? this.sizes.sort().join(", ")
        : "размеры не выбраны";
    },
    isSaveButtonEnabled() {
      return !(
        this.previewImage &&
        this.title &&
        this.description &&
        this.price &&
        this.type &&
        this.collection &&
        this.productType &&
        !!this.sizes.length
      );
    },
  },
  methods: {
    async saveEditing() {
      const productInfo = {
        collection: this.collection,
        previewImage: this.previewImage,
        description: this.description,
        price: this.price,
        sizes: this.sizes,
        title: this.title,
        type: this.type,
        productType: this.productType,
      };

      if (this.isSale) {
        productInfo.isSale = this.isSale;
        productInfo.salePrice = this.salePrice;
      }

      if (this.id) {
        try {
          await this.$store.dispatch("updateProduct", {
            id: this.id,
            productInfo,
          });
          this.$toasted.success(getToastMessage("successEdit"));
          this.$router.push("/site-admin");
        } catch (e) {
          this.$toasted.error(getToastMessage(e.code));
        }
      } else {
        try {
          await this.$store.dispatch("addProduct", {
            id: this.id,
            productInfo,
          });
          this.$toasted.success(getToastMessage("successAdd"));
          this.$router.push("/site-admin");
        } catch (e) {
          this.$toasted.error(getToastMessage(e.code));
        }
      }
    },
  },
  mounted() {
    this.id = this.$route.query.id;
    if (this.id) {
      const product = this.$store.getters.getProductById(this.id);
      this.collection = product.collection;
      this.previewImage = product.previewImage;
      this.description = product.description;
      this.isSale = product.isSale;
      this.price = product.price;
      this.salePrice = product.salePrice;
      this.sizes = product.sizes;
      this.title = product.title;
      this.type = product.type;
      this.productType = product.productType;
    }
  },
};
</script>
<style scoped lang="scss">
.name-input {
  display: flex;
  input {
    width: 100%;
    margin-left: 15px;
    padding: 0 5px;
  }
}

.form-container {
  &:not(:first-child) {
    margin-top: 20px;
  }
  padding: 10px;
  border: 1px dashed rgba(0, 0, 0, 0.3) !important;
  border-radius: 5px;
}

.description-input {
  textarea {
    width: 100%;
    min-height: 150px;
    padding: 5px;
  }
}

.price-input {
  display: flex;
  align-items: center;

  h6 {
    margin: 0;
  }

  input {
    margin-left: 15px;
  }
}

.is-price-sale {
  margin-top: 20px;

  label {
    margin-left: 15px;
  }
}

.size-input {
  select {
    width: 25%;
  }
}

.save-button {
  margin-top: 20px;
}

.preview-image {
  margin-top: 20px;
}

.collection-input {
  input {
    width: 100%;
  }
}
</style>
