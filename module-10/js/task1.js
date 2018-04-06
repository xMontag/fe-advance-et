/* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она должна
  вызываться при клике на startBtn.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике по stopBtn.
  
  Написать функцию resetClockface которая обнуляет
  значение счетчика в интерфейсе (00:00:000). 
  Ссылка на элемент для отображения времени хранится
  в переменной clockface
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе.
*/
const clockface = document.querySelector(".clock__time");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const controls = document.querySelector(".lang-ctrls__body");
const buttons = controls.querySelectorAll("button");
const timer = {
  startTime: 0,
  currentTime: 0,
  id: "",
  status: "reset"
};

controls.addEventListener("click", setActiveBtn);
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);

function startTimer() {
  if (timer.status !== "start") {
    if (timer.status === "reset") timer.startTime = Date.now();
    if (timer.status === "stop") {
      timer.startTime =  timer.startTime + (Date.now() - timer.currentTime);
      console.log(timer.startTime);
    }
    timer.status = "start";
    timer.id = setInterval(() => {
      timer.currentTime = Date.now();
      updateClockface(timer.currentTime - timer.startTime);
    }, 1);
    console.log(timer);
  }
}

function stopTimer() {
  if (timer.status === "start" && timer.id !== "") {
    clearInterval(timer.id);
    timer.status = "stop";
    console.log(timer);
  } else if (timer.status === "stop") {
    resetClockface();
    timer.status = "reset";
    console.log(timer);
  }
  
}

function resetClockface() {
  updateClockface(0);
}

/*
 * Вспомогательные функции
 */

/*
 * Обновляет поле счетчика новым значением при вызове
 * аргумент time это кол-во миллисекунд
 */
function updateClockface(time) {
  clockface.textContent = getFormattedTime(time);
}

/*
 * Возвращает форматированое время
 * аргумент time это кол-во миллисекунд
 * возвращает строку времени формата 'xx:xx:xxx'.
 */
function getFormattedTime(time) {
  const date = new Date(time);
  const mt =
    date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
  const sc =
    date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();
  const ms =
    date.getMilliseconds() < 10 ?
    "00" + date.getMilliseconds() :
    date.getMilliseconds() < 100 ?
    "0" + date.getMilliseconds() :
    date.getMilliseconds();

  return `${mt}:${sc}:${ms}`;
}

/*
 * Подсветка активной кнопки
 */
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