/* Global Variables */
const generateBtn = document.querySelector('#generate')
const UIdate = document.querySelector('#date')
const UItemp = document.querySelector('#temp')
const UIfeelings = document.querySelector('#feelings')

// Create a new date instance dynamically with JS
let d0 = new Date()
let todaysDate = `${d0.getDate()}/${d0.getMonth()+1}/${d0.getFullYear()}`

// Personal API Key for OpenWeatherMap API
const key = '574b80f9614a9b51b404b6a8bb946b48'
const baseURL = `https://api.openweathermap.org/data/2.5/weather?`


// Event Handler Function
const checkInput = event => {
    event.preventDefault()

    const zipCode = document.querySelector('#zipCode').value
    
    if(!zipCode){
        // to stop here: use return
        return alert('zip code can not be empty')
    }
    if(!feelings){
        return alert('please tell us how you feel')
    }
    
    getWeatherData(baseURL, key, zipCode)
    .then(userOutput => {
        // add data to POST request
        postData('/saveData', { date: todaysDate, temp: userOutput.main.temp, feelings: UIfeelings.value })
    }).then(() => {
        updateUI()
    })
}

// Adding Event To Generate BTN 
generateBtn.addEventListener('click', checkInput)

// Get Weather Data Function
const getWeatherData = async (baseURL, key, zipCode) => {
  const res = await fetch(`${baseURL}zip=${zipCode}&appid=${key}&units=metric`)
  try {
    const userOutput = await res.json()
    return userOutput
  } catch (e) {
      console.log(`Error: ${e}`)
  }
}

// Sending data to the server
const postData = async (url = '', data = {}) => {
  const req = await fetch(url, {
      method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
        date: data.date,
        temp: data.temp,
        feelings: data.feelings
    })
  })
  
  try {
      const newData = await req.json()
      return newData
  }
  catch (e) {
      console.log(`Error: ${e}`)
    }
}

const updateUI = async () => {
    const req = await fetch('/data')
    try {
        const data = await req.json()
        UIdate.innerHTML = data.date
        UItemp.innerHTML = data.temp
        UIfeelings.innerHTML = data.feelings
    }
    catch (e) {
        console.log(`Error: ${e}`)
    }
}
