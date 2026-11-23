const url= "https://api.open-meteo.com/v1/forecast?latitude=35.22709&longitude=-80.84313&current=temperature_2m,is_day,wind_speed_10m&timezone=auto&wind_speed_unit=mph&temperature_unit=fahrenheit";
const button = document.getElementById("check-btn");
const weatherArea = document.getElementById("weather");

async function getWeather() {
  weatherArea.textContent = " ";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

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
  time.textContent = "Time: " + new Date(data.current.time).toLocaleString();
  weatherArea.appendChild(time);
}
button.addEventListener("click", getWeather);


