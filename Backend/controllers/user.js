// donde se van a encontrar todas las funciones para el modelo usuario

'use strict'
const User = require('../models/user') // se manda a llamar a el modelo user.js

function signUp (req, res) { // se crea la funcion signUp que recibe un requerimiento y manda una respuesta
  const user = new User({
    firt_name: req.body.firt_name, // Los 2 o un nombre del usuario
    last_name: req.body.last_name, // Los 2 o un apellido del usuario
    username: req.body.username, // nombre de usuario con el que el se registrar
    password: req.body.password, //   contraseña con la cual el usuario se registrara
    place_birth: req.body.place_birth,  // lugar de nacimiento del usuario
    place_residence: req.body.place_residence, // lugar de residencia del usuario
    birthdate: req.body.birthdate, // Fecha de nacimiento del usuario es obligatoria
    email: req.body.email, // correo con el usuario se registro total mente obligario y tiene que ser unico
    tel: req.body.tel, // telefono obligatorio del cliente
    tel_Opc: req.body.tel_opc // telefono opcional del usuarios
  })
  user.save((err) => { // se manda a guardar el usuario en la base de datos
    if (err) return res.status(500).send({ message: `Error Create User: ${err}` }) // si paso algun error a mandar a guardar
    console.log('user creado')
    console.log('Email :' + req.body.email)
    console.log('Password :' + req.body.password)
    return res.status(200) // manda el estatus 200 que fue correcto el guardado del usuario  guarda en la base de datos
  })
}
module.exports =
{
  signUp
}
