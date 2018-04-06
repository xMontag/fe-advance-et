/* 
  Напишите скрипт, реализующий функционал таймера
  который считает время от заданого значения до нуля.
  По достижении 00:00:000 выводит alert('n минут прошло').
  
  Создайте функцию countDownFrom, которая бы по клику на кнопку
  startBtn вела обратный отсчет от n минут. n - аргумент
  функции, кол-во минут от 1 до 99.
  
  Создайте функцию alertUser, которая, по истечению
  времени будет просто выводить alert с сообщение 'n минут прошло'.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе.
*/

const clockface = document.querySelector(".clock__time");
const startBtn = document.querySelector("#start");
const controls = document.querySelector(".lang-ctrls__body");
const buttons = controls.querySelector(".lang-ctrls__btn");
const timer = {
  id: ""
};

controls.addEventListener("click", setActiveBtn);
startBtn.addEventListener("click", countDownFrom.bind(null, 1));

function countDownFrom(minutes) {
  if (Number.isInteger(minutes) && minutes > 0 && minutes < 100) {
    
    endTime = Date.now() + minutes * 60 * 1000;
    
    timer.id = setInterval(() => {
      const curentTime = Date.now();
      if (curentTime <= endTime) {
        updateClockface(endTime - curentTime);
      } else {
        updateClockface(0);
        clearInterval(timer.id);
        alertUser(minutes);
      }
    }, 1);
  }
}

function alertUser(n) {
  alert(`${n} минут прошло`);
}

/*
* Вспомогательные функции
* setActiveBtn - Подсветка активной кнопки
* getFormattedTime - возвращает форматированое время
* updateClockface - обновляет поле счетчика новым значением при вызове
*/

function updateClockface(time) {
  clockface.textContent = getFormattedTime(time);
}

function getFormattedTime(time) {
  const date = new Date(time);
  const mt =
    (date.getUTCMinutes() + date.getUTCHours() * 60) > 9 ? date.getUTCMinutes() + date.getUTCHours() * 60 : "0" + date.getUTCMinutes() + date.getUTCHours() * 60;
  const sc =
    date.getUTCSeconds() > 9 ? date.getUTCSeconds() : "0" + date.getUTCSeconds();
  const ms =
    date.getUTCMilliseconds() < 10
      ? "00" + date.getUTCMilliseconds()
      : date.getUTCMilliseconds() < 100
        ? "0" + date.getUTCMilliseconds()
        : date.getUTCMilliseconds();

  return `${mt}:${sc}:${ms}`;
}

function setActiveBtn(e) {
  Array.from(buttons, elem => elem.classList.remove("lang-ctrls__btn--active"));
  let elem = e.target;

  if (e.target.classList.contains("material-icons")) {
    elem = elem.parentNode;
  }
  if (!elem.classList.contains("lang-ctrls__btn")) {
    return false;
  }

  elem.classList.add("lang-ctrls__btn--active");
}
