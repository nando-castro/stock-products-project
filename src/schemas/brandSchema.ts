import joi from "joi";
import { IBrand } from "./../types/BrandTypes";

export const brandSchema = joi.object<IBrand>({
  name: joi.string().required().label("Digite um nome válido"),
  image: joi.string().label("Digite uma imagem válida"),
});
