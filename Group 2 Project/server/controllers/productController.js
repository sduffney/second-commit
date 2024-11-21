import Product from "../models/product";
import extend from "lodash/extend";
import errorHandler from "./error.controller";
const getAllProducts = async (req, res) => {
  try {
    let products = await Product.find();
    res.json(products);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
}
const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(200).json({
      message: "Product successfully created!",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
}
const getProductById = async (req, res, next, id) => {
  try {
    let product = await Product .findById(id);
    if (!product)
      return res.status("400").json({ error: "Product not found" });
    req.product = product;
    next();
  }
  catch (err) {
    return res.status("400").json({ error: "Could not retrieve product" });
  }
}


const updateProduct = async (req, res) => {
  try {
    let product = req.product;
    product = extend(product, req.body);
    product.updated = Date.now();
    await product.save();
    res.json(product);
  }
  catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
}
const deleteProduct = async (req, res) => {
  try {
    let product = req.product;
    let deletedProduct = await product.remove();
    deletedProduct.hashed_password = undefined;
    deletedProduct.salt = undefined;
    res.json(deletedProduct);
  }
  catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
}
export default {
  getAllProducts,
  createProduct,
  list,
  getProductById,
  updateProduct,
  deleteProduct,
};




