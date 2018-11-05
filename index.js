const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const frontApi = require('./api/front')
const backApi = require('./api/back')

app.use('/api', frontApi)
app.use('/admin/api', backApi)

app.get('/', function(req, res) {
  res.send('hello world')
})

app.listen(3000)
