/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = ()=>{
    const header = document.getElementById("header");
    this.scrollY >= 50 ? header.classList.add("scroll-header")
                        : header.remove("scroll-header")
}


/*=============== MIXITUP FILTER PORTFOLIO ===============*/

let mixerPortfolio = mixitup('.work__container',{
    
    selectors:{
        target: '.work__card'
    },
    animation:{
        duration:300
    }
});

/* Link active work */ 
const linkwork = document.querySelectorAll('.work__item')

function activelink(){
    linkwork.forEach(L=> L.classList.remove('active-work'));
    this.classList.add('active-work')
    console.log("function");
}
linkwork.forEach(l => l.addEventListener('click', activelink));
console.log(linkwork)
/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/

