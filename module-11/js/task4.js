/*
API // CRUD
http://fecore.net.ua/rest/?action=4 
http://fecore.net.ua/rest/?action=3&id=1 - удаление
http://fecore.net.ua/rest/?action=2&id=1&name=Hey1&score=13 -изменение
http://fecore.net.ua/rest/?action=1&name=Mark&score=100  - добавление
http://fecore.net.ua/rest/

  Написать функцию post, которая используя
  REST сервис по адресу http://fecore.net.ua/rest/
  посылает post запрос с именем введенным в input.
  
  Результатом fetch будет ответ от сервера со статусом
  операции записи, вывести ОК или ERROR в поле result.
*/
const input = document.querySelector("input");
const postBtn = document.querySelector("#js-post");
const result = document.querySelector(".result");

const apiUrl = "http://fecore.net.ua/rest/";
const proxy = "https://cors-anywhere.herokuapp.com/";


postBtn.addEventListener("click", post);

/*
  @param {FormEvent} evt
*/
function post(evt) {
  evt.preventDefault();
  const name = input.value;
  const action = `?action=1&name=${name}&score=400`;
  const header = new Headers();
  const init = {
    method: 'POST',
    headers: header,
    mode: 'cors',
    cashe: 'default'
  }

  fetch(proxy + apiUrl + action, init)
    .then(response => {
      console.log(response);
      if (response.ok) {
        result.textContent = "OK!";
      } else {
        result.textContent = "Error!";
        throw new Error(`Error fetching data`)
      }
    })
    .catch(err => {
      console.error("Error: ", err);
    });
}