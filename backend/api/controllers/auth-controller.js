import { argon2d } from "argon2";
import { pool } from "./db.js";

export const register = async (req, res) => {
  try {
    const hashedPassword = await argon2d.hash(req.body.password);
    const result = await pool.query(
      "INSERT INTO users (name, email, password, no_identity, birth, phone, gender, oshi, address) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
      [
        req.body.name,
        req.body.email,
        req.body.hashedPassword,
        req.body.no_identity,
        req.body.birth,
        req.body.phone,
        req.body.gender,
        req.body.oshi,
        req.body.address,
      ]
    );
    res.status(200).json({ msg: "Data tersimpan", data: result.rows[0] });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }

  res.send("Pendaftaran berhasil.");
};
