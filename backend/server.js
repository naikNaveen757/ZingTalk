import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connetToMongoDB from "./db/connecttoMongodb.js";

const app = express();

dotenv.config();

app.use(express.json()); //to parse incoming requests with JSON payloads (from req.body)

const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.send("Hello world!!");
// });

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connetToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
