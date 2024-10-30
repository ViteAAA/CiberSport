const inputCont = document.querySelectorAll('.custom-field');
inputCont.forEach(item => item.querySelector('#email-field').addEventListener('focus', function () {
    item.querySelector('.placeholder').style.color = '#fff';
}));
inputCont.forEach(item => item.querySelector('#email-field').addEventListener('blur', function () {
    item.querySelector('.placeholder').style.color = 'rgba(255, 255, 255, 0.5)';
}));
document.querySelector('.modal-bg').addEventListener("click", function () {    
    document.querySelector('.modal').classList.add('hidden');
});
document.querySelector('.register').addEventListener("click", function () {    
    document.querySelector('.modal').classList.remove('hidden');
});
document.querySelector('.modal-block__close').addEventListener("click", function () {    
    document.querySelector('.modal').classList.add('hidden');
});

//add invalid for inputs
const inputs = document.querySelectorAll("#email-field");
const sumbit = document.querySelector(".modal-button");
const ttext = document.querySelectorAll(".custom-field__rules");
const usernamePattern = /^[A-Za-z0-9_.]{3,24}$/;
let isValid;

// inputs.forEach(input => {
//     input.addEventListener('invalid', () => {
//         const text = document.querySelectorAll(".custom-field__rules");
//         text.forEach(item => item.style.display = 'block');
//         console.log("invalid");
//     });

//     input.addEventListener('input', () => {
//         const text = document.querySelectorAll(".custom-field__rules");
//         text.forEach(item => item.style.display = 'none');
//         console.log("all good");
//     });
// });

sumbit.addEventListener("click", function() {
    isValid = 0;
    console.log(isValid);
    if (document.querySelector("#checkbox").checked) {
        // Проверка обязательного поля
        inputs.forEach(element => {
            if (element.checkValidity() && !(element.value == "")) {
                console.log("validity");
                for (let i = 0; i < inputs.length; i++) {
                    if (inputs[i] == element) {
                        if (i > 1) {
                            ttext[i-1].style.display = 'none'; 
                        }
                        else if (i == 0) {
                            ttext[i].style.display = 'none';
                        }
                    }
                    
                }
                const pas = inputs[2].value;
                if (inputs[3].value == pas) {
                    ttext[2].style.display = 'none';
                }
                else {
                    ttext[2].style.display = 'block';
                    inputs[3].style.border = '1px solid rgba(240, 68, 81, 0.5)';
                }
                
            }
            else {
                console.log("invalid");
                for (let i = 0; i < inputs.length; i++) {
                    if (inputs[i] == element) {
                        if (i > 1) {
                            ttext[i-1].style.display = 'block'; 
                        }
                        else if (i == 0) {
                            ttext[i].style.display = 'block';
                        } 
                    }
                }
            }
        });  
    }
    ttext.forEach(element => {
        if (element.style.display == 'none') {
            isValid++;
            console.log(isValid);
        }
    });
    if (isValid == 3) {
        const send = document.querySelector(".modal-block-send");
        send.classList.add("send-anim");
        setTimeout(() => {
            send.classList.remove("send-anim");
            document.querySelector('.modal').classList.add('!hidden');
        }, 3000);
    }
})

