// изменение меню
let menu = document.querySelector('.menu'),
    adv = document.querySelector('.adv'),
    column = document.getElementsByClassName('column'),
    menuItem = document.getElementsByTagName('li'),
    li = document.createElement('li'),
    li2 = document.createElement('li'),
    title = document.getElementsByClassName('title'),
    response = document.getElementById('prompt');

li.textContent = 'Пятый пункт';
li2.textContent = ' второй пункт ';
li2.classList.add('menu-item');
li.classList.add('menu-item');
menu.appendChild(li);
menu.replaceChild(menuItem[1], menuItem[2]);
menu.insertBefore(li2, menuItem[1]);
// изменение меню



// изменение title
title[0].textContent = 'Мы продаем только подлинную технику Apple';
// изменение title 


// удаление рекламы
column[1].removeChild(adv);
// удаление рекламы

// запрос клиенту

function request() {
    for (let i = 0; i < 1; i++) {
        let question = prompt(' Ваше отношение к технике apple ?', '');
        if ((typeof question) === 'string' && question != +question && question != null &&
            question != '') {
            response.textContent = question;
        } else {
            i = i - 1;
            alert(' у вас ошибка ');
        }

    }

}

setTimeout(request, 2000);

// запрос клиенту

// изменение фона
document.body.style.background = 'url(img/apple_true.jpg)';
// изменение фона