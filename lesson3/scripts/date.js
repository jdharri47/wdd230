const options = {weekday:'long', day:'numeric', month:'long', year:'numeric'};
const todaysDate = new Date(Date.now());

let lastmodified = new Date(document.lastModified);

let thisYear = todaysDate.getFullYear();

document.querySelector('#year').textContent = thisYear;
document.querySelector('#lastmodified').textContent = lastmodified.toLocaleDateString('en-Uk', options);
