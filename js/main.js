$(document).ready(function () {
  var currentFloor = 2; // переменная, где хранится текущий этаж
  var floorPath = $('.home-image path'); // каждый отдельный этаж в SVG
  var counterUp = $(".counter-up"); // кнопка увеличения этажа
  var counterDown = $(".counter-down"); // кнопка уменьшения этажа

  //Функция при наведении мышкой на этаж 
  floorPath.on('mouseover', function() {
    currentFloor = $(this).attr("data-floor"); // удаляем активный класс у этажей
    floorPath.removeClass("current-floor"); // получаем значение текущего этажа
    $(".counter").text(currentFloor); // запись текущего этажа в счётчик справа
  });

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
});