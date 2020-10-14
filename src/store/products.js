export default {
  state: {
    products: [
      {
        id: 1,
        title: "Ботинок",
        price: 1500,
        type: "man",
        isSale: false,
        collection: "Зимняя коллекция",
        previewImage: "images/product_1.jpg",
        sizes: ["XL", "XXL"],
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, obcaecati!"
      },
      {
        id: 2,
        title: "Сумка",
        price: 7500,
        type: "women",
        isSale: false,
        collection: "Зимняя коллекция",
        previewImage: "images/product_2.jpg",
        sizes: ["XS", "S", "XL", "XXL"],
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, obcaecati!"
      },
      {
        id: 3,
        title: "Ремень",
        price: 2500,
        type: "children",
        isSale: true,
        salePrice: 4000,
        collection: "Всесезон",
        previewImage: "images/product_3.jpg",
        sizes: ["XS", "L", "XL", "XXL"],
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, obcaecati!"
      },
      {
        id: 4,
        title: "Ботинок",
        price: 1500,
        type: "women",
        isSale: false,
        collection: "Зимняя коллекция",
        previewImage: "images/product_1.jpg",
        sizes: ["XS", "S", "M"],
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, obcaecati!"
      },
      {
        id: 5,
        title: "Сумка",
        price: 7500,
        isSale: false,
        type: "children",
        collection: "Зимняя коллекция",
        previewImage: "images/product_2.jpg",
        sizes: ["XXL"],
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, obcaecati!"
      },
      {
        id: 6,
        title: "Ремень",
        price: 2500,
        isSale: true,
        type: "man",
        salePrice: 3000,
        collection: "Всесезон",
        previewImage: "images/product_3.jpg",
        sizes: ["XS", "XXL"],
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, obcaecati!"
      },
    ],
  },
  getters: {
    getRandomProducts: ({ products }) => (n) => {
      return [...products].sort(() => 0.5 - Math.random()).slice(0, n);
    },
    getProducts({ products }) {
      return products;
    },
    getProductById: ({ products }) => (id) => {
      return products.find((item) => item.id === Number(id));
    },
  },
};
