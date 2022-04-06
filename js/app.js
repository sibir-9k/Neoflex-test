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

var makeElement = function(tagName, className, text){
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
}


var createCards = function (card) {

 
  var cardTop = makeElement('div', 'card__top');
  listItem.appendChild(cardTop);

  var picture = makeElement('img')
  picture.src = card.img;
  picture.alt = card.title;
  listItem.appendChild(picture)

  var title = makeElement('h3', 'headphone__name', card.title);
  listItem.appendChild(title)

  var price = makeElement('span', 'headphone__price', card.price);
  listItem.appendChild(price);

  var starRate = makeElement('img')
  picture.src = '../img/star.svg';
  listItem.appendChild(starRate)

  var rate = makeElement('div', 'headphone__rate', card.rate);
  listItem.appendChild(rate);

  var buy = makeElement('button', 'headphone__buy')
  

  return listItem;
}

var renderCards = function (cards) {
  var cardList = document.querySelector('.headphone__card');

  var cardItem = createCards(cards[0])

  cardList.appendChild(cardItem);
};

renderCards(headphones);