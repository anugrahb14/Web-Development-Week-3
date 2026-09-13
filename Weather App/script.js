async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = document.getElementById("apiKey").value;
    const result = document.getElementById("weatherResult");

    if (city === "" || apiKey === "") {
        result.textContent = "Please enter a city and API key.";
        return;
    }

    try {
        const url =
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            encodeURIComponent(city) +
            "&appid=" +
            apiKey +
            "&units=metric";

        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            result.textContent = "City not found or invalid API key.";
            return;
        }

        result.innerHTML =
            "<h2>" + data.name + "</h2>" +
            "<p>🌡️ Temperature: " + data.main.temp + " °C</p>" +
            "<p>💧 Humidity: " + data.main.humidity + "%</p>" +
            "<p>☁️ Condition: " + data.weather[0].description + "</p>";

    } catch (error) {
        result.textContent = "Unable to fetch weather data.";
    }
}