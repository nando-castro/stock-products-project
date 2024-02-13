import { User } from "@prisma/client";

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export type TypeUserData = Omit<IUser, "id" | "createdAt" | "updatedAt">;
export type PartialUserData = Partial<User>;