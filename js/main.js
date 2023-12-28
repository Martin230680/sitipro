/*******************открытие бургера*****************/

document.getElementById('burger').addEventListener('click', function () {
  document.querySelector('header').classList.toggle('burgeropen');

})

/**************************остановка скрола при бургере****************************/

document.getElementById('burger').addEventListener('click', function () {
  document.body.classList.toggle('stop-skroll');
});

/***закрытие бургера и остановки скрола привыборе пункта меню**********************************/

let menulinks = document.querySelectorAll('.header__nav').forEach(function (element) {
  element.addEventListener('click', function () {
    document.querySelector('header').classList.remove('burgeropen');
    document.body.classList.remove('stop-skroll');

  })
});

/**************открытие/закрытие  мобального окна**********/
var container = document.querySelector('.formpopupcontainer');
var call = document.querySelectorAll('.contactlist__item-btn');
var call1 = document.querySelectorAll('.services__moveblock-link');
var closecontainer = document.querySelector('.formpopup__closebtn');
var call3 = document.querySelector('.home__btn ');
for (let j = 0; j < call.length; j++) {
  call[j].addEventListener('click', function () {
    container.classList.add('open');
  });
};

for (let j = 0; j < call1.length; j++) {
  call1[j].addEventListener('click', function () {
    container.classList.add('open');
  });
};

call3.addEventListener('click', function () {
  container.classList.add('open');
});


closecontainer.addEventListener('click', function () {
  container.classList.remove('open');
});



/** выбор всех чекбоксов по одному клику, чтобы показывались все описания во всех слайдах **/

document.getElementById('firstslide').onclick = function () {
  var checkboxes = document.getElementsByName('slider');
  for (var checkbox of checkboxes) {
    checkbox.checked = this.checked;
  }
}

/******* блок управления всптывающим блоком со ссылкой*/
/*при клике на стрелку поворачивается стрела открывается блок с сылко*/
/**если при этом есть открытые блоки они закрываются */
/**при повторном клике на стрелку открытого блока он закрывется  */

const services_items = document.querySelectorAll('.services__item')
let N = services_items.length;
let flagopen = new Array(N).fill(0);
const moveblock = document.querySelectorAll('.services__moveblock');
const arrows_but = document.querySelectorAll('.services__item-button');

function obnulenie(flag) {
  for (let k = 0; k < N; k++)
    if (k != flag) moveblock[k].classList.remove('moveblockopen');
  for (let k = 0; k < N; k++)
    if (k != flag) arrows_but[k].classList.remove('arrowrotate')
  for (let k = 0; k < N; k++) {
    if (k != flag) flagopen[k] = 0;
  }

}


for (let j = 0; j < N; j++) {
  services_items[j].addEventListener('click', function () {
    if (flagopen[j] == 0) {
      arrows_but[j].classList.add('arrowrotate');
      moveblock[j].classList.add('moveblockopen');
      obnulenie(j);
      flagopen[j] = 1;
    }
    else obnulenie(-1);
  })
}

/*************** закрытие открытого блока при клике вне секции */

document.addEventListener('click', function (event) {
  flagivent = 0;
  services_items.forEach(el => {
    if (!el.contains(event.target))
      flagivent++;
  })
  if (flagivent == N) obnulenie(-1);

});


/**********************слайдер секции home */

const swiper = new Swiper('.mySwiper1', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',

    clickable: true
  },

  a11y: {
    paginationBulletMessage: 'Слайд номер{{index}}'
  }


});

/**слайдер секции потртфолио до мобильной версии с цифрами */

var myswiper = new Swiper('.mySwiper2', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
  pagination: {
    el: '.swiper-pagination2',
    type: 'fraction',

    clickable: true
  },

  a11y: {
    paginationBulletMessage: 'Слайд номер{{index}}'
  },
  // breakpoints: {
  //   1200: {
  //     pagination: {
        
  //       type: 'bullets',
    
        
  //     },
  //   }
  // }
});

/**слайдер портфолию мобильная версия переход на буллеты вместо цифр */
var myswiper = new Swiper('.mySwiper3', {
  loop: true,
  pagination: {
    el: '.swiper-pagination3',
    type: 'bullets',

    clickable: true
  },
});


/****слайдер секции виды услуг мобильная версия */
var swiper4 = new Swiper('.mySwiper4', {
  spaceBetween: 15,
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination4',
    clickable: true,
    type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next4',
    prevEl: '.swiper-button-prev4',
  },

  a11y: {
    paginationBulletMessage: 'Слайд номер{{index}}'
  },

});

/**************************яндекс карта********** */
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [55.669006, 37.409657],
    zoom: 17
  }, {
    searchControlProvider: 'yandex#search'
  }),
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Москва, ул. Московская д. 0',
    }, {

      iconImageHref: 'img/Subtract.svg',
      iconLayout: 'default#image',
      iconImageSize: [28, 40],
      iconImageOffset: [-5, -38]
    });
  myMap.geoObjects
    .add(myPlacemark);
});
