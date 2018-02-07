(function () {
  'use strict'
  function User(imgURL, name, age, location, strawberries, lemons) {
    this.img = imgURL;
    this.name = name;
    this.age = age;
    this.location = location;
    this.strawberries = strawberries;
    this.lemons = lemons;
  };

  let user = [];
  
  user[0] = new User('./img/6953237.jpg', 'Claudia Cardinale', 29, 'Philadelphia, PA', 19, 5);
  user[1] = new User('./img/1235477.png', 'Elon Musk', 46, 'California, CA', 30, 2);
  user[2] = new User('./img/1024025.jpg', 'Linus Torvalds', 48, 'Oregon, OR', 10, 6);

  function createUserCard(user) {
    const textHTML = `
    <div class="card">
      <div class="card-img-container">
        <img class="card-img" src="${user.img}">
      </div>
      <div class="card-bot-container">
        <h4 class="card-name">${user.name}</h4>
        <p class="card-title">${user.age} · ${user.location}, PA</p>
        <div class="card-likebox">
          <div class="card-likebox-item">
            <div class="card-likebox-item-img icon-strawberry"></div>
            <div class="card-likebox-item-count">${user.strawberries}</div>
          </div>
          <div class="card-likebox-item">
            <div class="card-likebox-item-img icon-lemon"></div>
            <div class="card-likebox-item-count">${user.lemons}</div>
          </div>
          <div class="card-likebox-item">
            <div class="card-likebox-item-img icon-hand"></div>
          </div>
        </div>
      </div>
    </div>`
    return textHTML;
  }

  user.forEach((el) => document.querySelector(".task3").insertAdjacentHTML('beforeend', createUserCard(el)));
  

})();