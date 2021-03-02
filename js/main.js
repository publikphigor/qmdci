//fixed header 
const header = document.querySelector('header');
const navbarList = document.querySelectorAll('nav a');
const lp = document.querySelector('.landing-page');

const slideObserverOptions = {};
const slideObserver = new IntersectionObserver((entries, slideObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
}, slideObserverOptions);

slideObserver.observe(lp);

//navbar
const openNavbar = document.querySelector('.burger');
const closeNavbar = document.querySelector('.close-nav-btn');
const overlay = document.querySelector('.overlay');
const navbar = document.querySelector('.mb-navbar');

openNavbar.onclick = ()=> {
    navbar.classList.add('active');
    overlay.classList.add('active');
};

closeNavbar.onclick = ()=> {
    navbar.classList.remove('active');
    overlay.classList.remove('active');
};


//countdown 
let countdownDate = new Date("March 30, 2021 17:00:00").getTime();
const x = setInterval(()=> {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    let days = parseInt(Math.floor(distance / (1000 * 60 * 60 * 24)));
    let hours = parseInt(Math.floor(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = parseInt(Math.floor(distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = parseInt(Math.floor(distance % (1000 * 60)) / (1000));

    document.querySelector('#day').innerHTML = days;
    document.querySelector('#hour').innerHTML = hours;
    document.querySelector('#minute').innerHTML = minutes;
    document.querySelector('#second').innerHTML = seconds;

}, 1000);


