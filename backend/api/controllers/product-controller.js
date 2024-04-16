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
