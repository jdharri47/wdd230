document.querySelector('#©').textContent = new Date(Date.now()).getFullYear();

const opciones = 
{ weekday: 'long', 
year: 'numeric', 
month: 'numeric', 
day: 'numeric' };

document.querySelector('#dateMod').textContent = 
new Date(Date.now()).toLocaleString();

const opciones2 = 
{ weekday: 'long', 
year: 'numeric', 
month: 'long', 
day: 'numeric' };


document.querySelector('#datetime').textContent = 
new Date(Date.now()).toLocaleString('en-US',opciones2);



function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburguerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburguerBtn');

x.onclick = toggleMenu;

document.querySelector('.call-to-action').addEventListener('click',() => location.assign('https://jdharri47.github.io/wdd230/chamber/join.html'));
document.querySelector('.join-us').addEventListener('click',() => location.assign('https://jdharri47.github.io/wdd230/chamber/join.html'));