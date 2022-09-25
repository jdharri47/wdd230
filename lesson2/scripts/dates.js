let lastModified = new Date(document.lastModified)

const options = {weekday:'long', day:'numeric', month:'long', year:'numeric'};

document.getElementById('date').textContent = lastmodified.toLocaleDateString('en-US', options);