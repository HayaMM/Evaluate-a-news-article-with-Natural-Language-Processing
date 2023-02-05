// variables
let articleData = {};
var path = require('path');

const dotenv = require('dotenv');
dotenv.config();

// fetch API
const fetch = require('node-fetch');

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');

// app's instance
const app = express()

const mockAPIResponse = require('./mockAPI.js');

// server port number
const port = 8081;

// API KEY
const application_key = process.env.API_KEY

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// dist is the project folder
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // using index file from dist
    res.sendFile('dist/index.html')
})

// app listen to for incoming requests
app.listen(port, function () {
    console.log(`running at http://localhost:${port}/ API is: ${application_key}`);
})

// POST request setup
app.post('/subURL', postURL);
// postURL function
async function postURL(request, response) {
    // save the requested body in data 
    const data = request.body.input;
    // API URL
    const theURL = `https://api.meaningcloud.com/sentiment-2.1?key=${application_key}&url=${data}&lang=en`
    // fetch API information
    const fetchData = await fetch(theURL);
    try {
        // return json response
        const dataInfo = await fetchData.json();
        // assign  object
        articleData = {
            score_tag: dataInfo.score_tag,
            text: dataInfo.sentence_list[0].text,
            subjectivity: dataInfo.subjectivity
        };
        // send the response  
        response.send(articleData).status(200).end();
    }
    catch (error) {
        console.log(error);
        response.status(400).end();
    }
};

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// export app instance 
module.exports = app;