import fs from "fs";
import { promisify } from 'util';
import * as categoryRepository from "../repositories/categoryRepository";
import * as productRepository from "../repositories/productRepository";
import { notFoundError, unprocessableEntity } from "../utils/errorUtils";
import { TypeProductData } from "./../types/ProductTypes";

const unlinkAsync = promisify(fs.unlink);

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

export async function getProductById(id: string) {
  const result = await productRepository.findProduct(id);
  if (result === null) throw notFoundError("Product not exist!");

  return result;
}

export async function deleteImage(id: string) {
  const result = await productRepository.findProduct(id);

  if (result === null) throw notFoundError("Product not exist!");

  if (result !== null) {
    const filePath = "./src/public/uploads/images/" + result.image;
    
    // Verifique se o arquivo existe antes de deletar
    if (fs.existsSync(filePath)) {
      try {
        await unlinkAsync(filePath);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(`File ${filePath} does not exist`);
    }
  }
}

export async function deleteProduct(id: string) {
  const result = await productRepository.findProduct(id);

  if (result === null) throw notFoundError("Product not exist!");

  if (result !== null) {
    if (result.image) {
      const filePath = "./src/public/uploads/images/" + result.image;
      
      // Verifique se o arquivo existe antes de deletar
      if (fs.existsSync(filePath)) {
        try {
          await unlinkAsync(filePath);
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log(`File ${filePath} does not exist`);
      }
    }
  }

  await productRepository.deleteProduct(id);
}

export async function updateProduct(id: string, data: TypeProductData) {
  const categoryExists = await categoryRepository.findCategoryById(data.categoryId);
  if (!categoryExists) throw unprocessableEntity("Category not exists");

  const product = await productRepository.findProduct(id);
  if (product === null) throw notFoundError("Product not exist!");

  if (product !== null) {
    const filePath = "./src/public/uploads/images/" + product.image;
    
    // Verifique se o arquivo existe antes de deletar
    if (fs.existsSync(filePath)) {
      try {
        await unlinkAsync(filePath);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(`File ${filePath} does not exist`);
    }
  }

  await productRepository.updateProduct(id, data);
}