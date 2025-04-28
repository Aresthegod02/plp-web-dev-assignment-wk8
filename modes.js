const body = document.querySelector('body'),
modeIconSun = document.querySelector('.fa-sun'),
modeIconMoon = document.querySelector('.fa-moon');

let search = document.querySelector('.searchBox'),
searchInput = document.querySelector('.search');

searchInput.style.display = 'none'

let mode = localStorage.getItem('mode');
if(mode == null){
    localStorage.setItem('mode','')
}
body.classList.add(mode)

body.classList.contains('dark') ? modeIconMoon.style.display = 'none' : modeIconSun.style.display = 'none';


function switchMode(){
    if(localStorage.getItem('mode') == ''){
        localStorage.setItem('mode','dark');
        body.classList.add('dark');
        modeIconMoon.style.display = 'none';
        modeIconSun.style.display = 'inline';
    }
    else{
        localStorage.setItem('mode','');
        body.classList.remove('dark');
        modeIconSun.style.display = 'none';
        modeIconMoon.style.display = 'inline';
        console.log(mode);
    }
    
}
console.log(getBoundingClientRect().top)