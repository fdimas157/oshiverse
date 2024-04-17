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

// USER
app.get("/api/v1/users", async (_req, res) => {
  const result = await pool.query("SELECT * FROM users");
  res.json(result.rows);
});

app.get("/api/v1/get-user/:id", async (req, res) => {
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [
    req.params.id,
  ]);
  res.json(result.rows[0]);
});

app.get("/api/v1/get-users-by-logged/", async (req, res) => {
  const result = await pool.query("SELECT * FROM users WHERE logged = true");
  res.json(result.rows[0]);
});

app.put("/api/v1/is-logged-in/:id", async (req, res) => {
  try {
    await pool.query("UPDATE users SET logged = true WHERE id = $1", [
      req.params.id,
    ]);
    res.status(200).json({
      message: "User berhasil login",
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

app.get("/api/v1/get-users-by-logged/", async (req, res) => {
  const result = await pool.query("SELECT * FROM users WHERE logged = true");
  res.json(result.rows[0]);
});

app.put("/api/v1/logout/:id", async (req, res) => {
  try {
    await pool.query("UPDATE users SET logged = false WHERE id = $1", [
      req.params.id,
    ]);
    res.status(200).json({
      message: "User berhasil logout",
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

app.post("/api/v1/add-user", async (req, res) => {
  try {
    const result = await pool.query(
      "INSERT INTO users (name, email, password, no_identity, birth, phone, gender, oshi, address) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.no_identity,
        req.body.birth,
        req.body.phone,
        req.body.gender,
        req.body.oshi,
        req.body.address,
      ]
    );
    res.json({
      products: result.rows[0],
      message: "Selamat bergabung.",
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// PRODUCTS

app.use("/api/v1/product", async (_req, res) => {
  const result = await pool.query("SELECT * FROM products");
  res.json(result.rows);
});

app.post("/api/v1/add-product", async (req, res) => {
  const result = await pool.query(
    "INSERT INTO products (name_product, category, price, image, stock) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [
      req.body.name_product,
      req.body.category,
      req.body.price,
      req.body.image,
      req.body.stock,
    ]
  );
  res.json({
    product: result.rows[0],
    message: "Produk berhasil ditambahkan.",
  });
});

app.get("/api/v1/get-product/:id", async (req, res) => {
  const result = await pool.query("SELECT * FROM products WHERE id = $1", [
    req.params.id,
  ]);
  res.json(result.rows[0]);
});

// CART
app.use("/api/v1/cart", async (_req, res) => {
  const result = await pool.query("SELECT * FROM carts");
  res.json(result.rows);
});

app.get("/api/v1/get-cart/:id", async (req, res) => {
  const result = await pool.query("SELECT * FROM carts WHERE user = $1", [
    req.params.id,
  ]);
  res.json(result.rows[0]);
});

// IDOL MEMBERS
app.get("/api/v1/get-all-idol-member", async (_req, res) => {
  const result = await pool.query("SELECT * FROM idol_members");
  res.json(result.rows);
});

app.get("/api/v1/get-idol-member/:id", async (req, res) => {
  const result = await pool.query("SELECT * FROM idol_members WHERE id = $1", [
    req.params.id,
  ]);
  res.json(result.rows[0]);
});

// LOGIN
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
  try {
    const hashedPassword = await argon2.hash(req.body.password);
    const result = await pool.query(
      "INSERT INTO users (name, email, password, no_identity, birth, phone, gender, oshi, address, logged) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
      [
        req.body.name,
        req.body.email,
        hashedPassword,
        req.body.no_identity,
        req.body.birth,
        req.body.phone,
        req.body.gender,
        req.body.oshi,
        req.body.address,
        req.body.logged,
      ]
    );
    res.status(200).json({ msg: "Data tersimpan", data: result.rows[0] });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// CURRENT USER
app.get("/api/v1/current-user", async (_req, res) => {
  const result = await pool.query("SELECT * FROM current");
  res.json(result.rows);
});
