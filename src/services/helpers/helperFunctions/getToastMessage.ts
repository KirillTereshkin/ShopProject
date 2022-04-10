import { toastsMessages } from "../../constants";

export const getToastMessage = (code: keyof typeof toastsMessages) =>
  toastsMessages[code] || toastsMessages.default;
