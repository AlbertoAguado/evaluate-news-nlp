const fetch = require('node-fetch')
const dotenv = require('dotenv');
dotenv.config();


const apiKey = process.env.API_KEY;
var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mockAPIResponse = require('./mockAPI.js')

console.log(`Your API key is ${process.env.API_KEY}`);

const app = express()

app.use(express.static('dist'))
/* Middleware*/
app.use(cors());
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

console.log(__dirname)

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile( path.join(__dirname, '../client/views', 'index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Evaluate News app listening on port 8000!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


app.post('/sentiment', async function (req, res) {
    let url = req.body.inputForm;
    const response = await fetch (`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=auto&url=${url}`)
    const result = await response.json()
    res.send(result)
})
