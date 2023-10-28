const apiKey = "8767d8f1704bdf80ae0afb39d6741411";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

var temperature = document.querySelector("#temperature");
var city = document.querySelector("#city");
var humidity = document.querySelector("#humidity");
var wind = document.querySelector("#wind");
var searchBox = document.querySelector("#search input");
var searchBtn = document.querySelector("#search button");
var weatherIcon = document.querySelector("#weather-icon");

async function checkWeather(cityName){
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);

    if(response.status === 404){
        document.querySelector("#error").style.display = "block";
        document.querySelector("#weather").className = "d-none";
    }
    else{
        var data = await response.json();

        console.log(data);

        temperature.innerHTML = Math.round(data.main.temp) + "°C";
        city.innerHTML = data.name;
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + "Km/h";

        if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";
        }
        else if(data.weather[0].main == "Haze"){
            weatherIcon.src = "images/haze.png";
        }


        document.querySelector("#weather").className = "d-block";
        document.querySelector("#error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
