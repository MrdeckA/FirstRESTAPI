const express = require('express');
const router = express.Router();
const ProdCtrl = require('../controllers/produit');

router.post('/', ProdCtrl.createProduct);
router.get('/:id', ProdCtrl.getOneProduct);
router.get('/', ProdCtrl.getAllProduct);

module.exports = router;