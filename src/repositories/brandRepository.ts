import client from "../databases/database";
import { TypeBrandData } from "./../types/BrandTypes";

export async function createBrand(name: TypeBrandData) {
  await client.brand.create({ data: name });
}

export async function findBrandByName(name: string) {
  return await client.brand.findFirst({
    where: { name: { equals: name, mode: "insensitive" } },
  });
}

export async function findBrandById(id: string) {
  return await client.brand.findUnique({ where: { id } });
}

export async function findAllBrands() {
  return await client.brand.findMany();
}

export async function deleteBrand(id: string) {
  await client.brand.delete({ where: { id } });
}
