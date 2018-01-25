const express = require('express')
const path = require('path')
const {PORT}  = require('./config')
const app = express()
const Item = require('./db/models').Item
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', express.static(path.join(__dirname,"public_static")))

app.get('/hello', (req, res)=>{
    res.send("Hello")
})

app.get('/items', (req, res, next)=>{
    Item.findAll()
        .then((items)=>res.send(items))
        .catch((err) =>next())
})

app.post('/items',(req, res, next)=>{
    Item.create({
        stuff: req.body.stuff
    })
        .then((result)=>res.redirect('/items'))
        .catch((err)=>next())
})

app.use((req, res)=>{
    res.status(404).send("Not Found")
})

app.listen(PORT,()=>{
    console.log("Server started at http://localhost:" + PORT)
})