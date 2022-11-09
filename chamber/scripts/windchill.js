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