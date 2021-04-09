// Dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Variables
const app = express()
const port = process.env.PORT || 3000


// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Setting Route For Home Page
app.get('/', (req, res) => {
    res.send('SUCCESS')
})

/* Middleware*/
// bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
app.use(cors())
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server (spin, debug callback)
app.listen(port, _ => {
    console.log(`Server running on port: ${port}`)
})