import { Request, Response } from "express";
import * as brandService from "../services/brandService";
import { TypeBrandData } from './../types/BrandTypes';

export async function createBrand(req: Request, res: Response) {
  const brand: TypeBrandData = req.body;

  await brandService.createBrand(brand);

  res.sendStatus(201);
}

export async function getAllBrands(req: Request, res: Response) {
  const brands = await brandService.getAllBrands();

  res.status(200).send(brands);
}