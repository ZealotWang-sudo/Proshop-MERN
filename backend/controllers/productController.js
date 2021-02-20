
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc  Fetch all product
// @route  GET /api/products
// @access  Public
const getProducts = asyncHandler( async (req,res) => { 

    const products = await Product.find({}); //this returns a promise

    res.json(products);
}) 


// @desc  Fetch single product
// @route  GET /api/products:id
// @access  Public
const getProductsById = asyncHandler( async (req,res) => { 

    const product = await Product.findById(req.params.id); //this returns a promise
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
}) 

export{ 
    getProducts,
    getProductsById
}