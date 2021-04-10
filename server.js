// Dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Variables
const app = express()
const port = process.env.PORT || 3000


// Setup empty JS object to act as endpoint for all routes
let projectData = {};

/* Middleware*/
// bodyParser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
// Cors for cross origin allowance
app.use(cors())
// Initialize the main project folder
app.use(express.static('website'));

// Setting Route For Home Page GET REQs
app.get('/', (req, res) => {
    // res.send(`data: ${projectData}`)
    res.sendFile(__dirname + '/website/index.html')
})
// Setting Route For Home Page POST REQs
app.post('/saveData', (req, res) => {
    projectData.temp = req.body.temp
    projectData.date = req.body.date
    projectData.feelings = req.body.feelings
    res.send(projectData);
})

app.get('/data', (req, res) => {
    res.send(projectData)
})



// Setup Server (spin, debug callback)
app.listen(port, _ => {
    console.log(`Server running on port: ${port}`)
})

// this file only serves static files and projectData... ED DAS NA'N ELSS!