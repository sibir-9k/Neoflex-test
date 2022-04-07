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
var createCard = function () {
  var listItem = makeElement('li', 'card-block');
  listItem.classList.add('card')

  var cardTop = makeElement('div', 'card__top')
  listItem.appendChild(cardTop)
 
  var img = makeElement('img', 'card__img')
  img.src = headphones[0].img;
  img.alt = headphones[0].title;
  listItem.appendChild(img)

  var cardBottom = makeElement('div', 'card__bottom')
  listItem.appendChild(cardBottom)

  var headphoneTitle = makeElement('div', 'headphone__title')
  listItem.appendChild(headphoneTitle);

  var headphoneNamePrice = makeElement('div', 'headphone__name-price')
  listItem.appendChild(headphoneNamePrice);

  var title = makeElement('h3', 'headphone__name', headphones[0].title)
  listItem.appendChild(title)

  var price = makeElement('span', 'headphone__price', headphones[0].price)
  listItem.appendChild(price)

  var headphoneStarsBuy = makeElement('div', 'headphone-stars-buy')
  listItem.appendChild(headphoneStarsBuy);

  var headphoneRate = makeElement('div', 'headphone__rate', headphones[0].rate)
  listItem.appendChild(headphoneRate);

  var starImg = makeElement('img')
  starImg.src = './img/star.svg'
  starImg.alt = 'Рейтинг'
  listItem.appendChild(starImg)

  var headphoneBuy = makeElement('button', 'headphone__buy', 'Купить')
  listItem.appendChild(headphoneBuy);

  return listItem;
}

var cardList = document.querySelector('.cards')
var cardItem = createCard();
cardList.appendChild(cardItem)