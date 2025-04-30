const body = document.querySelector('body');
const modeIconSun = document.querySelector('.fa-sun');
const modeIconMoon = document.querySelector('.fa-moon');
const searchInput = document.querySelector('.search');

searchInput.style.display = 'none';

let mode = localStorage.getItem('mode');
if (!mode) {
  localStorage.setItem('mode', '');
}

body.classList.add(mode);

function updateIcons() {
  if (body.classList.contains('dark')) {
    modeIconSun.style.display = 'inline';
    modeIconMoon.style.display = 'none';
  } else {
    modeIconSun.style.display = 'none';
    modeIconMoon.style.display = 'inline';
  }
}

updateIcons();

function switchMode() {
  if (localStorage.getItem('mode') === '') {
    localStorage.setItem('mode', 'dark');
    body.classList.add('dark');
  } else {
    localStorage.setItem('mode', '');
    body.classList.remove('dark');
  }
  updateIcons();
}
