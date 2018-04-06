/*  
    Написать функцию, которая бы выводила в консоль
    время, оставшееся до следующего Нового Года
    в Украинской локали
*/



printDaysBeforeNewYear = () => {
  const today = new Date(); // Получаем текущую дату
  //const nextYear = today.getFullYear() + 1;
  var endYear = new Date(today.getFullYear(), 11, 31, 23, 59, 59, 999); // Устанавливаем месяц и день на конец года

  console.log(today.getFullYear());

  let timeLeft = endYear.getTime() - today.getTime();

  //console.log(timeLeft);
  let deys = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
  let hours = Math.floor((timeLeft / 1000 / 60 / 60) % 24);
  let minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  let seconds = Math.floor((timeLeft / 1000 ) % 60);

  let deysStr = declension(deys, ['день','дня','днів']);
  let hoursStr = declension(hours, ['година', 'години', 'годин']);
  let minutesStr = declension(minutes, ['хвилина', 'хвилини', 'хвилин']);
  let secondsStr = declension(seconds, ['секунда', 'секунди', 'секунд']);

  console.log(`До Нового Року залишилось ${deys} ${deysStr} ${hours} ${hoursStr} ${minutes} ${minutesStr} ${seconds} ${secondsStr}!`);
}

//склонение окончаний
function declension(num, expressions) {
  let result;
  let count = num % 100;
  if (count >= 5 && count <= 20) {
      result = expressions['2'];
  } else {
      count = count % 10;
      if (count == 1) {
          result = expressions['0'];
      } else if (count >= 2 && count <= 4) {
          result = expressions['1'];
      } else {
          result = expressions['2'];
      }
  }
  return result;
}

printDaysBeforeNewYear();