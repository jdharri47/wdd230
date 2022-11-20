const date = new Date(Date.now())


article = document.querySelector('#message');

let weekday = date.getDay();

/* Banner */

if (weekday === 1 || weekday === 2){
    article.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
    article.setAttribute('class', 'banner-message');
}

/* Script for windchill*/
const temp = parseFloat(document.querySelector("#the-temp").textContent);
const speed = parseFloat(document.querySelector("#the-windspeed").textContent);
const f = 13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16
if (temp <= 10 && speed > 4.8) {
windchill= f.toFixed(1);
}
else {
    windchill = "NA";
}
document.getElementById("the-windchill").innerHTML = windchill;

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.4555&lon=-109.5287&units=imperial&appid=180d8ec822d7fe540e4152c55307d99a';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherData) {
    const temperature = document.querySelector('#the-temp');
    const wind = document.querySelector('#the-windspeed');
    const weatherIcon = document.querySelector('#weather-icon');
    const description = document.querySelector('#description-temperature');

    const currentTemp = weatherData.main.temp.toFixed(0);
    const windspeed = weatherData.wind.speed;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    temperature.textContent = currentTemp;
    wind.textContent = windspeed;
    description.textContent = desc;

}