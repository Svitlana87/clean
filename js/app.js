
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

// accordion

let accordion = document.getElementsByClassName('accordion');
let i;
for (i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function () {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
        
    }
}

// resources_Carousel

let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// testimonials_Carousel

let slideIndex_t = 1;
showSlides_t(slideIndex_t);
// Next/previous controls
function plusSlides_t(n) {
  showSlides_t(slideIndex_t += n);
}
// Thumbnail image controls
function currentSlide_t(n) {
  showSlides_t(slideIndex_t = n);
}
function showSlides_t(n) {
  let i;
  let slides_t = document.getElementsByClassName("mySlides_t");
  let dots_t = document.getElementsByClassName("dot_t");
  if (n > slides_t.length) {slideIndex_t = 1}
  if (n < 1) {slideIndex_t = slides_t.length}
  for (i = 0; i < slides_t.length; i++) {
    slides_t[i].style.display = "none";
  }
  for (i = 0; i < dots_t.length; i++) {
    dots_t[i].className = dots_t[i].className.replace(" active", "");
  }
  slides_t[slideIndex_t-1].style.display = "block";
  dots_t[slideIndex_t-1].className += " active";
}

// burder
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.burger_header_wrap');

burger.addEventListener('click', function(){
    navMenu.classList.toggle('open_menu')
})
