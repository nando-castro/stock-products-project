import { Request, Response } from "express";
import * as productService from "../services/productService";
import { TypeProductData } from "../types/ProductTypes";

export async function createProduct(req: Request, res: Response) {
  const product: TypeProductData = req.body;
  const image = req.file;

  const data = {
    name: product.name,
    description: product.description,
    price: Number(product.price),
    categoryId: product.categoryId,
    brandId: product.brandId,
    image: image
      ? `${image?.filename}`
      : null,
  };

  await productService.createProduct(data);

  res.sendStatus(201);
}

export async function getAllProducts(req: Request, res: Response) {
  const products = await productService.getAllProducts();

  res.status(200).send(products);
}

export async function deleteProduct(req: Request, res: Response) {
  const { id } = req.params;
  await productService.deleteImage(id);
  await productService.deleteProduct(id);

  res.sendStatus(200);
}

export async function updateProduct(req: Request, res: Response) {
  const { id } = req.params;
  const product: TypeProductData = req.body;
  const image = req.file;

  const dataProduct = await productService.getProductById(id);

  if (image && dataProduct.image) {
    await productService.deleteImage(id);
  }

  const data = {
    name: product.name,
    description: product.description,
    price: Number(product.price),
    categoryId: product.categoryId,
    brandId: product.brandId,
    image: image
      ? `${image?.filename}`
      : dataProduct.image,
  };

  await productService.updateProduct(id, data);

  res.sendStatus(200);
}
