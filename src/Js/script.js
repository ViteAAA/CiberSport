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
const btn_r = document.querySelector("#right");
const btn_l = document.querySelector("#left");
let slideCount = 0;

//function for change tab
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

//function for swipe tab -this to next-
function nextSlide(e) {
  let i = 0;
  for(i = 0; i < tabs.length; i++) {
    if(tabs[i].classList.contains("act")) {
      break;
    }
  }
  slideCount = i;
  slideCount++;
  if (slideCount >= content.length) {
    slideCount = 0;
  }
  let act_e = document.querySelector(".act");
  let tab_img = act_e.querySelectorAll(".fifth-tabs-tablist-tab__logo");
  tab_img.forEach(i => i.classList.toggle("hidden"));
  document.querySelector(".act").classList.remove("act");
  tabs[slideCount].classList.add("act");
  act_e = document.querySelector(".act");
  tab_img = act_e.querySelectorAll(".fifth-tabs-tablist-tab__logo");
  tab_img.forEach(i => i.classList.toggle("hidden"));

  content.forEach(item => item.classList.add("hidden"));
  content[slideCount].classList.remove("hidden");
}

//function for swipe tab -this to prev-
function prevSlide(e) {
  let i = 0;
  for(i = 0; i < tabs.length; i++) {
    if(tabs[i].classList.contains("act")) {
      break;
    }
  }
  slideCount = i;
  slideCount--;
  if (slideCount < 0) {
    slideCount = content.length - 1;
  }
  let act_e = document.querySelector(".act");
  let tab_img = act_e.querySelectorAll(".fifth-tabs-tablist-tab__logo");
  tab_img.forEach(i => i.classList.toggle("hidden"));
  document.querySelector(".act").classList.remove("act");
  tabs[slideCount].classList.add("act");
  act_e = document.querySelector(".act");
  tab_img = act_e.querySelectorAll(".fifth-tabs-tablist-tab__logo");
  tab_img.forEach(i => i.classList.toggle("hidden"));
  
  content.forEach(item => item.classList.add("hidden"));
  content[slideCount].classList.remove("hidden");
}

btn_r.addEventListener("click", nextSlide);
btn_l.addEventListener("click", prevSlide);
//end of tabs

//FAQ
const titles = document.querySelectorAll(".eighth-quest");
let text = document.querySelectorAll(".eighth-quest>span");

//document.querySelectorAll(".eighth-quest>span")
titles.forEach(item => item.addEventListener("click", function() {
  titles.forEach(el => el.classList.remove("quest-hid"));
  titles.forEach(e => {
    if (e.classList.contains("quest-act")) {
      e.classList.add("quest-hid");
    }
  });
  if (item.classList.contains("quest-act")) {
    item.classList.remove("quest-act");
    const n_text = item.querySelector(".eighth-quest>span");
    n_text.classList.remove("span-act");
  }
  else {
    titles.forEach(element => element.classList.remove("quest-act"));
    text.forEach(i => i.classList.remove("span-act"));
    const n_text = item.querySelector(".eighth-quest>span");
    n_text.classList.add("span-act");
    item.classList.add("quest-act");
  }
}));



