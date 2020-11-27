// ENRUTADOR MAIN

// const path = require('path');
const express = require('express');
const router = express.Router()
const mainController = require('../controllers/mainController')

router.get('/', mainController.index);
router.get('/blog', mainController.blog);
router.get('/contacto', mainController.contacto);
router.get('/nosotros', mainController.nosotros);
router.get('/entrega', mainController.entrega);
router.get('/promociones', mainController.promociones);
router.get('/mapaDelSitio', mainController.mapaDelSitio);
router.get('/terminosDeUso', mainController.terminosDeUso);
router.get('/privacidad', mainController.privacidad);
router.get('/defensaAlConsumidor', mainController.defensaAlConsumidor);
router.get('/notFound', mainController.notFound);
router.get('/carrito', mainController.carrito);
router.get('/carritoVacio', mainController.carritoVacio);
router.get('/busqueda', mainController.busqueda);


module.exports = router;