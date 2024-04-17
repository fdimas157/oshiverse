import { pool } from "./db.js";

export const getAllUser = async (_req, res) => {
  try {
    const result = await pool.query("select * from users");
    res
      .status(200)
      .json({ msg: "Data berhasil ditampilkan", data: result.rows });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const addUser = async (req, res) => {
  try {
    const result = await pool.query(
      "INSERT INTO users (name, email, password, no_identity, birth, phone, oshi) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.no_identity,
        req.body.birth,
        req.body.phone,
        req.body.oshi,
      ]
    );
    res.json({
      products: result.rows[0],
      message: "Selamat bergabung.",
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
