const btn = document.querySelector('.menu_btn');
const nav = document.querySelector('.nav');

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu_open');
});

const link = document.querySelectorAll('.menu_link');


for (let i = 0; i < 3; i++ ) {
link[i].addEventListener('click', ()=>{
    nav.classList.toggle('menu_open');
});
};