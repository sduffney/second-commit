import productController from "../controllers/productController";
import express from "express";
import authController from "../controllers/authController";
const router = express.Router();
//get all products

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);

router.post('/', authMiddleware,  productController.createProduct);
router.put('/:id', authMiddleware,  productController.updateProduct);
router.delete('/:id', authMiddleware,  productController.deleteProduct);
export default router;

