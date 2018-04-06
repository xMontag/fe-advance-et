/*
 Напишите скрипт который реализует следующее поведение:
 
 - При клике на кнопке с надписью "space", элемету btn
  должен присвоиться класс keyboard__btn--active. 
 
 - При следующем клике этот класс должен удаляться, 
  и так поочереди. Рекомендуется использовать classList.toggle.
 
 - Элементу pressed должно присваиваться значение
  textContent элемента btn.
*/

const btn = document.querySelector(".keyboard__btn--space");
const pressed = document.querySelector(".pressed");


btnOnClick = event => {
  event.target.classList.toggle("keyboard__btn--active");
  pressed.textContent = event.target.textContent;
};

btn.addEventListener("click", btnOnClick);

