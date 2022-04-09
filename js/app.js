const headphones = [
  {
    id: 1,
    img: "./img/headphones-1.svg",
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
  },
  {
    id: 2,
    img: "./img/headphones-2.svg",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    id: 3,
    img: "./img/headphones-3.svg",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    id: 4,
    img: "./img/headphones-1.svg",
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
  },
  {
    id: 5,
    img: "./img/headphones-2.svg",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    id: 6,
    img: "./img/headphones-3.svg",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  
]

const headPhones = [ 
  {
    id: 7,
    img: "./img/airpods.svg",
    title: "Apple AirPods",
    price: 9527,
    rate: 4.7,
  },
  {
    id: 8,
    img: "./img/gerlax.svg",
    title: "GERLAX GH-04",
    price: 6527,
    rate: 4.7,
  },
  {
    id: 9,
    img: "./img/borofone.svg",
    title: "BOROFONE BO4",
    price: 7527,
    rate: 4.7,
  },
]

// Функция которая будет принимать на вход три строки: имя тега (tagName), 
// имя класса (className) и текстовое содержимое (text) элемента. 
// Внутри неё будем создавать элемент с классом и текстом, а затем возвращать его наружу.
  function makeElement(tagName, className, text) {
  const element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
}

// Функция для создания карточки
 const createCard = function (headphone) {
  const listItem = makeElement('li', 'card-block');
  listItem.classList.add('card')

  const cardTop = makeElement('div', 'card__top')
  listItem.appendChild(cardTop)
 
  const img = makeElement('img', 'card__img')
  img.src = headphone.img;
  img.alt = headphone.title;
  cardTop.appendChild(img)

  const cardBottom = makeElement('div', 'card__bottom')
  listItem.appendChild(cardBottom)

  const headphoneTitle = makeElement('div', 'headphone__title')
  cardBottom.appendChild(headphoneTitle);

  const headphoneNamePrice = makeElement('div', 'headphone__name-price')
  headphoneTitle.appendChild(headphoneNamePrice);

  const title = makeElement('h3', 'headphone__name', headphone.title)
  headphoneNamePrice.appendChild(title)

  const price = makeElement('span', 'headphone__price', headphone.price + '  ₽')
  headphoneNamePrice.appendChild(price)

  const headphoneStarsBuy = makeElement('div', 'headphone-stars-buy')
  headphoneTitle.appendChild(headphoneStarsBuy);

  const headphoneRate = makeElement('div', 'headphone__rate', headphone.rate)
  headphoneStarsBuy.appendChild(headphoneRate);

  const starImg = makeElement('img')
  starImg.src = './img/star.svg'
  starImg.alt = 'Рейтинг'
  headphoneRate.appendChild(starImg)

  const headphoneBuy = makeElement('button', 'headphone__buy', 'Купить')
  headphoneBuy.dataset.id = headphone.id
  headphoneBuy.addEventListener("click", () => addToBucket(headphone));
  headphoneStarsBuy.appendChild(headphoneBuy);

  return listItem;
}


function createSection (sectionId,items){
  const cardList = document.querySelector(sectionId)
  if(cardList){
    for (let i = 0; i < items.length; i++) {
      const cardItem = createCard(items[i]);
      cardList.appendChild(cardItem);  
    }
  }
}
createSection('#cards-1', headphones)
createSection('#cards-2', headPhones)


const cardBuy = document.querySelector(".headphone__buy");
const numBucket = document.querySelector("#bucket-number");

window.onload = function () {
	const cardBuy = document.querySelectorAll(".headphone__buy");
	console.log(cardBuy);
	for (let i = 0; i < cardBuy.length; i++) {
		cardBuy[i].addEventListener("click", function () {
			const card = event.target.closest(".card-block");
			numBucket.innerText = ++numBucket.innerText;
		});
	}
};

const bucket = [];

function addToBucket(item) {
  if(bucket.length){
    const alreadyAddedItem = bucket.find(addedItem => addedItem.item.id === item.id)
    if(alreadyAddedItem){
      alreadyAddedItem.count++;
    } else {
      bucket.push({ item: item, count: 1});
    }
  } else {
    bucket.push({item: item, count: 1});
  }

  sessionStorage.setItem('bucket', JSON.stringify(bucket))
}



