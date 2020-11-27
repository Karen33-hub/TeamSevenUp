// ENRUTADOR PRODUCTS

// RUTA ------> CONTROLADOR -------> VISTA

// const path = require('path');
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.all);
router.get('/bicicletas', productsController.bicicletas);
router.get('/accesorios', productsController.accesorios);
router.get('/detalleDeProducto', productsController.detalleDeProducto);

module.exports = router;