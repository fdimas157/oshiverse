import { pool } from "./db.js";

export const getAllCart = async (_req, res) => {
  try {
    const result = await pool.query("select * from carts");
    res
      .status(200)
      .json({ msg: "Data berhasil ditampilkan", data: result.rows });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getCartByUser = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM carts WHERE user = $1", [
      req.params.id,
    ]);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const addCart = async (req, res) => {
  try {
    const result = await pool.query(
      "INSERT INTO carts (data, size, order, user) VALUES ($1, $2, $3, $4) RETURNING *",
      [
        req.body.data,
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
