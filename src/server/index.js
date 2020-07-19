const dotenv = require('dotenv')
dotenv.config()
var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
var aylien = require("aylien_textapi")
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
})


let sentimentData = {}
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())


app.use(express.static('dist'))


console.log(__dirname)


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})


app.get('/test', async function (req, res) {
  res.json({message: 'Works!'})
})


app.get('/data', getData)
function getData(req, res){
  res.send(sentimentData)
  console.log(sentimentData)
}


app.post('/sentiment-data', function (req, res){
  console.log(req.body)
  try {
    const urlText = req.body
    textapi.sentiment({
      text: urlText,
      mode: 'document'
    },
      function (error, response) {
          if (error === null) {
            sentimentData = {
              "polarity": response.polarity,
              "subjectivity": response.subjectivity,
              "text": response.text
            }
            res.send(sentimentData);
            console.log(sentimentData);
          }
      })
    } catch (error) {
      console.log(error)
    }
})


module.exports = app
