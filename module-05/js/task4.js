/*  
  Дополните код так, чтобы скрипт последовательно выводил в консоль
  строку пары ключ:значение объекта poly. 
  Поле с датой вывести в Украинской локали.
  
  - Реализуйте перебор ключей обьекта используя for in в функции showUserInfoA
  - Реализуйте перебор ключей обьекта НЕ используя for in в функции showUserInfoB
*/

function User(login, pass) {
  this.login = name;
  this.pass = pass;
  this.regDate = new Date();
}

const poly = new User("Poly", "12345qwerty");

const options = { 
  weekday: 'long', 
  year    : 'numeric', 
  month   : 'short', 
  day     : 'numeric', 
  hour    :'2-digit', 
  minute  :'2-digit'
};

function showUserInfoA(obj) {
  console.log("===== With for in =====");
  for (let key in obj) {
    console.log(key + ' : ' + ((obj[key] instanceof Date) ? obj[key].toLocaleString('Uk-uk', options) : obj[key]));
  }
}

showUserInfoA(poly);

function showUserInfoB(obj) {
  console.log("===== Without for in =====");
  Object.keys(obj).map(key => console.log(key + ' : ' + ((obj[key] instanceof Date) ? obj[key].toLocaleString('Uk-uk', options) : obj[key])));
}

showUserInfoB(poly);
