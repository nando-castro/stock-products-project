import { Brand } from "@prisma/client";

export interface IBrand {
  id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export type TypeBrandData = Omit<IBrand, "id" | "createdAt" | "updatedAt">;
export type PartialBrandData = Partial<Brand>;