## Walkthrough
1. Start by setting up your project environment. Make sure Node is installed from the terminal. Install the packages Express, Body-Parser, and Cors from the terminal and them include them your server.js file.
    - Create a server running on the port of your choosing
    - Add a console.log() to the server callback function, and test that your server is running using Node in the terminal to run the file server.js
2. Add a GET route that returns the projectData object in your server code Then, add a POST route that adds incoming data to projectData.
    - The POST route should anticipate receiving three pieces of data from the request body
        - temperature
        - date
        - user response
    - Make sure your POST route is setup to add each of these values with a key to projectData.
3. Acquire API credentials from OpenWeatherMap website. Use your credentials and the base url to create global variables at the top of your app.js code.
    - Write an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API.
    - Create an event listener for the element with the id: generate, with a callback function to execute when it is clicked.
    - Inside that callback function call your async GET request with the parameters:
        - base url
        - user entered zip code (see input in html with id zip)
        - personal API key
4. After your successful retrieval of the weather data, you will need to chain another Promise that makes a POST request to add the API data, as well as data entered by the user, to your app.
    - You will need to write another async function to make this POST request
    - The function should receive a path and a data object.
    - The data object should include
        - temperature
        - date
        - user response
    - Remember, you can access the value of DOM elements by selecting them in your JS code.
5. Finally, chain another Promise that updates the UI dynamically Write another async function that is called after the completed POST request. This function should retrieve data from our app, select the necessary elements on the DOM (index.html), and then update their necessary values to reflect the dynamic values for:
        - Temperature
        - Date
        - User input
___

## Rubric:
- [link](https://review.udacity.com/#!/rubrics/2655/view)
- Project Environment Setup
    - const app = express()
    - app.use _static_
    - app.use : cors
    - body-parser
    - server callback function
    - Create API credentials _[here](OpenWeatherMap.com)
- APIs and Routes
    - projectData{} app API endpoint
    - key : fetch()
    - app.get => projectData
    - There should be an asynchronous function to fetch the data from the app endpoint
    - **YOU SHOULD** be able to add an entry to the project endpoint using a POST route setup on the server side and executed on the client side as an asynchronous function. The client side function should take two arguments, the URL to make a POST to, and an object holding the data to POST. The server side function should create a new entry in the apps endpoint (the named JS object) consisting of the data received from the client side POST.
- Dynamic UI
    - The input element with the placeholder property set to “enter zip code here” should have an id of zip. The textarea included in project HTML should have an id of feelings. The button included in project HTML should have an id of generate.
    - The div with the id, entryHolder should have three child divs with the ids:
        - date
        - temp
        - content
    - Adds an event listener to an existing HTML button from DOM using Vanilla JS. In the file app.js, the element with the id of generate should have an addEventListener() method called on it, with click as the first parameter, and a named callback function as the second parameter.
    - Sets the properties of existing HTML elements from the DOM using Vanilla JavaScript. Included in the async function to retrieve that app’s data on the client side, existing DOM elements should have their innerHTML properties dynamically set according to data returned by the app route.

___
## Ask yourself _How do I_
- setup a Node environment with Express and the necessary project dependencies?
- setup a server with GET and POST routes?
- create developer credentials for a Web API?
- use the Fetch API with my credentials and user input to get dynamic data into my app routes?
- access a GET route on the server side, from a function called on the client side?
- chain Promises together
- access HTML elements with JavaScript and set their properties dynamically?