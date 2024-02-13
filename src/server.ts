import dotenv from "dotenv";
import app from "./index";
dotenv.config();

const PORT: number = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});