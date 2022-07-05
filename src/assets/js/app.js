document.addEventListener("DOMContentLoaded", () => {


//= components/


const swiper = new Swiper('.mySwiper', {
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
    spaceBetween: 10,
    // allowTouchMove: false,
    loop: true,
    navigation: {
      nextEl: ".nextBtnServices",
      prevEl: ".prevBtnServices",
    },
  });

  const swiper2Mobile = new Swiper(".servicesSwiperMobile", {
    slidesPerView: 2,
    spaceBetween: 10,
    
    // allowTouchMove: false,
    loop: true,
    navigation: {
      nextEl: ".nextBtnServices",
      prevEl: ".prevBtnServices",
    },
  });


  const swiperMobile = new Swiper('.mySwiperMobile', {
    // Optional parameters
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    
    // allowTouchMove: false,
    // Navigation arrows
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
  
  });

  
  const swiperMobile500 = new Swiper('.mySwiperMobile500', {
    // Optional parameters
    loop: true,
    // allowTouchMove: false,
    // Navigation arrows
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
  
  });

  const swiper2Mobile500 = new Swiper(".servicesSwiperMobile500", {
    slidesPerView: 1,
    // allowTouchMove: false,
    loop: true,
  });


    let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
  let popup = document.querySelector('.popup'); // Само окно
  let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
  let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна
  console.log(popupBg, 'privet')
  if(popupBg != null && popup != null && openPopupButtons != null && closePopupButton != null) {
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
  }
  

    
  let popupBg2 = document.querySelector('.popup__bg2'); // Фон попап окна
  let popup2 = document.querySelector('.popup2'); // Само окно
  let openPopupButtons2 = document.querySelectorAll('.open-popup2'); // Кнопки для показа окна
  let closePopupButton2 = document.querySelector('.close-popup2'); // Кнопка для скрытия окна

    if(popupBg2 != null && popup2 != null && openPopupButtons2 != null && closePopupButton2 != null) {

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

    }



    let popupBg3 = document.querySelector('.popup__bg3'); // Фон попап окна
    let popup3 = document.querySelector('.popup3'); // Само окно
    let openPopupButtons3 = document.querySelectorAll('.open-popup3'); // Кнопки для показа окна
    let closePopupButton3 = document.querySelector('.close-popup3'); // Кнопка для скрытия окна

    if(popupBg3 != null && popup3 != null && openPopupButtons3 != null && closePopupButton3 != null) {
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
    }


    let popupBg4 = document.querySelector('.popup__bg4'); // Фон попап окна
    let popup4 = document.querySelector('.popup4'); // Само окно
    let openPopupButtons4 = document.querySelectorAll('.open-popup4'); // Кнопки для показа окна
    let closePopupButton4 = document.querySelector('.close-popup4'); // Кнопка для скрытия окна

    if(popupBg4 != null && popup4 != null && openPopupButtons4 != null && closePopupButton4 != null) {
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
    }


    let popupBg5 = document.querySelector('.popup__bg5'); // Фон попап окна
    let popup5 = document.querySelector('.popup5'); // Само окно
    let openPopupButtons5 = document.querySelectorAll('.open-popup5'); // Кнопки для показа окна
    let closePopupButton5 = document.querySelector('.close-popup5'); // Кнопка для скрытия окна

    if(popupBg5 != null && popup5 != null && openPopupButtons5 != null && closePopupButton5 != null) {
      
    
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

console.log(tabsBtn)

if (tabsBtn.length > 0 && tabsItem.length > 0 ) {
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
}


let btnBack = document.querySelector('.btnBackMenu')

console.log(btnBack)
if (btnBack != null) {
  btnBack.addEventListener('click', () => {
    document.querySelector('.menu_mobile').classList.add('active');
    document.querySelector('.close-menu').classList.add('close-menu-active');
  })
  
  
  document.querySelector('.close-menu').addEventListener('click', () => {
    document.querySelector('.menu_mobile').classList.remove('active');
    document.querySelector('.close-menu').classList.remove('close-menu-active')
  })


  class ItcAccordion {
    constructor(target, config) {
      this._el = typeof target === 'string' ? document.querySelector(target) : target;
      const defaultConfig = {
        alwaysOpen: true,
        duration: 350
      };
      this._config = Object.assign(defaultConfig, config);
      this.addEventListener();
    }
    addEventListener() {
      this._el.addEventListener('click', (e) => {
        const elHeader = e.target.closest('.accordion__header');
        if (!elHeader) {
          return;
        }
        if (!this._config.alwaysOpen) {
          const elOpenItem = this._el.querySelector('.accordion__item_show');
          if (elOpenItem) {
            elOpenItem !== elHeader.parentElement ? this.toggle(elOpenItem) : null;
          }
        }
        this.toggle(elHeader.parentElement);
      });
    }
    show(el) {
      const elBody = el.querySelector('.accordion__body');
      if (elBody.classList.contains('collapsing') || el.classList.contains('accordion__item_show')) {
        return;
      }
      elBody.style['display'] = 'block';
      const height = elBody.offsetHeight;
      elBody.style['height'] = 0;
      elBody.style['overflow'] = 'hidden';
      elBody.style['transition'] = `height ${this._config.duration}ms ease`;
      elBody.classList.add('collapsing');
      el.classList.add('accordion__item_slidedown');
      elBody.offsetHeight;
      elBody.style['height'] = `${height}px`;
      window.setTimeout(() => {
        elBody.classList.remove('collapsing');
        el.classList.remove('accordion__item_slidedown');
        elBody.classList.add('collapse');
        el.classList.add('accordion__item_show');
        elBody.style['display'] = '';
        elBody.style['height'] = '';
        elBody.style['transition'] = '';
        elBody.style['overflow'] = '';
      }, this._config.duration);
    }
    hide(el) {
      const elBody = el.querySelector('.accordion__body');
      if (elBody.classList.contains('collapsing') || !el.classList.contains('accordion__item_show')) {
        return;
      }
      elBody.style['height'] = `${elBody.offsetHeight}px`;
      elBody.offsetHeight;
      elBody.style['display'] = 'block';
      elBody.style['height'] = 0;
      elBody.style['overflow'] = 'hidden';
      elBody.style['transition'] = `height ${this._config.duration}ms ease`;
      elBody.classList.remove('collapse');
      el.classList.remove('accordion__item_show');
      elBody.classList.add('collapsing');
      window.setTimeout(() => {
        elBody.classList.remove('collapsing');
        elBody.classList.add('collapse');
        elBody.style['display'] = '';
        elBody.style['height'] = '';
        elBody.style['transition'] = '';
        elBody.style['overflow'] = '';
      }, this._config.duration);
    }
    toggle(el) {
      el.classList.contains('accordion__item_show') ? this.hide(el) : this.show(el);
    }
  }

  new ItcAccordion(document.querySelector('.accordion'), {
    alwaysOpen: true
  });
}














let coll = document.getElementsByClassName('collapsible');
console.log(coll)

if (coll.length > 0) {
  for(let i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function() {
      this.classList.toggle('active');
      let content = this.nextElementSibling;
      if(content.style.maxHeight) {
        content.style.maxHeight = null;
  
      }else {
        content.style.maxHeight = content.scrollHeight + 'px'
      }
    })
  }

}





})











