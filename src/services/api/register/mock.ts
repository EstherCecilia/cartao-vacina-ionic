import { freeze } from "../../../utils/freeze";
import { PostRegister, UserRegisterProps } from "./types";

export const postRegister: PostRegister = async (
  payload: UserRegisterProps
) => {
  await freeze();

  console.log({ payload });

  return true;
};
