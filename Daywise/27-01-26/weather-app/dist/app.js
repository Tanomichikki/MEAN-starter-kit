"use strict";
const API_KEY = "62e52cd2d01dc0c2d86b6c41f33ee570"; //  Replace this with your API Key
const cityInput = document.getElementById("city");
const countryInput = document.getElementById("country");
const resultDiv = document.getElementById("result");
async function getWeatherAndAQI() {
    const city = cityInput.value.trim();
    const country = countryInput.value.trim();
    if (!city || !country) {
        alert("Please enter city and country code");
        return;
    }
    try {
        // Weather API
        const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        if (!weatherRes.ok)
            throw new Error("City not found");
        const weatherData = await weatherRes.json();
        const lat = weatherData.coord.lat;
        const lon = weatherData.coord.lon;
        // AQI API
        const aqiRes = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        const aqiData = await aqiRes.json();
        displayResult(weatherData, aqiData);
    }
    catch (error) {
        resultDiv.innerHTML = `<div class="alert alert-danger">Failed to fetch data</div>`;
    }
}
function displayResult(weather, aqi) {
    const aqiValue = aqi.list[0].main.aqi;
    const aqiText = getAQIText(aqiValue);
    resultDiv.innerHTML = `
    <div class="alert alert-success">
      <h5>${weather.name}</h5>
      <p>🌡 Temperature: ${weather.main.temp} °C</p>
      <p>☁ Weather: ${weather.weather[0].description}</p>
      <p>🌫 AQI: <strong>${aqiText}</strong></p>
    </div>
  `;
}
function getAQIText(aqi) {
    switch (aqi) {
        case 1: return "Good 😊";
        case 2: return "Fair 🙂";
        case 3: return "Moderate 😐";
        case 4: return "Poor 😷";
        case 5: return "Very Poor ☠️";
        default: return "Unknown";
    }
}
