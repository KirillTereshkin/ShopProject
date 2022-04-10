const currencyFilter = (value: number, currency: string = "RUB") =>
  new Intl.NumberFormat("ru-Ru", {
    style: "currency",
    currency,
  }).format(value);

export default currencyFilter;
