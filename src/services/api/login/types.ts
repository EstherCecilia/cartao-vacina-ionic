export type UserProps = {
  id: string;
  email: string;
  user: string;
  cpf: string;
};

export type PostLogin = (cpf: string, password: string) => Promise<UserProps>;
