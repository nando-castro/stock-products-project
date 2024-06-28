import { Router } from "express";
import * as stockController from "../controllers/stockController";
import { ensureAuthenticatedMiddleware } from "../middlewares/authValidateMiddleware";
import { schemaValidateMiddleware } from "../middlewares/schemaValidateMiddleware";
import { stockSchema } from "./../schemas/stockSchema";

const stockRouter = Router();

stockRouter.use(ensureAuthenticatedMiddleware);

stockRouter.post(
  "/stock-api/stock/create",
  schemaValidateMiddleware(stockSchema),
  stockController.createStock
);

stockRouter.get("/stock-api/stocks", stockController.getAllStocks);
stockRouter.put(
  "/stock-api/stock/update/:id",
  schemaValidateMiddleware(stockSchema),
  stockController.updateStock
);

stockRouter.delete("/stock-api/stock/:id", stockController.deleteStock);

export { stockRouter };

