const options = {weekday:'long', day:'numeric', month:'long', year:'numeric'};

let lastmodified = new Date(document.lastModified);

document.getElementById('date').textContent = lastmodified.toLocaleDateString('en-US', options);
