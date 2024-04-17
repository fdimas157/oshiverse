import { pool } from "./db.js";

export const getAllIdolMember = async (_req, res) => {
  try {
    const result = await pool.query("select * from idol_member");
    res
      .status(200)
      .json({ msg: "Data berhasil ditampilkan", data: result.rows });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getIdolMemberById = async (req, res) => {
    try {
      const result = await pool.query("SELECT * FROM idol_member WHERE id = $1", [
        req.params.id,
      ]);
      res.json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };