"use strict";

/* =========================
   1. HTML ELEMENTS
========================= */

const searchForm = document.getElementById("searchForm");
const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");
const message = document.getElementById("message");

const cityName = document.getElementById("cityName");
const countryName = document.getElementById("countryName");
const localDate = document.getElementById("localDate");

const weatherIcon = document.getElementById("weatherIcon");
const temperature = document.getElementById("temperature");
const weatherDescription = document.getElementById("weatherDescription");
const feelsLike = document.getElementById("feelsLike");

const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const cloudCover = document.getElementById("cloudCover");
const uvIndex = document.getElementById("uvIndex");

const forecastList = document.getElementById("forecastList");


/* =========================
   2. WEATHER CONDITIONS
========================= */

function getWeatherInfo(code, isDay = 1) {
    const weatherConditions = {
        0: {
            day: ["☀️", "Clear Sky"],
            night: ["🌙", "Clear Sky"]
        },

        1: {
            day: ["🌤️", "Mainly Clear"],
            night: ["🌙", "Mainly Clear"]
        },

        2: {
            day: ["⛅", "Partly Cloudy"],
            night: ["☁️", "Partly Cloudy"]
        },

        3: {
            day: ["☁️", "Overcast"],
            night: ["☁️", "Overcast"]
        },

        45: {
            day: ["🌫️", "Foggy"],
            night: ["🌫️", "Foggy"]
        },

        48: {
            day: ["🌫️", "Depositing Rime Fog"],
            night: ["🌫️", "Depositing Rime Fog"]
        },

        51: {
            day: ["🌦️", "Light Drizzle"],
            night: ["🌦️", "Light Drizzle"]
        },

        53: {
            day: ["🌧️", "Moderate Drizzle"],
            night: ["🌧️", "Moderate Drizzle"]
        },

        55: {
            day: ["🌧️", "Dense Drizzle"],
            night: ["🌧️", "Dense Drizzle"]
        },

        56: {
            day: ["🌧️", "Freezing Drizzle"],
            night: ["🌧️", "Freezing Drizzle"]
        },

        57: {
            day: ["🌧️", "Heavy Freezing Drizzle"],
            night: ["🌧️", "Heavy Freezing Drizzle"]
        },

        61: {
            day: ["🌧️", "Light Rain"],
            night: ["🌧️", "Light Rain"]
        },

        63: {
            day: ["🌧️", "Moderate Rain"],
            night: ["🌧️", "Moderate Rain"]
        },

        65: {
            day: ["🌧️", "Heavy Rain"],
            night: ["🌧️", "Heavy Rain"]
        },

        66: {
            day: ["🌧️", "Freezing Rain"],
            night: ["🌧️", "Freezing Rain"]
        },

        67: {
            day: ["🌧️", "Heavy Freezing Rain"],
            night: ["🌧️", "Heavy Freezing Rain"]
        },

        71: {
            day: ["🌨️", "Light Snow"],
            night: ["🌨️", "Light Snow"]
        },

        73: {
            day: ["❄️", "Moderate Snow"],
            night: ["❄️", "Moderate Snow"]
        },

        75: {
            day: ["❄️", "Heavy Snow"],
            night: ["❄️", "Heavy Snow"]
        },

        77: {
            day: ["🌨️", "Snow Grains"],
            night: ["🌨️", "Snow Grains"]
        },

        80: {
            day: ["🌦️", "Light Rain Showers"],
            night: ["🌧️", "Rain Showers"]
        },

        81: {
            day: ["🌧️", "Moderate Rain Showers"],
            night: ["🌧️", "Rain Showers"]
        },

        82: {
            day: ["⛈️", "Heavy Rain Showers"],
            night: ["⛈️", "Heavy Rain Showers"]
        },

        85: {
            day: ["🌨️", "Snow Showers"],
            night: ["🌨️", "Snow Showers"]
        },

        86: {
            day: ["❄️", "Heavy Snow Showers"],
            night: ["❄️", "Heavy Snow Showers"]
        },

        95: {
            day: ["⛈️", "Thunderstorm"],
            night: ["⛈️", "Thunderstorm"]
        },

        96: {
            day: ["⛈️", "Thunderstorm with Hail"],
            night: ["⛈️", "Thunderstorm with Hail"]
        },

        99: {
            day: ["⛈️", "Heavy Thunderstorm"],
            night: ["⛈️", "Heavy Thunderstorm"]
        }
    };

    const condition = weatherConditions[code];

    if (!condition) {
        return ["🌡️", "Weather Unavailable"];
    }

    return isDay ? condition.day : condition.night;
}


/* =========================
   3. SHOW MESSAGE
========================= */

function showMessage(text, isError = false) {
    message.textContent = text;

    message.style.color = isError
        ? "#ff8c9a"
        : "#9ba7c2";
}


/* =========================
   4. FORMAT DATE
========================= */

function formatDate(dateString) {
    const date = new Date(`${dateString}T12:00:00`);

    return date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric"
    });
}


/* =========================
   5. FETCH CITY COORDINATES
========================= */

async function getCityCoordinates(city) {
    const url = new URL(
        "https://geocoding-api.open-meteo.com/v1/search"
    );

    url.searchParams.set("name", city);
    url.searchParams.set("count", "1");
    url.searchParams.set("language", "en");
    url.searchParams.set("format", "json");

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(
            "City search service is unavailable. Please try again."
        );
    }

    const data = await response.json();

    if (!data.results || data.results.length === 0) {
        throw new Error(
            "City not found. Please check the spelling."
        );
    }

    return data.results[0];
}


/* =========================
   6. FETCH WEATHER DATA
========================= */

async function getWeatherData(latitude, longitude) {
    const url = new URL(
        "https://api.open-meteo.com/v1/forecast"
    );

    url.searchParams.set("latitude", latitude);
    url.searchParams.set("longitude", longitude);

    url.searchParams.set(
        "current",
        [
            "temperature_2m",
            "relative_humidity_2m",
            "apparent_temperature",
            "is_day",
            "weather_code",
            "cloud_cover",
            "wind_speed_10m"
        ].join(",")
    );

    url.searchParams.set(
        "daily",
        [
            "weather_code",
            "temperature_2m_max",
            "temperature_2m_min",
            "uv_index_max"
        ].join(",")
    );

    url.searchParams.set("timezone", "auto");
    url.searchParams.set("forecast_days", "5");

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(
            "Weather service is unavailable. Please try again."
        );
    }

    const data = await response.json();

    if (!data.current || !data.daily) {
        throw new Error(
            "Weather data could not be loaded."
        );
    }

    return data;
}


/* =========================
   7. UPDATE CURRENT WEATHER
========================= */

function updateCurrentWeather(city, weather) {
    const current = weather.current;

    const [icon, description] = getWeatherInfo(
        current.weather_code,
        current.is_day
    );

    cityName.textContent = city.name;
    countryName.textContent = [
        city.admin1,
        city.country
    ].filter(Boolean).join(", ");

    localDate.textContent = formatDate(
        current.time.split("T")[0]
    );

    weatherIcon.textContent = icon;

    temperature.textContent = Math.round(
        current.temperature_2m
    );

    weatherDescription.textContent = description;

    feelsLike.textContent =
        `${Math.round(current.apparent_temperature)}°C`;

    humidity.textContent =
        `${current.relative_humidity_2m}%`;

    windSpeed.textContent =
        `${Math.round(current.wind_speed_10m)} km/h`;

    cloudCover.textContent =
        `${current.cloud_cover}%`;

    const todayUV = weather.daily.uv_index_max?.[0];

    uvIndex.textContent =
        Number.isFinite(todayUV)
            ? todayUV.toFixed(1)
            : "N/A";
}


/* =========================
   8. UPDATE 5-DAY FORECAST
========================= */

function updateForecast(weather) {
    const daily = weather.daily;

    forecastList.replaceChildren();

    for (let index = 0; index < daily.time.length; index++) {
        const date = daily.time[index];

        const code = daily.weather_code[index];

        const high = daily.temperature_2m_max[index];

        const low = daily.temperature_2m_min[index];

        const uv = daily.uv_index_max?.[index];

        const [icon, description] = getWeatherInfo(code);

        const forecastItem = document.createElement("article");
        forecastItem.className = "forecast-item";

        const dayElement = document.createElement("p");
        dayElement.className = "forecast-day";
        dayElement.textContent =
            index === 0 ? "Today" : formatDate(date);

        const conditionElement = document.createElement("div");
        conditionElement.className = "forecast-condition";

        const iconElement = document.createElement("span");
        iconElement.textContent = icon;
        iconElement.setAttribute("aria-hidden", "true");

        const descriptionElement = document.createElement("span");
        descriptionElement.textContent = description;

        conditionElement.append(iconElement, descriptionElement);

        const temperaturesElement = document.createElement("div");
        temperaturesElement.className = "forecast-temperatures";

        const highElement = document.createElement("span");
        highElement.className = "forecast-high";
        highElement.textContent =
            Number.isFinite(high) ? `${Math.round(high)}°` : "--°";

        const lowElement = document.createElement("span");
        lowElement.className = "forecast-low";
        lowElement.textContent =
            Number.isFinite(low) ? `${Math.round(low)}°` : "--°";

        temperaturesElement.append(highElement, lowElement);

        const uvElement = document.createElement("p");
        uvElement.className = "forecast-uv";
        uvElement.textContent =
            Number.isFinite(uv) ? `UV ${uv.toFixed(1)}` : "UV N/A";

        forecastItem.append(
            dayElement,
            conditionElement,
            temperaturesElement,
            uvElement
        );

        forecastList.appendChild(forecastItem);
    }
}


/* =========================
   9. LOAD WEATHER
========================= */

async function loadWeather(cityQuery) {
    const city = cityQuery.trim();

    if (!city) {
        showMessage("Please enter a city name.", true);
        cityInput.focus();
        return;
    }

    searchButton.disabled = true;
    searchButton.textContent = "Loading...";

    showMessage(`Getting weather for ${city}...`);

    try {
        const location = await getCityCoordinates(city);

        const weather = await getWeatherData(
            location.latitude,
            location.longitude
        );

        updateCurrentWeather(location, weather);
        updateForecast(weather);

        showMessage(
            `Weather updated for ${location.name}.`
        );
    } catch (error) {
        console.error("Weather App Error:", error);

        showMessage(
            error.message ||
            "Something went wrong. Please try again.",
            true
        );
    } finally {
        searchButton.disabled = false;
        searchButton.textContent = "Search";
    }
}


/* =========================
   10. SEARCH EVENT
========================= */

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    loadWeather(cityInput.value);
});


/* =========================
   11. INITIAL WEATHER
========================= */

loadWeather("Lucknow");