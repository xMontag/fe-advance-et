/*
  + Написать функцию get, которая используя
  REST сервис по адресу http://fecore.net.ua/rest/
  посылает get запрос и получает ответ.
  
  Результатом fetch будет массив объектов с полями.
  
  + В элемент result поместить форму состоящую из 2-х
  столбцов след формата, где кол-во строк будет такое как
  и кол-во объектов пользователей в ответе:
  
  Name Score
  имя  кол-во очков 
  имя  кол-во очков 
*/

const getBtn = document.querySelector("#js-get");
const result = document.querySelector(".result");

getBtn.addEventListener("click", get);

/*
  @param {FormEvent} evt
*/
function get(evt) {
    evt.preventDefault();
    
    fetch('https://cors-anywhere.herokuapp.com/http://fecore.net.ua/rest/')
      .then(response => {
        //console.log(response);
        if (response.ok) return response.json();
        throw new Error(`Error fetching data`);
      })
      .then(data => {
        //console.log(data);
        let html = '';
        data.map(el => {
            html += `<div><span>${el.name} : </span>${el.score}<span></span></div>`;
        });
        result.innerHTML = html;
      })
      .catch(err => {
        console.error("Error: ", err);
      });
}