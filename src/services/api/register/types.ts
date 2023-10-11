export type UserRegisterProps = {
  name: string;
  cpf: string;
  password: string;
  date: string;
  phone: string;
  address: string;
};

export type PostRegister = (payload: UserRegisterProps) => Promise<boolean>;
