import client from "../databases/database";
import { TypeStockData } from "../types/StockTypes";

export async function createStock(name: TypeStockData) {
  await client.stock.create({ data: name });
}

export async function findStockByName(name: string) {
  return await client.stock.findFirst({
    where: { name: { equals: name, mode: "insensitive" } },
  });
}

export async function findStockById(id: string) {
  return await client.stock.findUnique({ where: { id } });
}

export async function findAllStock() {
  return await client.stock.findMany();
}

export async function deleteStock(id: string) {
  await client.stock.delete({ where: { id } });
}

export async function updateStock(id: string, data: TypeStockData) {
  await client.stock.update({ where: { id }, data });
}