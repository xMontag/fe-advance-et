/*
 Напишите скрипт который реализует следующее поведение:
 
 - При клике по любой кнопке на клавиатуре, этому элемету
  должен присваиваться класс keyboard__btn--active. 
 
 - При клике по другой кнопке класс должен удалиться с
 предыдущей кнопки, и присвоиться новой кнопке.
 
 - Элементам с классом x-position и y-position должно присваиваться 
 значение event.clientX и event.clientY
 
PS: При клике вне кнопок класс keyboard__btn--active удаляется с 
  предыдущей кнопки. Никаких других событий происходить не должно:
  класс не приваивается, координаты не записываются.
  Рекомендуется использовать classList.contains.

PSS: Используйте делегирование, установив addEventListener 
  классу keyboard.
*/

// обаботчик нажатия символьной кнопки
function btnOnKeyPress(event) {
  console.log("keypress");
  if (event.key && btnArr[event.key]) {
    console.log(event.key);
    btnArr[event.key].classList.add("keyboard__btn--active");
    x.textContent = ''; y.textContent = '';
    if (activeBtn.node && activeBtn.node !== btnArr[event.key]) { // если нажата другая клавиша убираем с предідущей
      activeBtn.node.classList.remove("keyboard__btn--active");
      console.log("remove1")
    }
    activeBtn.node = btnArr[event.key];
  } else { // если нажата клавиша которой нет на экране
    if (activeBtn.node && activeBtn.node.classList.contains("keyboard__btn--active")) {
      activeBtn.node.classList.remove("keyboard__btn--active");
      console.log("remove2");
      activeBtn.node = null;
    }
  }
};

// обработчик клика 
function btnOnClick(event) {
  console.log('mouse click');
  if (event.target && event.target.matches(".keyboard__btn")) {
    event.target.classList.add("keyboard__btn--active");
    x.textContent = event.clientX; y.textContent = event.clientY;
    if (activeBtn.node && activeBtn.node !== event.target) {
      activeBtn.node.classList.remove("keyboard__btn--active");
      console.log("remove1")
    }
    activeBtn.node = event.target;
  } else {
    if (activeBtn.node && activeBtn.node.classList.contains("keyboard__btn--active")) {
      activeBtn.node.classList.remove("keyboard__btn--active");
      console.log("remove2");
      activeBtn.node = null;
    }
  }
};

const x = document.querySelector('.x-position');
const y = document.querySelector('.y-position');

const activeBtn = {
  node: null
};

const keyboard = document.querySelector('.keyboard');

// пробегаемся по всем кнопкам и создаем объкт со cвойствами "символ клавиатуры" : ссылка на элемент DOM, 
// если содержимое DIV , больше одного символа то это пробел
let btnArr = {};
keyboard.querySelectorAll(".keyboard__row>.keyboard__btn").forEach(el => btnArr[el.textContent.length > 1 ? " " : el.textContent] = el);
//console.log(btnArr);

keyboard.addEventListener("keypress", btnOnKeyPress);
//keyboard.addEventListener("keydown", btnOnKeyDown);
keyboard.addEventListener("click", btnOnClick);