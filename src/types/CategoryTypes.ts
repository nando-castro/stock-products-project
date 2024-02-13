import { Category } from "@prisma/client";

export interface ICategory {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export type TypeCategoryData = Omit<
  ICategory,
  "id" | "createdAt" | "updatedAt"
>;
export type PartialCategoryData = Partial<Category>;