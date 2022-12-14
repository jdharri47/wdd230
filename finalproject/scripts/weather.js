const url ='https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&units=imperial&appid=180d8ec822d7fe540e4152c55307d99a';

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

const date = new Date();

function displayResults(weatherData) {
    const options = { weekday: 'long', 
    year: 'numeric', 
    month: 'numeric', 
    day: 'numeric' };
    const weekday = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday","Friday","Saturday"]
    const todaysDate = document.querySelector(".todaysdate");
    const humidity = document.getElementById("humidity");
    const temp = document.getElementById("temp");
    const condition = document.querySelector("#condition");
    const description = document.querySelector("#description")

    for (i=0;i<3;i++) {
        document.getElementById(`temp${i+1}`).innerHTML = `${Number(weatherData.list[i*8+1].main.temp).toFixed(0)}°F`;
        document.getElementById(`weather-icon${i+1}`).src = `https://openweathermap.org/img/w/${weatherData.list[i*8+1].weather[0].icon}.png`;
        document.getElementById(`day${i+1}`).innerHTML = weekday[checkDay(i+1)];
    }

    todaysDate.innerHTML = new Date(Date.now()).toLocaleString("en-US", options);
    humidity.innerHTML = weatherData.list[0].main.humidity;
    temp.innerHTML = weatherData.list[0].main.temp;
    condition.setAttribute("src",`https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`);
    condition.setAttribute("alt", weatherData.list[0].weather[0].description);
    description.textContent = weatherData.list[0].weather[0].description
}

function checkDay(day) {
    if (day + date.getDay() > 6) {
        return day + date.getDay()-7;
    }
    else {
        return day + date.getDay();
    }
}
