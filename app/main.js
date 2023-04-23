
const express = require('express')
const mongo = require('mongoose')
const latestRouter = require('./routes/api')
const app = express()
const cors = require('cors')

// view engine setup
// app.set('view engine','ejs')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(express.static('./public'))
//routing
app.use("/api/v1/latest", latestRouter)

// error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Internal Server Error')
})

module.exports = app