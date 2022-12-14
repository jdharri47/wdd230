function toggleMenu() {
    document.getElementById('primarynav').classList.toggle('open');
    document.getElementById('hamburgerbtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerbtn');

x.onclick = toggleMenu