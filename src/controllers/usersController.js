const fs = require ('fs');
const path = require('path');
const bcrypt = require('bcrypt');
//const express = require('express');

let usuarios = fs.readFileSync(path.join(__dirname, '../database/users.json'), 'utf8');
let usuariosGuardados = JSON.parse(usuarios);

module.exports = {
    register: function(req, res) {
        res.render('register')
    },

    create: function(req, res) {
        //return res.send(usuarios[0]); // > ESTO ES UN JSON
        // usuariosGuardados.push(req.body);  > ESTO MANDA TODO EL BODY      

        usuariosGuardados.push({
            name: req.body.name, 
            email: req.body.email,
            password:  bcrypt.hashSync(req.body.password, 12),
            avatar: req.body.avatar
        }); // > ESTO MANDA SOLO LOS OBJETOS DEL BODY QUE YO SELECCIONO, NO INCLUYO EL REPASSWORD

        fs.writeFileSync(path.join(__dirname, '../database/users.json'), JSON.stringify(usuariosGuardados, null, 4));
        //return res.send("LISTO");
        return res.render('usuarioCreado');
    },  

    login: function(req, res) {
        res.render('login');
    },

    welcome: function(req, res) {
        //res.send("Tu usuario ha sido creado con éxito");
        res.send(req.query); // recupero los datos que se enviaron a traves del metodo get
    },   

    delete: function(req, res) {
        res.send("Se borró un usuario");
    },
    
    checkLogin: function(req, res) {
        for (let i = 0; i < usuariosGuardados.length; i++) {
            if(req.body.email == usuariosGuardados[i].email){
                if (bcrypt.compareSync(req.body.password, usuariosGuardados[i].password)){
                    //return res.send("Bienvenido a tu perfil");
                    return res.render('perfilCliente');
                } else {
                    return res.send("Los datos ingresados son incorrectos")
                }
            }
            return res.send("Este usuario no existe en nuestra base de datos");
        }
    }    
}