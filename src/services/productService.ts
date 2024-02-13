import fs from "fs";
import * as categoryRepository from "../repositories/categoryRepository";
import * as productRepository from "../repositories/productRepository";
import { notFoundError, unprocessableEntity } from "../utils/errorUtils";
import { TypeProductData } from "./../types/ProductTypes";

export async function createProduct(data: TypeProductData) {
  const categoryExists = await categoryRepository.findCategoryById(
    data.categoryId
  );
  if (!categoryExists) throw unprocessableEntity("Category not exists");

  await productRepository.insert(data);
}

export async function getAllProducts() {
  return await productRepository.findAllProducts();
}

export async function deleteProduct(id: string) {
  const result = await productRepository.findProduct(id);

  if (result === null) throw notFoundError("Product not exist!");

  if (result !== null) {
    try {
      fs.unlinkSync("./src/public/uploads/images/" + result.image);
    } catch (error) {
      console.log(error);
    }
  }

  await productRepository.deleteProduct(id);
}

export async function updateProduct(id: string, data: TypeProductData) {
  const categoryExists = await categoryRepository.findCategoryById(
    data.categoryId
  );
  if (!categoryExists) throw unprocessableEntity("Category not exists");


  const product = await productRepository.findProduct(id);
  if (product === null) throw notFoundError("Product not exist!");

  if (product !== null) {
    try {
      fs.unlinkSync("./src/public/uploads/images/" + product.image);
    } catch (error) {
      console.log(error);
    }
  }

  await productRepository.updateProduct(id, data);
}