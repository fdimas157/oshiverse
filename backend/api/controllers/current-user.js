import { pool } from "./db.js";

export const getCurrentUSer = async (_req, res) => {
  try {
    const result = await pool.query("select * from current_user");
    res
      .status(200)
      .json({ msg: "Data berhasil ditampilkan", data: result.rows });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};