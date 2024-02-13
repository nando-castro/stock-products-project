import { Router } from "express";
import multer from "multer";
import { multerConfig } from "../config/multer";
import * as productController from "../controllers/productController";
import { ensureAuthenticatedMiddleware } from "../middlewares/authValidateMiddleware";
import { schemaValidateMiddleware } from "../middlewares/schemaValidateMiddleware";
import { productSchema } from "./../schemas/productSchema";

const productRouter = Router();
const upload = multer(multerConfig);

productRouter.get("/products", productController.getAllProducts);

productRouter.use(ensureAuthenticatedMiddleware);

productRouter.post(
  "/admin/product/create",
  upload.single("image"),
  schemaValidateMiddleware(productSchema),
  productController.createProduct
);
productRouter.get("/admin/products", productController.getAllProducts);
productRouter.delete("/admin/product/:id", productController.deleteProduct);

export { productRouter };
