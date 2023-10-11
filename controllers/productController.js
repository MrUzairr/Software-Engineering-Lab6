const Product = require('../models/productModel');

async function createProduct(req,res){
    try {
        console.log(req.body);
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

async function getAllProducts(req,res){
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}
async function deleteProduct(req,res){
    try {
        const products = await Product.findByIdAndDelete(req.params.id);
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports = {
    createProduct,
    getAllProducts,
};