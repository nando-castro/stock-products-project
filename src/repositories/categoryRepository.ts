import client from "../databases/database";
import { TypeCategoryData } from "../types/CategoryTypes";

export async function createCategory(name: TypeCategoryData) {
  await client.category.create({ data: name });
}

export async function findCategoryByName(name: string) {
  return await client.category.findFirst({
    where: { name: { equals: name, mode: "insensitive" } },
  });
}

export async function findCategoryById(id: string) {
  return await client.category.findUnique({ where: { id } });
}

export async function findAllCategories() {
  return await client.category.findMany();
}

export async function deleteCategory(id: string) {
  await client.category.delete({ where: { id } });
}