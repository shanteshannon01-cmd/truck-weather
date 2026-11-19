const url = "https://api.open-meteo.com/v1/forecast?latitude=35.22709&longitude=-80.84313&hourly=temperature_2m,wind_speed_10m&current=temperature_2m&temperature_unit=fahrenheit&windspeed_unit=mph";
const button =document.getElementById("check-btn");
const weatherArea = document.getElementById("weather");

async function getWeather(){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
 
    const temp = createElement("p");
 temp.className = "fs-4";
 temp.textContent = "temperature: " + data.current.temperature_2m + "°F";

}
 button.addEventListener("click", getWeather);

 