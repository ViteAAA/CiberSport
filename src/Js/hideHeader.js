//фукция срабатывающая при взаимодействии с колесиком
window.addEventListener('wheel', function(e) {
    if (this.document.querySelector('.footer').classList.contains('swiper-slide-active')) {
      document.querySelector('header').style.display = 'none';
    } else {
      document.querySelector('header').style.display = 'block';
    }
  });
  
  const pagination = document.querySelectorAll('.mainp>span');
  // функция при нажатии на последний элемент списка
  pagination.forEach(element => element.addEventListener('click', function() {
    if (pagination[pagination.length - 1] == element) {
      document.querySelector('header').style.display = 'none';
    } else {
      document.querySelector('header').style.display = 'block';
    }
}));