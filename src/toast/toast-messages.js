const messages = {
  "auth/weak-password": "Пароль должен содержать минимум 6 символов",
  "auth/user-not-found": "Пользователь не найден",
  successRegister: "Регистрация прошла успешно",
  successLogin: "Вход осуществлен успешно",
  successLogout: "Выход осуществлен успешно",
  successAdd: "Товар успешно добавлен",
  successEdit: "Товар успешно отредактирован",
  successDelete: "Товар успешно удален",
  successAsk: "Вопрос отправлен",
  successOrderUpdate: "Заказ успешно обновлен",
  successOrderDelete: "Заказ успешно удален",
  successOrderAccomplish: "Заказ успешно выполнен",
  orderNotExist: "Товар не найден",
};

export default function(code) {
  return messages[code] || "Упс, что-то пошло не так...";
}
