/*
Напишите скрипт который реализует следующее поведение:
 
 - При клике по любой кнопке на клавиатуре keyboard, 
  кнопке должен присваиваться класс keyboard__btn--active. 
 
 - При клике по другой кнопке класс должен удалиться с предыдущей 
  кнопки, и присвоиться новой кнопке.

 - Элементу pressed должно присваиваться текстовое содержимое,
  полученное у элемента кнопки на которую кликнули с помощью
  объекта event и свойства target.textContent.
 
PS: Используйте прием "буфер" - создайте объект activeBtn
  для хранения в свойстве node ссылку на элемент event.target
  до следующего события. 
  
 - При наступлении следующего события удалите класс 
 keyboard__btn--active у activeBtn.node.
 Рекомендуется использовать .classList.remove.

PSS: Обязательно использовать делегирование событий,
  установив addEventListener на вю клавиатуру keyboard.
*/

const keyboard = document.querySelector(".keyboard");
const pressed = document.querySelector(".pressed");

keyboard.addEventListener("click", btnOnClick);

function btnOnClick(event) {
  if (event.target && event.target.matches(".keyboard__btn")) {
    event.target.classList.add("keyboard__btn--active");
    pressed.textContent = event.target.textContent;
    if (activeBtn.node && activeBtn.node !== event.target) activeBtn.node.classList.remove("keyboard__btn--active");
    activeBtn.node = event.target;
  } else {
    if (activeBtn.node && activeBtn.node.classList.contains("keyboard__btn--active")) activeBtn.node.classList.remove("keyboard__btn--active");
  }
};

const activeBtn = {
  node: null
};
