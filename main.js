function handleKey(event) {
    if (event.key === "Enter") {
        checkWeather();
    }
}
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

async function checkWeather(){

    const cityname = document.getElementById("cityname").value.trim();
    console.log(cityname)
    const weatherIcon = document.querySelector(".weather-icon")

    const response = await fetch(apiUrl + `q=${cityname}&appid=${apikey}&units=metric`);
    var data = await response.json();
    console.log(data)
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".condition").innerHTML = `${data.weather[0].main}`;


    const condition = data.weather[0].main.toLowerCase();
    if (condition === "clouds") {
    weatherIcon.src = "images/clouds.png";
    } else if (condition === "clear") {
    weatherIcon.src = "images/clear.png";
    } else if (condition === "rain") {
    weatherIcon.src = "images/rain.png";
    } else if (condition === "drizzle") {
    weatherIcon.src = "images/drizzle.png";
    } else if (condition === "mist") {
    weatherIcon.src = "images/mist.png";
    }

}
