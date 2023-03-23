const btn = document.querySelector('.menu_btn');
const nav = document.querySelector('.nav');

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu_open');
});