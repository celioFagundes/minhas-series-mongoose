const path = require('path')
const express = require('express')
const app = express()
const pages = require('./routes/pages')
const series = require('./routes/series')
const port  = process.env.PORT || 3000
const mongo = process.env.MONGODB || 'mongodb://localhost/minhas-series'

//configura o banco
const mongoose = require('mongoose')

app.use(express.urlencoded({extended: true}))


app.use('/',pages)
app.use('/series', series)


// processa o req body

//define onde fica os assets do projeto
app.use(express.static('public'))
// definindo a view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//startando o servidor caso  conecte no banco
mongoose
.connect(mongo)
.then(() =>{
    app.listen(port, () =>{
        console.log('Listening on : ' + port)
    })
})
.catch(err =>{
    console.log(err)
})
