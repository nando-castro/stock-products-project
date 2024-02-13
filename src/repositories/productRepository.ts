import client from "../databases/database";
import { TypeProductData } from "../types/ProductTypes";

export async function insert(data: TypeProductData) {
  await client.product.create({ data });
}

export async function findAllProducts() {
  return await client.product.findMany();
}

export async function findProduct(id: string) {
  return await client.product.findFirst({
    where: {
      id
    }
  });
}

export async function deleteProduct(id: string) {
  await client.product.delete({ where: { id } });
}

export async function updateProduct(id: string, data: TypeProductData) {
  await client.product.update({ where: { id }, data });
}
