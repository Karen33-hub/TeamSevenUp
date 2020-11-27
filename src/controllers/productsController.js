const fs = require('fs');
const path = require('path');

module.exports = {
    all: function(req, res) {
        let products = fs.readFileSync(path.join(__dirname, '../database/products.json'), 'utf8');
        let arrayProducts = JSON.parse(products)
        return res.render('productos', {productosEnLaVista: arrayProducts})
    },

    bicicletas: function(req, res) {
        res.render('bicicletas');        
    },

    detalleDeProducto: function(req, res) {
        res.render('detalleDeProducto');        
    },    

    accesorios: function(req, res) {
        res.render('accesorios');        
    }   
}