const express = require('express');
const router = express.Router();

const {getAllProducts,getProductById } = require('../controller/productsControllers')

// @description Getting all the prdcts from db
// @route GET/api/products
// @access Public

router.get('/', getAllProducts);

// @description Getting product by id from db
// @route GET/api/products:id
// @access Public

router.get('/:id', getProductById);

module.exports = router;

