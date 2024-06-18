import { Router } from "express";
import * as brandController from "../controllers/brandController";
import { ensureAuthenticatedMiddleware } from "../middlewares/authValidateMiddleware";
import { schemaValidateMiddleware } from "../middlewares/schemaValidateMiddleware";
import { brandSchema } from "../schemas/brandSchema";

const brandRouter = Router();

brandRouter.use(ensureAuthenticatedMiddleware);

brandRouter.post(
  "/stock-api/brand/create",
  schemaValidateMiddleware(brandSchema),
  brandController.createBrand
);

brandRouter.get("/stock-api/brands", brandController.getAllBrands);

export { brandRouter };

