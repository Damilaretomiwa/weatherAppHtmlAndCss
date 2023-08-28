let form = document.getElementById("use_press")
let key_I = "1dfb6d7b802060dd7cbf86392bbebb2d";
let defaultDisplay = () => {
    try {
        let date = new Date();
        document.getElementById("date_time").innerText = date
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${"wuse"}&appid=${key_I}`,
            {"method": "GET"})
            .then(response => response.json())
            .then(weather => {
                document.getElementById("temperature").innerText = "temperature: " + weather.main.temp + "°F"
                document.getElementById("description").innerText = "weather description: " + weather.weather[0].description
                document.getElementById("country name").innerText = "country: " + weather.sys.country
            }).catch(error =>{
            document.getElementById("country name").innerText = "Bad request gotten";
        })
    }catch (error){
        document.getElementById("country name").innerText = "Bad request gotten";
    }
}
defaultDisplay()
let userCityChoice = () => {
    let userCity = document.getElementById("city")
    return userCity.value
}
let getIt= ( city) => {
    let key_I = "1dfb6d7b802060dd7cbf86392bbebb2d";
    try {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key_I}`, {
            "method" : "GET"
        }).then(response => response.json())
            .then(weather => {
                document.getElementById("temperature").innerText = "temperature: "+weather.main.temp+"°F"
                document.getElementById("description").innerText = "weather description: "+weather.weather[0].description
                document.getElementById("country name").innerText = "country: "+weather.sys.country
            }).catch(error =>{
            document.getElementById("temperature").innerText = ""
            document.getElementById("description").innerText = ""
            document.getElementById("country name").innerText = "";
            document.getElementById("bad_request").innerText = "City not found"

        })
    }catch (error){
        document.getElementById("temperature").innerText = "Bad request gotten"
        document.getElementById("description").innerText = "Bad request gotten"
        document.getElementById("country name").innerText = "Bad request gotten";
        document.getElementById("bad_request").innerText = "City not found"
    }
}
form.addEventListener("submit", (event)=>{
    event.preventDefault()
    let choice = userCityChoice();
    getIt(choice)
})