const dotenv = require('dotenv');
dotenv.config();


const apiKey = process.env.API_KEY;
var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Evaluate News app listening on port 8000!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


app.post("/analyzeUrl", async(req, res) => {
        const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=auto&url=${req.body}`, {
            method: 'POST', 
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        console.log(req.body);

    try {
        const newData = await response.json();
        console.log(newData)
        res.send(newData);
    } catch (error) {
        console.log("error", error);
    }
});