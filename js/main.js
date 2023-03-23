const btn = document.querySelector('.menu_btn');
const nav = document.querySelector('.nav');

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu_open');
});

const link = document.querySelector('.menu_link');

link.addEventListener('click', ()=>{
    nav.classList.toggle('menu_open');
});