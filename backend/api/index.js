import express from "express";
import { pool } from "./db.js";

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server berjalan dengan baik!");
});

app.get("/api", (_req, res) => {
  res.send("Hello world!");
});

app.get("/api/v1/users", async (_req, res) => {
  const result = await pool.query("SELECT * FROM users");
  res.json(result.rows);
});

app.use("/api/v1/product", async (_req, res) => {
  const result = await pool.query("SELECT * FROM products");
  res.json(result.rows);
});
