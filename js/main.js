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

var myswiper = new Swiper(".mySwiper2", {
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
});

var myswiper = new Swiper(".mySwiper3", {
  loop: true,
  pagination: {
    el: '.swiper-pagination3',
    type: 'bullets',

    clickable: true
  },
});



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

