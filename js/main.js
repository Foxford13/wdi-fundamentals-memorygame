
var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'queen',
	suitarts: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}

];


var cardsInPlay = [];

var checkForMatch = function () {

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("Thats why I love you");
	}
    else {
	alert("You failure of a human being. You failed!");
}
}
};
var randomCard = Math.floor(Math.random() * 4);

var flipCard = function () {

var cardId = this.getAttribute("data-id");


this.setAttribute('src', cards[cardId].cardImage);	
console.log("User flipped " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);

console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
checkForMatch();
};

var createBoard = function () {
 for (var i = 0; i < cards.length; i++) {
var cardElement = document.createElement("img");
cardElement.setAttribute("src", "images/back.png");
cardElement.setAttribute("data-id", i);
cardElement.addEventListener("click", flipCard);
document.getElementById("game-board").appendChild(cardElement);

 }
};

createBoard();





