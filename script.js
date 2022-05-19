const apiKey = "360df601d8d14cf3f74cbab24800d7c0";

const convertToCelsius = (temp) => { 
    const result = `${(temp - 273.15).toFixed(0)}`;
    return result;
}

const showWeather = (weather) => {
    console.log(weather);
    const city = document.getElementById("CityName");
    const country = document.getElementById("Country");
    const clouds = document.getElementById("Clouds");
    const humidity = document.getElementById("Humidity");
    const pressure = document.getElementById("Pressure");
    const temp = document.getElementById("Temp");
    const tempMax = document.getElementById("TempMax");
    const tempMin = document.getElementById("TempMin");
    const windSpeed = document.getElementById("WindSpeed");

    city.textContent = weather.name;
    country.textContent = weather.sys.country;
    clouds.textContent = weather.clouds.all;
    humidity.textContent = weather.main.humidity;
    pressure.textContent = weather.main.pressure;
    temp.textContent = weather.main.temp;
    tempMax.textContent = weather.main.temp_max;
    tempMin.textContent = weather.main.temp_min;
    windSpeed.textContent = weather.wind.speed;
    temp.textContent = convertToCelsius(weather.main.temp);
}

const getWeatherByLocation = (info) => {
    const lon = info.coords.longitude;
    const lat = info.coords.latitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(url)
    .then((res) => res.json())
    .then((res) => showWeather(res));
}

const getMyLocation = () => {
    navigator.geolocation.getCurrentPosition((pos)=>getWeatherByLocation(pos));
}

getMyLocation();