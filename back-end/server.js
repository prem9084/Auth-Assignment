import express from "express";
import dotenv from "dotenv";
import connect from "./db/db.js";
import morgan from "morgan";
import authRoute from "./routes/authRoutes.js";

const app = express();
dotenv.config();

connect();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", authRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server listinig on port ${PORT}`);
});
