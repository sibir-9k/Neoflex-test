function makeElement (tagName, className, text) {
	const element = document.createElement(tagName);
	element.classList.add(className);
	if (text) {
		element.textContent = text;
	}
	return element;
};

function createCard (item) {
  const card = item.item;

	const listItem = makeElement("li", "headphone__card");

	const cardLeft = makeElement("div", "card__left");
	listItem.appendChild(cardLeft);

	const img = makeElement("img", "card__img");
	img.src = card.img;
	img.alt = card.title;
	cardLeft.appendChild(img);

	const divPlusMinus = makeElement("div", "btn__plus-minus");
	cardLeft.appendChild(divPlusMinus);

	const minus = makeElement("button", "minus", "-");
	divPlusMinus.appendChild(minus);

	const number = makeElement("div", "number", item.count);
	divPlusMinus.appendChild(number);

	const plus = makeElement("button", "plus", "+");
	divPlusMinus.appendChild(plus);

	const cardRigth = makeElement("div", "card__rigth");
	listItem.appendChild(cardRigth);

	const headphoneNamePrice = makeElement("div", "headphone__name-price");
	cardRigth.appendChild(headphoneNamePrice);

	const title = makeElement("h3", "headphone__name", card.title);
	headphoneNamePrice.appendChild(title);

	plus.addEventListener("click", function () {
		const updateCount = ++number.innerText;
		setItemCount(updateCount, card.id);
	});

	minus.addEventListener("click", function () {
		if (parseInt(number.innerText) > 1) {
			const updateCount = --number.innerText;
			setItemCount(updateCount, card.id);
		}
	});

	const price = makeElement("span", "headphone__price", card.price + "  ₽");
	headphoneNamePrice.appendChild(price);

	const headphoneDeleteBuy = makeElement("div", "headphone-delete-buy");
	cardRigth.appendChild(headphoneDeleteBuy);

	const headphoneDelete = makeElement("div", "headphone__delete");
	headphoneDeleteBuy.appendChild(headphoneDelete);

	const deleteImg = makeElement("img");
	deleteImg.src = "./img/delete-icon.svg";
	deleteImg.alt = "Удалить";
	headphoneDelete.appendChild(deleteImg);

	deleteImg.addEventListener("click", function () {
		deleteCard(card.id);
	});

	const priceBuy = makeElement("span", "headphone__buy", card.price * item.count + "  ₽");
	headphoneDeleteBuy.appendChild(priceBuy);

	return listItem;
};

 function renderlist () {
	const bucket = sessionStorage.getItem("bucket");
	const cardList = document.querySelector(".grid-container__bucket");
	cardList.innerHTML = "";
	const totalPriceElement = document.querySelector(".total__price");
	let totalPrice = 0;
	if (bucket) {
		console.log(JSON.parse(bucket));
		JSON.parse(bucket).forEach((cardItem) => {
			const cardElement = createCard(cardItem);
			cardList.appendChild(cardElement);
			totalPrice = totalPrice + cardItem.item.price * cardItem.count;
		});
		totalPriceElement.innerText = totalPrice + " ₽";
	}
};
renderlist();

 function deleteCard (cardId) {
	const bucket = sessionStorage.getItem("bucket");
	if (bucket) {
		const parsedBucket = JSON.parse(bucket);
		const filterBucket = parsedBucket.filter((card) => {
			return card.item.id !== cardId;
		});
		sessionStorage.setItem("bucket", JSON.stringify(filterBucket));
		renderlist();
	}
};

function setItemCount(count, cardId) {
	const bucket = sessionStorage.getItem("bucket");
	const parsedBucket = JSON.parse(bucket);
	const updateList = parsedBucket.map((card) => {
		if (card.item.id === cardId) {
			return {...card, count};
		}
		return card;
	});
	sessionStorage.setItem("bucket", JSON.stringify(updateList));
	renderlist();
}
