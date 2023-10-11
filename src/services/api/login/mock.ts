import { freeze } from "../../../utils/freeze";
import { setItemUserStorage } from "../../storage/login";
import { PostLogin, UserProps } from "./types";

const user: UserProps = {
  id: "1235647889",
  user: "Usuario fake",
  cpf: "99999999999999",
  email: "email@gmail.com",
};

export const postLogin: PostLogin = async (cpf: string, password: string) => {
  await freeze();

  console.log({ cpf, password });

  setItemUserStorage(user);
  return user;
};
