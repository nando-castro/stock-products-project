import joi from "joi";
import { ICategory } from "./../types/CategoryTypes";

export const categorySchema = joi.object<ICategory>({
  name: joi.string().required().label("Digite um nome válido"),
});