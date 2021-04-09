/* Global Variables */
const generateBtn = document.querySelector('#generate')

// Create a new date instance dynamically with JS
let d0 = new Date();
let todaysDate = `${d0.getDate()}/${d0.getMonth()+1}/${d0.getFullYear()}`

// Personal API Key for OpenWeatherMap API
const key = '574b80f9614a9b51b404b6a8bb946b48'
const baseURL = `https://api.openweathermap.org/data/2.5/weather?`

// Event Handler Function
const checkInput = async () => {
    const cityName = document.querySelector('#cityName').value
    const feelings = document.querySelector('#feelings').value
    if(!cityName){
        // to stop here: use return
        return alert('city name can not be empty')
    }
    if(!feelings){
        return alert('please tell us how you feel')
    }
    getWeatherData(cityName, feelings)
}
generateBtn.addEventListener('click', checkInput)

// Get Weather Data Function
const getWeatherData = async _ => {
    try {
        const response = await fetch(`${baseURL}q=${cityName}&appid=${key}&units=metric`)
        if (response.status === 404 || 400) {
            return alert('please enter a valid city name')
        }
        const weatherData = await response.json()
        const temp = weatherData.main.temp
    }
    
    catch(err) {
        console.log(err)
    }

    // Sending data to the server
    await fetch('/saveData', {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            date:todaysDate,
            temp: temp,
            feelings: feelings
        })
    })
}
// for test purposes
// q=london&appid=574b80f9614a9b51b404b6a8bb946b48&units=metric