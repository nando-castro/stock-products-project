import { Router } from "express";
import { categoryRouter } from "./categoryRouter";
import { productRouter } from "./productRouter";
import { authRouter } from "./userRouter";

const router = Router();

router.use(authRouter);
router.use(productRouter);
router.use(categoryRouter);

export default router;