const dateFilter = (value: Date, format: "date" | "time" = "date") => {
  const options: Intl.DateTimeFormatOptions = {};

  if (format === "date") {
    options.day = "2-digit";
    options.month = "long";
    options.year = "numeric";
  }

  if (format === "time") {
    options.second = "2-digit";
    options.minute = "2-digit";
    options.hour = "2-digit";
  }

  return new Intl.DateTimeFormat("ru-RU", options).format(new Date(value));
};

export default dateFilter;
