import { conflictError } from "./../utils/errorUtils";

import * as brandRepository from "../repositories/brandRepository";
import { TypeBrandData } from "../types/BrandTypes";

export async function createBrand(data: TypeBrandData) {
  const brandExists = await brandRepository.findBrandByName(data.name);

  if (brandExists) throw conflictError("Brand exists!");

  await brandRepository.createBrand(data);
}

export async function getAllBrands() {
  return await brandRepository.findAllBrands();
}