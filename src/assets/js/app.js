document.addEventListener("DOMContentLoaded", () => {


//= components/


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    // allowTouchMove: false,
    // Navigation arrows
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
  
  });

  const swiper2 = new Swiper(".servicesSwiper", {
    slidesPerView: 3,
    // spaceBetween: 30,
    // allowTouchMove: false,
    loop: true,
    navigation: {
      nextEl: ".nextBtnServices",
      prevEl: ".prevBtnServices",
    },
  });


  if(popupBg) {
    let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
  let popup = document.querySelector('.popup'); // Само окно
  let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
  let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна

  openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
    })
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
  popupBg.classList.remove('active'); // Убираем активный класс с фона
  popup.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
  if(e.target === popupBg) { // Если цель клика - фот, то:
      popupBg.classList.remove('active'); // Убираем активный класс с фона
      popup.classList.remove('active'); // И с окна
  }
});
  } else if (popupBg2) {
    
    let popupBg2 = document.querySelector('.popup__bg2'); // Фон попап окна
let popup2 = document.querySelector('.popup2'); // Само окно
let openPopupButtons2 = document.querySelectorAll('.open-popup2'); // Кнопки для показа окна
let closePopupButton2 = document.querySelector('.close-popup2'); // Кнопка для скрытия окна

openPopupButtons2.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popupBg2.classList.add('active'); // Добавляем класс 'active' для фона
      popup2.classList.add('active'); // И для самого окна
  })
});

closePopupButton2.addEventListener('click',() => { // Вешаем обработчик на крестик
popupBg2.classList.remove('active'); // Убираем активный класс с фона
popup2.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
if(e.target === popupBg2) { // Если цель клика - фот, то:
    popupBg2.classList.remove('active'); // Убираем активный класс с фона
    popup2.classList.remove('active'); // И с окна
}
});


  }else if (popupBg3) {

    let popupBg3 = document.querySelector('.popup__bg3'); // Фон попап окна
let popup3 = document.querySelector('.popup3'); // Само окно
let openPopupButtons3 = document.querySelectorAll('.open-popup3'); // Кнопки для показа окна
let closePopupButton3 = document.querySelector('.close-popup3'); // Кнопка для скрытия окна


console.log(closePopupButton3)
openPopupButtons3.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popupBg3.classList.add('active'); // Добавляем класс 'active' для фона
      popup3.classList.add('active'); // И для самого окна
  })
});

closePopupButton3.addEventListener('click',() => { // Вешаем обработчик на крестик
popupBg3.classList.remove('active'); // Убираем активный класс с фона
popup3.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
if(e.target === popupBg3) { // Если цель клика - фот, то:
    popupBg3.classList.remove('active'); // Убираем активный класс с фона
    popup3.classList.remove('active'); // И с окна
}
});


  }else if (popupBg4) {
    let popupBg4 = document.querySelector('.popup__bg4'); // Фон попап окна
let popup4 = document.querySelector('.popup4'); // Само окно
let openPopupButtons4 = document.querySelectorAll('.open-popup4'); // Кнопки для показа окна
let closePopupButton4 = document.querySelector('.close-popup4'); // Кнопка для скрытия окна

openPopupButtons4.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popupBg4.classList.add('active'); // Добавляем класс 'active' для фона
      popup4.classList.add('active'); // И для самого окна
  })
});

closePopupButton4.addEventListener('click',() => { // Вешаем обработчик на крестик
popupBg4.classList.remove('active'); // Убираем активный класс с фона
popup4.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
if(e.target === popupBg4) { // Если цель клика - фот, то:
    popupBg4.classList.remove('active'); // Убираем активный класс с фона
    popup4.classList.remove('active'); // И с окна
}
});

  }else if (popupBg5) {
    let popupBg5 = document.querySelector('.popup__bg5'); // Фон попап окна
    let popup5 = document.querySelector('.popup5'); // Само окно
    let openPopupButtons5 = document.querySelectorAll('.open-popup5'); // Кнопки для показа окна
    let closePopupButton5 = document.querySelector('.close-popup5'); // Кнопка для скрытия окна
    
    openPopupButtons5.forEach((button) => { // Перебираем все кнопки
      button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
          e.preventDefault(); // Предотвращаем дефолтное поведение браузера
          popupBg5.classList.add('active'); // Добавляем класс 'active' для фона
          popup5.classList.add('active'); // И для самого окна
      })
    });
    
    closePopupButton5.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg5.classList.remove('active'); // Убираем активный класс с фона
    popup5.classList.remove('active'); // И с окна
    });
    
    document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg5) { // Если цель клика - фот, то:
        popupBg5.classList.remove('active'); // Убираем активный класс с фона
        popup5.classList.remove('active'); // И с окна
    }
    });
  }

  



















const tabsBtn = document.querySelectorAll('.tabs__nav-btn');

const tabsItem = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(onTabClick) 

function onTabClick(item) {
  item.addEventListener('click', function() {
    console.log('clicked')
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if( !currentBtn.classList.contains('active') ) {
      tabsBtn.forEach(function(item) {
        item.classList.remove('active');
      });
  
      tabsItem.forEach(function(item) {
        item.classList.remove('active');
      });
  
  
      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }


   
  });
}

document.querySelector('.tabs__nav-btn:nth-child(2)').click();

})











