const headphones = [
  {
    img: "../img/headphones-1.svg",
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
  },
  {
    img: "../img/headphones-2.svg",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    img: "../img/headphones-3.svg",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    img: "../img/headphones-1.svg",
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
  },
  {
    img: "../img/headphones-2.svg",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    img: "../img/headphones-3.svg",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  
]

const headPhones = [ 
  {
    img: "../img/airpods.svg",
    title: "Apple AirPods",
    price: 9527,
    rate: 4.7,
  },
  {
    img: "../img/gerlax.svg",
    title: "GERLAX GH-04",
    price: 6527,
    rate: 4.7,
  },
  {
    img: "../img/borofone.svg",
    title: "BOROFONE BO4",
    price: 7527,
    rate: 4.7,
  },
]

const sections = [
  {
    title: 'Беспроводные наушники',
    items: headphones
  },
  {
    title: 'Наушники',
    items: headPhones
  }
]


// Функция которая будет принимать на вход три строки: имя тега (tagName), 
// имя класса (className) и текстовое содержимое (text) элемента. 
// Внутри неё будем создавать элемент с классом и текстом, а затем возвращать его наружу.
var makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
}

// Функция для создания карточки
var createCard = function (headphone) {
  var listItem = makeElement('li', 'card-block');
  listItem.classList.add('card')

  var cardTop = makeElement('div', 'card__top')
  listItem.appendChild(cardTop)
 
  var img = makeElement('img', 'card__img')
  img.src = headphone.img;
  img.alt = headphone.title;
  cardTop.appendChild(img)

  var cardBottom = makeElement('div', 'card__bottom')
  listItem.appendChild(cardBottom)

  var headphoneTitle = makeElement('div', 'headphone__title')
  cardBottom.appendChild(headphoneTitle);

  var headphoneNamePrice = makeElement('div', 'headphone__name-price')
  headphoneTitle.appendChild(headphoneNamePrice);

  var title = makeElement('h3', 'headphone__name', headphone.title)
  headphoneNamePrice.appendChild(title)

  var price = makeElement('span', 'headphone__price', headphone.price + '  ₽')
  headphoneNamePrice.appendChild(price)

  var headphoneStarsBuy = makeElement('div', 'headphone-stars-buy')
  headphoneTitle.appendChild(headphoneStarsBuy);

  var headphoneRate = makeElement('div', 'headphone__rate', headphone.rate)
  headphoneStarsBuy.appendChild(headphoneRate);

  var starImg = makeElement('img')
  starImg.src = './img/star.svg'
  starImg.alt = 'Рейтинг'
  headphoneRate.appendChild(starImg)

  var headphoneBuy = makeElement('button', 'headphone__buy', 'Купить')
  headphoneStarsBuy.appendChild(headphoneBuy);

  return listItem;
}


function createSection (sectionId,items){
  const cardList = document.querySelector(sectionId)
  if(cardList){
    for (var i = 0; i < items.length; i++) {
      var cardItem = createCard(items[i]);
      cardList.appendChild(cardItem);  
    }
  }
}
createSection('#cards-1', headphones)
createSection('#cards-2', headPhones)


