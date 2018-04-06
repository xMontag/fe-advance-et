/* 
  Написать скрипт, который по клику присваивает
  выбранной кнопке языка класс lang-ctrls__btn--active
  и сохраняет сделанный выбор  в объекте, а этот объект
  сохранятеся в localStorage.
  
  При загрузке окна происходит провека есть ли сохраненный
  выбор в localStorage и если есть, то данные для подсветки 
  коавиши берутся оттуда.
*/
'use strict'
const selectLangEl = document.querySelector(".lang-ctrls__body");
selectLangEl.addEventListener("click", changeLang);
window.onload = () => {
    if (localStorage.getItem('lang') && localStorage.getItem('lang') !== language.currentLang) {
        language.changeLang(localStorage.getItem('lang'));
    }
};

function changeLang(event) {
    if (event.target && event.target.matches(".lang-ctrls__btn")) {
        language.changeLang(event.target.textContent.trim());
    }
};

const language = {
    langs: ['en', 'ru', 'ua'],
    currentLang: 'en',
    changeLang: function (lang) {
        const numCurrentLang = this.langs.indexOf(this.currentLang);
        const numSetLang = this.langs.indexOf(lang);
        const arrBtn = Array.from(document.querySelector('.lang-ctrls__body').children);
        const currentBtn = arrBtn[numCurrentLang];
        const setBtn = arrBtn[numSetLang];

        if (setBtn !== currentBtn) {
            if (currentBtn.classList.contains('lang-ctrls__btn--active')) {
                currentBtn.classList.remove('lang-ctrls__btn--active');
            }
            if (!setBtn.classList.contains('lang-ctrls__btn--active')) {
                setBtn.classList.add('lang-ctrls__btn--active');
            }
            this.currentLang = lang;
            console.log(this.currentLang);
            if (!localStorage.getItem('lang') || localStorage.getItem('lang') !== lang) localStorage.setItem('lang', lang);
        }
    } 
};