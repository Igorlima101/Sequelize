const Sequelize = require('sequelize')
const dbConfig = require("../config/database")
const Users = require('../models/User-model')
const Address = require('../models/Address-model')

const connection = new Sequelize(dbConfig)

Users.init(connection)
Address.init(connection)
Users.associate(connection.models)
Address.associate(connection.models)

module.exports = connection