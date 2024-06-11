import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connecttoMongodb.js";
import messageRouter from "./routes/message.routes.js";
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();

app.use(express.json()); //to parse incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.send("Hello world!!");
// });

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
