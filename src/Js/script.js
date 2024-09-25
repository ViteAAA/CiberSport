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
let tabs = document.querySelectorAll(".fifth-tabs-tablist-tab");

let words = ["one", "two", "three", "four"];
words.forEach((word) => {
  console.log(word);
  if (word === "two") {
    words.shift();
  }
});

//let tab_img = tab.querySelectorAll(".fifth-tabs-tablist-tab>img");