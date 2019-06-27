require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')

const apiRouter = require('./routes/api.router')
const mongoConnect = require('./services/db.service')
const port = process.env.PORT

app.use(bodyParser.json({limit: '10mb'}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use('/api', apiRouter)

mongoConnect()
.then( db => {
    app.listen( port, () => console.log({ server: port, db: db.url }) )
})
.catch( dbError => {
    app.listen( port, () => console.log({ server: port, db: dbError }) )
})