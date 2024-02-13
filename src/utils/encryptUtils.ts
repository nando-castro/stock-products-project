import bcrypt from "bcrypt";

export const hashPassword = (password: string) => {
  const NUM_CRYPT = Number(process.env.NUM_CRYPT);
  const result = bcrypt.hashSync(password, NUM_CRYPT);
  return result;
};

export const comparePassword = (password: string, passwordCompare: string) => {
  const result = bcrypt.compare(password, passwordCompare);
  return result;
};