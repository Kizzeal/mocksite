const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener('click', ()=> {
  primaryNav.hasAttribute("data-visible") ? navToggle.setAttribute("aria-expanded", false):navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
})


const slider = new A11YSlider(document.querySelector(".slider"),{
  adaptiveHeight: false,
  dots: true,
  arrows: false,
  // centerMode: true,
  responsive: {
    // 768: {
    //   slidesToShow: 2,
    //   arrows: false
    // },
    // 960: {
    //   disable: true // slider disabled 960px to 1279px
    // },
    480: {
      // disable: false,
      // slidesToShow: 4,
      dots: false, // dots enabled 1280px and up
      arrows: true,
    }
}})