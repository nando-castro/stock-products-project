import { User } from "@prisma/client";
import joi from "joi";

export const loginSchema = joi.object<User>({
  email: joi
    .string()
    .email()
    .required()
    .label("Precisa digitar um email válido"),
  password: joi.string().required().label("Digite uma senha válida"),
});