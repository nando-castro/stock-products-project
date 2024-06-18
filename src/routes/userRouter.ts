import { Router } from "express";
import * as authController from "../controllers/authController";
import { ensureAuthenticatedMiddleware } from "../middlewares/authValidateMiddleware";
import { schemaValidateMiddleware } from "../middlewares/schemaValidateMiddleware";
import { loginSchema } from "./../schemas/loginSchema";
import { registerSchema } from "./../schemas/registerSchema";

const authRouter = Router();

authRouter.post(
  "/stock-api/user/create",
  schemaValidateMiddleware(registerSchema),
  authController.createController
);
authRouter.post(
  "/stock-api/user/auth",
  schemaValidateMiddleware(loginSchema),
  authController.authAdmin
);
authRouter.get(
  "/stock-api/user",
  ensureAuthenticatedMiddleware,
  authController.teste
);

export { authRouter };

