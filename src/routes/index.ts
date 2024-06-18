import { Router } from "express";
import { brandRouter } from "./brandRouter";
import { categoryRouter } from "./categoryRouter";
import { productRouter } from "./productRouter";
import { stockRouter } from "./stockRouter";
import { authRouter } from "./userRouter";

const router = Router();

router.use(authRouter);
router.use(productRouter);
router.use(categoryRouter);
router.use(brandRouter);
router.use(stockRouter);

export default router;
