export const pages = {
  home: {
    name: "Домашняя страница",
    path: "/",
  },
  collection: {
    name: "Коллекция",
    path: "/collection",
    subsections: [
      {
        name: "Мужская",
        path: "man",
      },
      {
        name: "Женская",
        path: "women",
      },
      {
        name: "Детская",
        path: "children",
      },
    ],
    productType:  [
        {
          type: ["women"],
          name: "Платья",
          path: "dress",
        },
        {
          type: ["women"],
          name: "Юбки",
          path: "skirt",
        },
        {
          type: ["women"],
          name: "Брюки",
          path: "pants",
        },
        {
          type: ["women"],
          name: "Блузы",
          path: "blouse",
        },
        {
          type: ["women"],
          name: "Джемпера",
          path: "cardigan",
        },
        {
          type: ["women"],
          name: "Футболки",
          path: "tshirt",
        },
        {
          type: "general",
          name: "Домашняя одежда",
          path: "hclothes",
        },
        {
          type: "general",
          name: "Другое",
          path: "other",
        },
      ],
  },
  product: {
    name: "Товар",
    path: "/product",
  },
  checkout: {
    name: "Оформление заказа",
    path: "/checkout",
  },
  thankyou: {
    name: "Заказ успешно оформлен",
    path: "/thankyou",
  },
  contacts: {
    name: "Контакты",
    path: "/contacts",
  },
  checkOrder: {
    name: "Отследить заказ",
    path: "/check-order",
  },
  cart: {
    name: "Корзина",
    path: "/cart",
  },
  admin: {
    name: "Администрирование",
    path: "/site-admin",
  },
  productList: {
    name: "Список продуктов",
    path: "/products-list",
  },
  editProduct: {
    name: "Редактирование товара",
    path: "/edit-product",
  },
  questions: {
    name: "Вопросы покупателей",
    path: "/questions",
  },
  subscribers: {
    name: "Подписались на оповещения",
    path: "/subscribers",
  },
  orders: {
    name: "Заказы",
    path: "/orders",
  },
  login: {
    name: "Вход в личный кабинет",
    path: "/login",
  },
  myOrders: {
    name: "Мои заказы",
    path: "/my-orders",
  },
  register: {
    name: "Регистрация",
    path: "/register",
  },
};
