/*
  +Написать функцию fetchCountryData, которая использует
  apiUrl + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  +С помощью fetch сделать запрос по составленому 
  адресу. Обязательно обработать вариант с ошибкой запроса
  используя catch. 
  
  +Результат запроса вывести в поле result в формате:
  Country name: имя страны
  Capital: столица
  Main currency: название денежной единицы
  Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  +PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение элемента по умолчанию.
*/
const input = document.querySelector("input");
const submitBtn = document.querySelector("#js-submit");
const result = document.querySelector(".result");
const apiUrl = "https://restcountries.eu/rest/v2/name/";

submitBtn.addEventListener("click", fetchCountryData);

/*
  @param {FormEvent} evt
*/
function fetchCountryData(evt) {
  evt.preventDefault();
  //console.log(apiUrl+input.value);
  fetch(apiUrl+input.value)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .then(data => {
      let html = '';
      data.map(d => {
        //console.log(d.name, d.capital, d.currencies.map(el => el.name), d.flag);
        //console.log(result);
        html +=    
        `<ul>
            <li>Country name: ${d.name}</li>
            <li>Capital: ${d.capital}</li>
            <li>Main currency: ${d.currencies.map(el => el.name).join(', ')}</li>
            <li>Flag: <img src="${d.flag}" width="100px"></li>
          </ul>`
      });
      result.innerHTML = html;
    })
    .catch(err => {
      console.error("Error: ", err);
    });
};
