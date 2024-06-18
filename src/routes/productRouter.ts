import { Router } from "express";
import multer from "multer";
import { multerConfig } from "../config/multer";
import * as productController from "../controllers/productController";
import { ensureAuthenticatedMiddleware } from "../middlewares/authValidateMiddleware";
import { schemaValidateMiddleware } from "../middlewares/schemaValidateMiddleware";
import { productSchema } from "./../schemas/productSchema";

const productRouter = Router();
const upload = multer(multerConfig);

productRouter.use(ensureAuthenticatedMiddleware);
productRouter.post(
  "/stock-api/product/create",
  upload.single("image"),
  schemaValidateMiddleware(productSchema),
  productController.createProduct
);
productRouter.get("/stock-api/products", productController.getAllProducts);
productRouter.delete("/stock-api/product/:id", productController.deleteProduct);

export { productRouter };

