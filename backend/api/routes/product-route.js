import express from "express";
import {
  addNewProduct,
  getAllProduct,
  getProductById,
} from "../controllers/product-controller.js";

const router = express.Router();

router.get("/get-all-product", getAllProduct);
router.get("/get-product-by-id", getProductById);
router.get("/add-new-product", addNewProduct);

export default router;
