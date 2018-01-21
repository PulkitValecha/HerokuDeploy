const express = require('express')
const path = require('path')
const config = require('./config.js')
const app = express()

app.use('/', express.static(path.join(__dirname,"public_static")))
app.get('/hello', (req, res)=>{
    res.send("Hello")
})


app.listen(config.PORT,()=>{
    console.log("Server started at http://localhost:" + config.PORT)
})