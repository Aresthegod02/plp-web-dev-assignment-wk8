const body = document.querySelector('body'),
modeIconSun = document.querySelector('.fa-sun'),
modeIconMoon = document.querySelector('.fa-moon');

let mode = localStorage.getItem('mode');
if(mode == null){
    localStorage.setItem('mode','light')
}
body.classList.add(mode);


function switchMode(){
    if(mode == 'light'){
        localStorage.setItem('mode','dark');
        body.classList.add('dark');
        modeIconMoon.style.display = 'inline';
        modeIconMoon.style.display = 'none';
    }else{
        localStorage.setItem('mode','light');
        body.classList.toggle('dark');
        modeIconMoon.style.display = 'none';
        modeIconMoon.style.display = 'inline';
    }
}
