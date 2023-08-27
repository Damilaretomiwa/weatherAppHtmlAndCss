



let form = document.getElementById("use_press")
let weather_forecast = new XMLHttpRequest();
let userCityChoice = () => {
    let userCity = document.getElementById("city")
    return userCity.value
}
let getIt= ( city) => {
    let key_I = "1dfb6d7b802060dd7cbf86392bbebb2d";
    weather_forecast.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key_I}`)
    weather_forecast.send()
    weather_forecast.onload = () => {
        if (weather_forecast.status === 200) {
            console.log(weather_forecast.response)
            let wea = JSON.parse(weather_forecast.response)
            document.getElementById("temperature").innerText = "temperature: "+wea.main.temp
            document.getElementById("description").innerText = "weather description: "+wea.weather[0].description
            document.getElementById("country name").innerText = "country: "+wea.sys.country
            // console.log("Temperature is", wea.main.temp)
            // console.log("Maximum Temp is", wea.main.temp_max)
            // console.log("Minimum Temp is", wea.main.temp_min)
            // console.log("weather description", wea.weather[0].description)
        } else {
            console.log("Bad request gotten");
        }
    }
}
form.addEventListener("submit", (event)=>{
    event.preventDefault()
    let choice = userCityChoice();
    getIt(choice)
})