import cors from "cors";
import express, { json } from "express";
import "express-async-errors";
import handleErrorMiddleware from "./middlewares/errorMiddleware";
import router from "./routes";

const app = express();
// app.use("/files", express.static(path.resolve(__dirname, "public", "uploads")));
app.use(json());
app.use(cors());
app.use(router);
app.use(handleErrorMiddleware);

export default app;