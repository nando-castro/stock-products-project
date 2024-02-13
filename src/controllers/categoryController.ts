import { Request, Response } from "express";
import * as categoryService from "../services/categoryService";
import { TypeCategoryData } from "../types/CategoryTypes";

export async function createCategory(req: Request, res: Response) {
  const category: TypeCategoryData = req.body;

  await categoryService.createCategory(category);

  res.sendStatus(201);
}

export async function getAllCategories(req: Request, res: Response) {
  const categories = await categoryService.getAllCategories();

  res.status(200).send(categories);
}