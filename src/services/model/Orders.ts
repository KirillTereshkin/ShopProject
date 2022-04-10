export interface Order {
  additionalInfo: string;
  date: Date;
  email: string;
  firstName: string;
  isAccomplished: boolean;
  orders: string[];
  phoneNumber: string;
  secondName: string;
  withdrawDate: Date;
}

export type OrderRepsonse = Record<string, Order>;
