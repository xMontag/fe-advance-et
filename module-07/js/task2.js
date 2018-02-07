(function () {
  'use strict'
  let name = "Claudia";
  let sename = "Cardinale";
  let age = 29;
  let address = "Philodelphia, PA";
  let strawberryCount = 19;
  let lemonCount = 5;

  function createUserCard() {
    const textHTML = `
    <div class="card">
      <div class="card-img-container">
        <img class="card-img" src="./img/6953237.jpg">
      </div>
      <div class="card-bot-container">
        <h4 class="card-name">${name} ${sename}</h4>
        <p class="card-title">${age} · ${address}</p>
        <div class="card-likebox">
          <div class="card-likebox-item">
            <div class="card-likebox-item-img icon-strawberry"></div>
            <div class="card-likebox-item-count">${strawberryCount}</div>
          </div>
          <div class="card-likebox-item">
            <div class="card-likebox-item-img icon-lemon"></div>
            <div class="card-likebox-item-count">${lemonCount}</div>
          </div>
          <div class="card-likebox-item">
            <div class="card-likebox-item-img icon-hand"></div>
          </div>
        </div>
      </div>
    </div>`
    return textHTML;
  }

  document.querySelector(".task2").insertAdjacentHTML('beforeend', createUserCard());

})();