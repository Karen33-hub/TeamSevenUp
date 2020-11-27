const fs = require('fs');
const path = require('path');

// RUTA ------> CONTROLADOR -------> VISTA

let mainController = {
    index: function(req, res) {
        res.render('index', { mensaje: "Bienvenidos a nuestra página..." });
    },

    contacto: function(req, res) {
        res.render('contacto');        
    },

    nosotros: function(req, res) {
        res.render('nosotros');        
    },

    entrega: function(req, res) {
        res.render('entrega');        
    },    

    promociones: function(req, res) {
        res.render('promociones');        
    },

    entregas: function(req, res) {
        res.render('entregas');        
    },

    mapaDelSitio: function(req, res) {
        res.render('mapaDelSitio');        
    },

    terminosDeUso: function(req, res) {
        res.render('terminosDeUso');        
    },

    privacidad: function(req, res) {
        res.render('privacidad');        
    },
    
    defensaAlConsumidor: function(req, res) {
        res.render('defensaAlConsumidor');        
    },    
    
    notFound: function(req, res) {
        res.render('notFound');        
    },    
        
    carrito: function(req, res) {
        res.render('carrito');        
    },

    carritoVacio: function(req, res) {
        res.render('carritoVacio');        
    },    

    busqueda: function(req, res) {
        res.render('busqueda');        
    },    

    blog: function(req, res) {
        res.render('blog');        
    }
};

module.exports = mainController;