$(document).ready(function () {
  var currentFloor = 2; // переменная, где хранится текущий этаж
  var floorPath = $('.home-image path'); // каждый отдельный этаж в SVG
  var counterUp = $(".counter-up"); // кнопка увеличения этажа
  var counterDown = $(".counter-down"); // кнопка уменьшения этажа
  var modal = $('.modal'); // модальное окно
  var modalCloseButton = $(".modal-close-button"); // кнопка закрытия модального окна(крестик)
  var viewFlatsButton = $(".view-flats"); // кнопка "смотреть квартиры на этаже"
  var currentFlat; // Переменная, где хранится квартира
  var flat = $('.flats path'); // Отдельная квартира SVG 
  var flatImage; // Переменная, где хранится data атрибут квартиры SVG
  var flatListItem = $('.flat-link') // Переменная, где хранится элемент списка справа

  modal.on('click', function() {
    modal.removeClass('is-open');
  })

  // Функция при наведении мышкой на квартиру, чтобы подсвечивалась соответствуюшая квартира из списка
  flat.on('mouseover', function() {
    currentFlat = $(this).attr("data-flat");
    var da = $(`[data-number-flat=${currentFlat}]`);
    $(da).addClass("modal-link--active");
  });

  // Функция при наведении мышкой на элемент справа в списке подсвечивать соответствующую квартиру
  flatListItem.on('mouseover', function() {
    flatImage = $(this).attr("data-number-flat");
    var listLink = $(`[data-flat=${flatImage}]`);
    $(listLink).addClass("modal-svg--active");
  });

  // Функция, чтобы при уводе мышки с элемента списка, соответствующая квартира гасла
  flatListItem.on('mouseout', function() {
    $("[data-flat]").removeClass("modal-svg--active");
  });

  // Функция, чтобы когда мышка уходила с элемента, квартира справа в списке не подсвечивалась
  flat.on('mouseout', function() {
    $("[data-number-flat]").removeClass("modal-link--active");
  });

  //Функция при наведении мышкой на этаж 
  floorPath.on('mouseover', function() {
    currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
    floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
    $(".counter").text(currentFloor); // запись текущего этажа в счётчик справа
  });

  floorPath.on('click', toggleModal);
  modalCloseButton.on('click', toggleModal);
  viewFlatsButton.on('click', toggleModal);

  counterUp.on('click', function() { // отслеживание клика по кнопке вверх
    if (currentFloor < 18) { // проверка значения этажа, не должно быть больше 18
    currentFloor++; // добавление одного этажа
    usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
    useGrouping: false}); // форматирование переменной с этажом, чтобы было 01, а не 1
    $(".counter").text(usCurrentFloor); // запись значение этажа в счётчик справа
    floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
    $(`[data-floor=${usCurrentFloor}] `).toggleClass('current-floor'); // подсветка текущего этажа
    };
  });

  counterDown.on('click', function() { // отслеживание клика по кнопке вниз
    if (currentFloor > 2) { // проверка значения этажа, не должно быть меньше 2
    currentFloor--; // убрать один этаж
    usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
    useGrouping: false}); // форматирование переменной с этажом, чтобы было 01, а не 1
    $(".counter").text(usCurrentFloor); // запись значение этажа в счётчик справа
    floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
    $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // подсветка текущего этажа
    };
  });

  function toggleModal(){
    modal.toggleClass('is-open');
  }

});