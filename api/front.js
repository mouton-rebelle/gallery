const express = require('express')
const app = express()

app.get('/items', function(req, res) {
  res.json([])
})
module.exports = app
