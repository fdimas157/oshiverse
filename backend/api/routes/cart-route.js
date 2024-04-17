import express from "express";
import { getAllCart, getCartByUser } from "../controllers/cart-controller.js";

const router = express.Router();

router.get("/get-all-product", getAllCart);
router.get("/get-cart-by-user", getCartByUser);

export default router;
