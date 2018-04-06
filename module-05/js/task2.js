/*  
  Напишите код, который бы  с помощью функции-конструкора 
  (CF - Constructor Function) User позволял создавать 
  объекты пользователя со следующим свойствами:
 - тип - 'user'
 - имя - параметр CF
 - age - параметр CF
 - friends - число, параметр CF

  Написать функцию getUserInfo, которая на основании одного 
  параметра - имени объекта, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать один объект пользователя User и 
  с помощью функции getUserInfo вывести строку в консоль.
*/


function User(name, age, friends) {
  this.type = 'user';
  this.name = name;
  this.age = age;
  this.friends = friends || 0;
}

user = new User("Ivan", 20, 2);
getUserInfo(user);

function getUserInfo(user) {
  console.log(`User ${user.name} is ${user.age} years old and has ${user.friends} friends`);
}