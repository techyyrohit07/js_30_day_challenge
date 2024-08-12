const API_key = `ecfe27edb56e3df6efb4cf27de634d68`

const cityName = document.getElementById('city-name')
const temp = document.getElementById('temp')
const weatherCondition = document.getElementById
('weather-condition')
const weatherIcon = document.getElementById('weather-icon')

async function getWeather(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`

    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);
        displayData(data)
        
    } catch (error) {
        console.log(error);
        
    }
}


function displayData(data) {

    cityName.innerText = data.name
    temp.innerText = data.main.temp.toFixed(1) +'°C' 
    weatherCondition.innerText = data.weather[0].main

    let iconCode = data.weather[0].icon
    let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`

    weatherIcon.src = iconUrl
}

document.getElementById('button').addEventListener('click', () => {
    const city = document.getElementById('input').value
    if(city){
        getWeather(city)
        getForecastData(city)
    }
})



async function getForecastData(city){
    
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}&units=metric`

    try {
        const response = await fetch(forecastUrl)
        if (!response.ok) {
            throw new Error("City not found")
        }
        const data = await response.json()
        console.log(data);

        displayForecastData(data.list)
        
    } catch (error) {
        console.log(error.message);
        
    }
}


function displayForecastData(forecastData){
       const forecastContainer = document.getElementById('forecast-info')
       forecastContainer.innerHTML = ''

       const dailyForecast = {}

       forecastData.forEach(item => {
            const date = new Date(item.dt_txt).toLocaleDateString('en-us',{
                weekday : "long",
                month: "short",
                day: "numeric"
            })

            if (!dailyForecast[date]) {
                dailyForecast[date] = {
                    temp : item.main.temp.toFixed(1), 
                    weather : item.weather[0].description,
                    icon : item.weather[0].icon 
                }
            }
       });

       for (let [date, {temp, weather, icon}] of Object.entries(dailyForecast)) {
            const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`

            const dayForecast = `
                <div class="forecast-day">
                <h3>${date}</h3>
                <img src="${iconUrl}" alt="Weather icon">
                <p>Temp: ${temp} °C</p> 
                <p>Condition: ${weather.charAt(0).toUpperCase() + weather.slice(1)}</p>
            </div>
            `
            forecastContainer.innerHTML += dayForecast
       }

}