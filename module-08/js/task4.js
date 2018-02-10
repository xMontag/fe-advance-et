/*
 Напишите скрипт который реализует следующее поведение:
 
 - При клике по label должен сработать checkbox и 
  включить, либо выключить звук при клике на клавишу.
  
 - Подсветку текущей клавиши реализуйте с помощью класса
  keyboard__btn--active.
  
 - Для проигрывания музыки вызовите функцию playSound
*/

const playSound = () => {
  const audio = document.querySelector("audio");
  audio.currentTime = 0;
  audio.play();
};

function btnOnClick(event) {
  if (event.target && event.target.matches(".keyboard__btn")) {
    event.target.classList.add("keyboard__btn--active");
    const sound = document.querySelector("#slideThree").checked;
    if (sound) playSound();
    if (activeBtn.node && activeBtn.node !== event.target && activeBtn.node.classList.contains("keyboard__btn--active")) {
      activeBtn.node.classList.remove("keyboard__btn--active");
    }
    activeBtn.node = event.target;
  }
};

function removeClassActiveBtn(event) {
  if (event.target && !event.target.matches(".keyboard__btn") && activeBtn.node && activeBtn.node.classList.contains("keyboard__btn--active")) {
    activeBtn.node.classList.remove("keyboard__btn--active");
    activeBtn.node = null;
  }
};

const soundTogle = () => {
  const checkbox = document.querySelector("#slideThree");
  checkbox.checked = !checkbox.checked;
}

const btns = document.querySelector(".keyboard");
const soundLabel = document.querySelector(".slideThree>span");

btns.addEventListener("click", btnOnClick);
window.addEventListener("click", removeClassActiveBtn);
soundLabel.addEventListener("click", soundTogle);

const activeBtn = {
  node: null
};
