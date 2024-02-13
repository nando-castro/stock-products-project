import joi from "joi";
import { IStock } from "./../types/StockTypes";

export const stockSchema = joi.object<IStock>({
    productId: joi.string().required().label("Digite um nome válido"),
    quantity: joi.number().required().label("Digite uma descricao válido"),
});
