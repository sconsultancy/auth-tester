import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
dotenv.config();
// import second from 'first'
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
connectDB();
const PORT = process.env.PORT || 5000;
const app = express();

app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("server is ready"));

app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => console.log(`server started in `, PORT));
