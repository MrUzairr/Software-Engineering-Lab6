const express = require('express');

const router = express.Router();
const productController = require('../controllers/productController');
const userController = require('../controllers/userController');

// create a new product

router.post('/products',productController.createProduct);
router.get('/getallproducts',productController.getAllProducts);
router.post('/users',userController.addUser);
router.get('/getallusers',userController.getAllUser);


module.exports = router;