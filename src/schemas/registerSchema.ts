import joi from "joi";
import { IUser } from "../types/UserTypes";

export const registerSchema = joi.object<IUser>({
  name: joi.string().required().label("Digite um nome válido"),
  email: joi.string().email().required().label("Digite um email válido"),
  password: joi.string().min(5).required().label("Digite uma senha válida"),
});