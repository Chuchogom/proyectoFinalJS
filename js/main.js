/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}

/*=============== POPULAR SWIPER ===============*/

let swiperPopular = new Swiper(".popular__container", {
    loop: true,
    spaceBetween: 24,
    sliderPerView: 'auto',
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },

    breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1024: {
          spaceBetween: 48,
        },
    },
});

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup('.featured__content', {
    selectors: {
        target: '.featured__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active featured */ 
const linkFeatured = document.querySelectorAll('.featured__item')

function activeFeatured(){
    linkFeatured.forEach(l=> l.classList.remove('active-featured'))
    this.classList.add('active-featured')
}

linkFeatured.forEach(l=> l.addEventListener('click', activeFeatured))

/*=============== SHOW CLOCK ===============*/ 
/*import {digitalCLock} from "./vistas/clock.js"; */

function digitalCLock(clock, btnPlay, btnStop){
    let clockTempo;

    document.addEventListener("click", (e) => {
        if(e.target.matches(btnPlay)){
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                document.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            }, 1000);

            e.target.disable = true;
        }

        if(e.target.matches(btnStop)){
            clearInterval(clockTempo);
            document.querySelector(clock).innerHTML = null;
            document.querySelector(btnPlay ).disable = false;
        }
        });
}

document.addEventListener("DOMContentLoaded", (e) => {
    digitalCLock ("#reloj", "#clock-on" ,"#clock-off");
    });


/*=============== NEW USERS ===============*/ 
let url = 'https://jsonplaceholder.typicode.com/users/';
        fetch(url)
            .then( response => response.json() )
            .then( data => mostrarData(data) )
            .catch( error => console.log(error) )

        const mostrarData = (data) => {
            console.log(data)
            let body = ""
            for (var i = 0; i < data.length; i++) {      
               body+=`<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`
            }
            document.getElementById('data').innerHTML = body
            //console.log(body)
        }



/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sc = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sc.reveal(`.clock__title, .home__title, .popular__container , .features__img, .featured__filters, .footer__content`)
sc.reveal(`.home__subtitle`,{delay: 500})
sc.reveal(`.home__elec`,{delay: 600})
sc.reveal(`.home__img`,{delay: 800})
sc.reveal(`.home__car-data`,{delay: 900, interval: 300, origin: 'left'})
sc.reveal(`.home__button`,{delay: 1000,origin: 'bottom'})
sc.reveal(`.about__group, .offer__data`,{origin: 'top'})
sc.reveal(`.about__data, .offer__img`,{origin: 'bottom'})
sc.reveal(`.features__map`,{delay: 600, origin: 'bottom'})
sc.reveal(`.features__card, .container__table`,{interval: 350, origin: 'left'})
sc.reveal(`.featured__card, .logos__img`,{interval: 350, origin: 'right'})








