import express from "express";
import { pool } from "./db.js";
import argon2 from "argon2";
import cors from "cors";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

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

app.get("/api/v1/get-all-idol-member", async (_req, res) => {
  const result = await pool.query("SELECT * FROM idol_member");
  res.json(result.rows);
});

app.get("/api/v1/get-idol-member/:id", async (req, res) => {
  const result = await pool.query("SELECT * FROM idol_member WHERE id = $1", [
    req.params.id,
  ]);
  res.json(result.rows[0]);
});

//login
app.post("/api/v1/login", async (req, res) => {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    req.body.email,
  ]);
  if (result.rows.length > 0) {
    const user = result.rows[0];
    if (await argon2.verify(user.password, req.body.password)) {
      const token = jwt.sign(user, process.env.SECRET_KEY);
      res.send({
        token,
        message: "Login berhasil",
        user,
      });
    } else {
      res.status(401);
      res.send("Kata sandi salah");
    }
  } else {
    res.status(404);
    res.send(`${req.body.email} tidak ditemukan`);
  }
});

//register
app.post("/api/v1/register", async (req, res) => {
  const hash = await argon2.hash(req.body.password);
  await pool.query(
    "INSERT INTO users (email, password, name) VALUES ($1, $2, $3)",
    [req.body.email, hash, req.body.name]
  );
  res.send("Pendaftaran berhasil.");
});
