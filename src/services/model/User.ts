export interface UserInfo {
  email?: string;
  isAdmin?: boolean;
  name?: string;
  orders: string[];
  phoneNumber?: string;
  surname?: string;
}

export type UsersResponse = Record<string, UserInfo>;
