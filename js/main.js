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