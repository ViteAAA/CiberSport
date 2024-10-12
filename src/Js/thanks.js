var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    mousewheel: true,
    pagination: {
      el: ".mainp",
      clickable: true,
    },
});

//slider for special people
var people = new Swiper(".people", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});