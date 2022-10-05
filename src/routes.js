const express = require("express")
const routes = express.Router()
const Users = require("../src/controllers/User-controllers")
const Address = require('../src/controllers/Address-controllers')

//routes User
routes.get("/list", Users.list)
routes.post("/create", Users.create)
routes.delete("/delete/:_id", Users.delete)

//routes Addresses
routes.post("/user/:user_id/addresses", Address.createAddress)
routes.get("/user/:user_id/address", Address.index)
module.exports = routes