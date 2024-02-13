import { Router } from "express";
import * as categoryController from "../controllers/categoryController";
import { ensureAuthenticatedMiddleware } from "../middlewares/authValidateMiddleware";
import { schemaValidateMiddleware } from "../middlewares/schemaValidateMiddleware";
import { categorySchema } from "../schemas/categorySchema";

const categoryRouter = Router();

categoryRouter.use(ensureAuthenticatedMiddleware);

categoryRouter.post(
  "/admin/category/create",
  schemaValidateMiddleware(categorySchema),
  categoryController.createCategory
);

categoryRouter.get("/admin/categories", categoryController.getAllCategories);

export { categoryRouter };
