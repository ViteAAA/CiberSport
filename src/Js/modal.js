const inputCont = document.querySelectorAll('.custom-field');
inputCont.forEach(item => item.querySelector('#email-field').addEventListener('focus', function () {
    item.querySelector('.placeholder').style.color = '#fff';
}));
inputCont.forEach(item => item.querySelector('#email-field').addEventListener('blur', function () {
    item.querySelector('.placeholder').style.color = 'rgba(255, 255, 255, 0.5)';
}));