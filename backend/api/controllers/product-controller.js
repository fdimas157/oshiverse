import { pool } from "./db.js";

export const getAllProduct = async (_req, res) => {
  try {
    const result = await pool.query("select * from products");
    res
      .status(200)
      .json({ msg: "Data berhasil ditampilkan", data: result.rows });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products WHERE id = $1", [
      req.params.id,
    ]);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const addNewProduct = async (req, res) => {
  try {
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
      products: result.rows[0],
      message: "Produk berhasil ditambahkan.",
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
