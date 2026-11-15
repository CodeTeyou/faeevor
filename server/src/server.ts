import express from "express";
import dotenv from "dotenv";
import { connectToMongoDB } from "./mongodb.ts";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
  connectToMongoDB();
});

app.get("/", (req, res) => {
  res.send(`I'm on http://localhost:${PORT}`);
});