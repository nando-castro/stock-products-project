import { Stock } from "@prisma/client";

export interface IStock {
  id: string;
  productId: string;
  quantity: number;
  createdAt: string;
  updatedAt: string;
}

export type TypeStockData = Omit<IStock, "id" | "createdAt" | "updatedAt">;
export type PartialStockData = Partial<Stock>;
