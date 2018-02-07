/*  
  Напишите код, который последовательно: 
 - добавляет поле mood со значением'happy'
 - заменяет значение hobby на 'javascript'
 - удаляет свойство premium
 - выводит содержимое объекта user 
    циклом в формате ключ: значение
*/

const user = {
  name: 'Mango',
  age:  20,
  hobby: 'html',
  premium: true
};

user.mood = 'happy';
user.hobby = 'javascript';
delete user.premium;

objectDump(user);

function objectDump(obj) {
  for (let key in obj) {
    let maxLengthOfField = Object.keys(user).sort((a, b) => (b.length - a.length))[0].length;
    console.log(key + ' '.repeat(maxLengthOfField - key.length) + ' : ' + user[key]);
  }
}