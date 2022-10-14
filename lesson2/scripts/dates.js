const options = {weekday:'long', day:'numeric', month:'long', year:'numeric'};

const todaysDate = new Date();

let year = todaysDate.getFullYear;
let lastModified = new Date(document.lastModified);

document.querySelector('#lastmodified').textContent = lastmodified.toLocaleDateString('en-US', options);
document.querySelector('#year').textContent = year