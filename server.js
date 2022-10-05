const express = require("express")
const app = express()
const routes = require("./src/routes")
require('./src/database')

app.use(express.json())
app.use(routes)

app.listen(8080, console.log("server Listening"))