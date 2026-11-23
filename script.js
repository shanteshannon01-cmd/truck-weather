const url= "https://api.open-meteo.com/v1/forecast?latitude=35.22709&longitude=-80.84313&current=temperature_2m,is_day,wind_speed_10m,weather_code&timezone=auto&wind_speed_unit=mph&temperature_unit=fahrenheit";
const button = document.getElementById("check-btn");
const weatherArea = document.getElementById("weather");

async function getWeather() {
  weatherArea.textContent = " ";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  const icon = document.createElement("p");
  icon.className = "fs-4";
  icon.textContent = getIcon(data.current.weather_code);
  weatherArea.appendChild(icon);

  const temp = document.createElement("p");
  temp.className = "fs-4";
  temp.textContent =
    "Temperature: " +
    data.current.temperature_2m +
    " " +
    data.current_units.temperature_2m;
  weatherArea.appendChild(temp);

  const wind = document.createElement("p");
  wind.className = "fs-4";
  wind.textContent =
    "Wind Speed: " +
    data.current.wind_speed_10m +
    " " +
    data.current_units.wind_speed_10m;
  weatherArea.appendChild(wind);

  const time = document.createElement("p");
  time.className = "fs-4";
  time.textContent = "Time: " + new Date(data.current.time).toLocaleString() + " " + data.timezone;
  weatherArea.appendChild(time);
}
button.addEventListener("click", getWeather);


function getIcon(code) {
 if (code === 0) {
  return "☀️ Clear sky";
} else if (code === 1) {
  return "🌤️ Mainly clear";
} else if (code === 2) {
  return "⛅ Partly cloudy";
} else if (code === 3) {
  return "☁️ Overcast";
} else if (code === 45) {
  return "🌫️ Fog";
} else if (code === 48) {
  return "🌫️❄️ Depositing rime fog";
} else if (code === 51) {
  return "🌦️ Light drizzle";
} else if (code === 53) {
  return "🌦️ Moderate drizzle";
} else if (code === 55) {
  return "🌧️ Dense drizzle";
} else if (code === 56) {
  return "🌧️🧊 Light freezing drizzle";
} else if (code === 57) {
  return "🌧️🧊 Dense freezing drizzle";
} else if (code === 61) {
  return "🌦️ Slight rain";
} else if (code === 63) {
  return "🌧️ Moderate rain";
} else if (code === 65) {
  return "🌧️🌧️ Heavy rain";
} else if (code === 66) {
  return "🌧️🧊 Light freezing rain";
} else if (code === 67) {
  return "🌧️🧊 Heavy freezing rain";
} else if (code === 71) {
  return "🌨️ Slight snowfall";
} else if (code === 73) {
  return "❄️ Moderate snowfall";
} else if (code === 75) {
  return "❄️❄️ Heavy snowfall";
} else if (code === 77) {
  return "🌨️ Snow grains";
} else if (code === 80) {
  return "🌦️ Slight rain showers";
} else if (code === 81) {
  return "🌧️ Moderate rain showers";
} else if (code === 82) {
  return "⛈️ Violent rain showers";
} else if (code === 85) {
  return "🌨️ Slight snow showers";
} else if (code === 86) {
  return "❄️🌨️ Heavy snow showers";
} else if (code === 95) {
  return "⛈️ Thunderstorm";
} else if (code === 96) {
  return "⛈️🧊 Thunderstorm with slight hail";
} else if (code === 97) {
  return "⛈️⚡ Heavy thunderstorm";
} else if (code === 99) {
  return "⛈️🧊 Heavy hail thunderstorm";
}
}