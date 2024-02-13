import { TypeCategoryData } from "../types/CategoryTypes";
import { conflictError } from "./../utils/errorUtils";

import * as categoryRepository from "../repositories/categoryRepository";

export async function createCategory(data: TypeCategoryData) {
  const categoryExists = await categoryRepository.findCategoryByName(data.name);

  if (categoryExists) throw conflictError("Category exists!");

  await categoryRepository.createCategory(data);
}

export async function getAllCategories() {
  return await categoryRepository.findAllCategories();
}