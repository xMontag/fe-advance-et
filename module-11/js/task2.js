/*
  +Написать функцию fetchUserData, которая использует
  apiUrl + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  +  С помощью fetch сделать запрос по составленому 
  адресу. Обязательно обработать вариант с ошибкой запроса
  используя catch. 
  
  +Результат запроса вывести в поле result в формате:
  Avatar: аватартка 
  Username: логин
  Bio: описание профиля
  Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/

const input = document.querySelector("input");
const submitBtn = document.querySelector("#js-submit");
const result = document.querySelector(".result");
const apiUrl = "https://api.github.com/users/";

submitBtn.addEventListener("click", fetchUserData);

/*
  @param {FormEvent} evt
*/
function fetchUserData(evt) {
  evt.preventDefault();
  fetch(apiUrl + input.value)
    .then(response => {
      //console.log(response);
      if (response.ok) return response.json();
      throw new Error(`Error fetching data`);
    })
    .then(data => {
      //console.log(data);
      result.innerHTML = 
        `<ul>
            <li>Avatar: <img src="${data.avatar_url}" width="100px"></li>
            <li>Username: ${data.login}</li>
            <li>Bio: ${data.bio ? data.bio : ''}</li>
            <li>Public repos: ${data.public_repos}</li>
          </ul>`;
    })
    .catch(err => {
      console.error("Error: ", err);
    });
}
