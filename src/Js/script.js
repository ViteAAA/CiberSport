var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    mousewheel: true,
    pagination: {
      el: ".mainp",
      clickable: true,
    },
});

// users slider
var users = new Swiper(".users", {
    cssMode: true,
    direction: "horizontal",
    navigation: {
      nextEl: ".thirdbnf",
      prevEl: ".thirdbpf",
    },
    pagination: {
      el: ".thirdpf",
    },
});
// organizations slider
var org = new Swiper(".org", {
  cssMode: true,
  direction: "horizontal",
  navigation: {
    nextEl: ".thirdbns",
    prevEl: ".thirdbps",
  },
  pagination: {
    el: ".thirdps",
  },
});
//comands and clubs
var clubs = new Swiper(".clubs", {
  cssMode: true,
  direction: "horizontal",
  navigation: {
    nextEl: ".thirdbnt",
    prevEl: ".thirdbpt",
  },
  pagination: {
    el: ".thirdpt",
  },
});
//arena
var arena = new Swiper(".arena", {
  cssMode: true,
  direction: "horizontal",
  navigation: {
    nextEl: ".thirdbnfo",
    prevEl: ".thirdbpfo",
  },
  pagination: {
    el: ".thirdpfo",
  },
});

//tabs 
const tabs = document.querySelectorAll(".fifth-tabs-tablist-tab");
const content = document.querySelectorAll(".fifth-tabs-content__text");


function MousClick (e) {
  let act_e = document.querySelector(".act");
  let tab_img = act_e.querySelectorAll(".fifth-tabs-tablist-tab__logo");
  tab_img.forEach(i => i.classList.toggle("hidden"));
  tabs.forEach(item => item.classList.remove("act"));
  e.currentTarget.classList.add("act");
  act_e = document.querySelector(".act");
  tab_img = act_e.querySelectorAll(".fifth-tabs-tablist-tab__logo");
  tab_img.forEach(i => i.classList.toggle("hidden"));

  content.forEach(element => element.classList.add("hidden"));
  const TabsTitleTarget = e.currentTarget.getAttribute('data-tab');
  document.getElementById(TabsTitleTarget).classList.remove("hidden");
}

tabs.forEach(item => item.addEventListener('click', MousClick));




