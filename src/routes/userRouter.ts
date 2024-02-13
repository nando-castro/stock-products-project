import { Router } from "express";
import * as authController from "../controllers/authController";
import { ensureAuthenticatedMiddleware } from "../middlewares/authValidateMiddleware";
import { schemaValidateMiddleware } from "../middlewares/schemaValidateMiddleware";
import { loginSchema } from "./../schemas/loginSchema";
import { registerSchema } from "./../schemas/registerSchema";

const authRouter = Router();

authRouter.post(
  "/admin/create",
  schemaValidateMiddleware(registerSchema),
  authController.createController
);

authRouter.post(
  "/admin/auth",
  schemaValidateMiddleware(loginSchema),
  authController.authAdmin
);
authRouter.get("/admin", ensureAuthenticatedMiddleware, authController.teste);

export { authRouter };
