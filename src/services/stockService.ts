import * as productRepository from "../repositories/productRepository";
import * as stockRepository from "../repositories/stockRepository";

import { TypeStockData } from "../types/StockTypes";

export async function createStock(data: TypeStockData) {
  await stockRepository.createStock(data);
}

export async function getAllStocks() {
  const dadosStock = await stockRepository.findAllStock();

  const dadosProducts = dadosStock.map(async (item) => {
    const product = await productRepository.findProduct(item.productId);

    return {
      ...item,
      product: product,
    };
  });

  const productFinal = await Promise.all(dadosProducts);

  return productFinal;
}

export async function deleteStock(id: string) {
  await stockRepository.deleteStock(id);
}

export async function updateStock(id: string, data: TypeStockData) {
  await stockRepository.updateStock(id, data);
}

export async function findStockById(id: string) {
  return await stockRepository.findStockById(id);
}
