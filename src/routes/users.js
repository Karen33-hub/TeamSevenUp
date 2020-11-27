// ENRUTADOR USERS

// Multer > para subir archivos
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/avatars'));
    },
    filename: function (req, file, cb) {
      cb(null, req.body.name + "_prueba" + path.extname(file.originalname))
    }
  })

var upload = multer({ storage: storage })

// const path = require('path');
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// le prefijo utilizado es: /users...
router.get('/register', usersController.register);
router.post('/register', upload.any(), usersController.create);

router.get('/login', usersController.login);
router.post('/login', usersController.checkLogin);

module.exports = router;