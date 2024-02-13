import joi from "joi";
import { IProduct } from "./../types/ProductTypes";

export const productSchema = joi.object<IProduct>({
  name: joi.string().required().label("Digite um nome válido"),
  description: joi.string().required().label("Digite uma descricao válido"),
  price: joi.string().required().label("Digite um preco válido"),
  categoryId: joi.string().required().label("Selecione uma categoria válida"),
  brandId: joi.string().required().label("Selecione uma marca válida"),
  image: joi.string().required().label("Digite uma imagem válido"),
});
