const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID

const PASSWORD = 'rNGonS9tMM7DJwNL'
const url = `mongodb://mouton:${PASSWORD}@cluster0-shard-00-00-ulxnc.mongodb.net:27017,cluster0-shard-00-01-ulxnc.mongodb.net:27017,cluster0-shard-00-02-ulxnc.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`

app.post('/categories', (req, res) => {
  MongoClient.connect(url).then(client => {
    const db = client.db('cam')
    const categories = db.collection('categories')
    categories
      .insert({
        name: req.body.name,
        created: Date()
      })
      .then(result => res.json(result))
  }),
  err => {
    console.log(err)
    req.json(err)
  }
})

app.get('/categories', (req, res) => {
  MongoClient.connect(url).then(client => {
    const db = client.db('cam')
    const categories = db.collection('categories')
    categories
      .find({})
      .toArray()
      .then(result => res.json(result))
  })
})

app.delete('/categorie/:id', (req, res) => {
  MongoClient.connect(url).then(client => {
    const db = client.db('cam')
    console.log(req.params)
    const categories = db.collection('categories')
    categories
      .deleteOne({ _id: ObjectID(req.params.id) })
      .then(result => res.json(result))
  })
})
module.exports = app
