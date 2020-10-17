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
  orders: {
    name: "Заказы",
    path: "/orders"
  },
  login: {
    name: "Вход в систему",
    path: "/login"
  },
  myOrders: {
    name: "Мои заказы",
    path: "/my-orders"
  },
  register: {
    name: "Регистрация",
    path: "/register"
  }
};
