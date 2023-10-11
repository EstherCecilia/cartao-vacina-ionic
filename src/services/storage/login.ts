import { UserProps } from "../api/login/types";

const NAME_ITEM = "user-authenticated";

export const getUserStorage = () => {
  return window.localStorage.getItem(NAME_ITEM);
};

export const setItemUserStorage = (user: UserProps) => {
  return window.localStorage.setItem(NAME_ITEM, JSON.stringify(user));
};

export const clearUserStorage = () => {
  return window.localStorage.removeItem(NAME_ITEM);
};
