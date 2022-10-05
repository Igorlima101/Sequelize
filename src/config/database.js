const path = require('path')
require('dotenv').config({path: path.resolve(__dirname,'.env')})


module.exports = {
    dialect: "mysql",
    host: "localhost",
    username: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: "databaseSequelize",
    define: {
        underscored: true,
        timestamps : false
    }
}