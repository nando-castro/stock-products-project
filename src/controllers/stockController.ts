import { Request, Response } from "express";
import * as stockService from "../services/stockService";
import { TypeStockData } from "../types/StockTypes";

export async function createStock(req: Request, res: Response) {
  const stock: TypeStockData = req.body;

  await stockService.createStock(stock);

  res.sendStatus(201);
}

export async function getAllStocks(req: Request, res: Response) {
  const brands = await stockService.getAllStocks();

  res.status(200).send(brands);
}

export async function deleteStock(req: Request, res: Response) {
  const { id } = req.params;

  await stockService.deleteStock(id);

  res.sendStatus(200);
}

export async function updateStock(req: Request, res: Response) {
  const { id } = req.params;
  const stock: TypeStockData = req.body;

  await stockService.updateStock(id, stock);

  res.sendStatus(200);
}
