const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3005
var cors = require('cors')

app.use(express.static(__dirname + '/../public'))
app.use(bodyParser.json())
app.use(cors());


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})