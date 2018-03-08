const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World #2!')
  console.log('External call')
})

app.get('/tutu/', function (req, res) {
  res.send('Hello tutu!')
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
