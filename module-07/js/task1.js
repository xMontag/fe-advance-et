(function () {
  'use strict'
  let name = "Claudia";
  let sename = "Cardinale";
  let age = 29;
  let address = "Philodelphia, PA";
  let strawberryCount = 19;
  let lemonCount = 5;

  function createUserCard() {
    const d = document;

    const elCard = d.createElement("div"),
          elImgContainer = d.createElement("div"),
          elBotContainer = d.createElement("div"),
          elImg = d.createElement("img"),
          elName = d.createElement("h4"),
          elTitle = d.createElement("p"),
          elLikeBox = d.createElement("div"),
          elStrawberry = d.createElement("div"),
          elStrawberryImg = d.createElement("div"),
          elStrawberryCount = d.createElement("div"),
          elLemon = d.createElement("div"),
          elLemonImg = d.createElement("div"),
          elLemonCount = d.createElement("div"),
          elHand = d.createElement("div"),
          elHandImg = d.createElement("div");

    elCard.classList = "card";
    elImg.classList = "card-img";
    elBotContainer.classList = "card-bot-container";
    elImgContainer.classList = "card-img-container";
    elName.classList = "card-name";
    elTitle.classList = "card-title";
    elLikeBox.classList = "card-likebox";
    elStrawberry.classList = "card-likebox-item";
    elLemon.classList = "card-likebox-item";
    elHand.classList = "card-likebox-item";
    elStrawberryImg.classList = "card-likebox-item-img icon-strawberry";
    elLemonImg.classList = "card-likebox-item-img icon-lemon";
    elHandImg.classList = "card-likebox-item-img icon-hand";
    elStrawberryCount.classList = "card-likebox-item-count";
    elLemonCount.classList = "card-likebox-item-count";

    elName.textContent = `${name} ${sename}`;
    
    elImg.setAttribute("src", "./img/6953237.jpg");
    
    elTitle.textContent = `${age} · ${address}`;
    elStrawberryCount.textContent = strawberryCount;
    elLemonCount.textContent = lemonCount;

    

    elStrawberry.append(elStrawberryImg, elStrawberryCount);
    elLemon.append(elLemonImg, elLemonCount);
    elHand.append(elHandImg);
    elLikeBox.append(elStrawberry, elLemon, elHand);
    elImgContainer.append(elImg);
    elBotContainer.append(elName, elTitle, elLikeBox);
    elCard.append(elImgContainer, elBotContainer);
    

    return elCard;
  }

  document.querySelector(".task1").append(createUserCard());

})();