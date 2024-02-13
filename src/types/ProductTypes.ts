import { Product } from "@prisma/client";

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  categoryId: string;
  brandId: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export type TypeProductData = Omit<IProduct, "id" | "createdAt" | "updatedAt">;
export type PartialProductData = Partial<Product>;