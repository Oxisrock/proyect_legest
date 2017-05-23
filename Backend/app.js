'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const userCtrl = require('./controllers/user')

app.use(bodyParser.urlencoded({extended: false})) // llamada del middleware bodyParser que busca las rutas y las interpreta

app.use(bodyParser.json()) // para poder utilizar y leer objetos tipo json

app.post('/signup', userCtrl.signup)

app.get('/users', userCtrl.getUsers)
