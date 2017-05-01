
var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'queen',
	suit: 'diamonds',
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
	alert("Just how? These cards are always in the same place!");
}
}
};


var flipCard = function () {

var cardId = this.getAttribute("data-id");
cardsInPlay.push(cards[cardId].rank);
checkForMatch();
this.setAttribute('src', cards[cardId].cardImage);	
console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
//console.log(cards[cardId].cardImage);
//console.log(cards[cardId].suit);
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


var reset = function () {
	window.location.reload();
};

var resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', reset);














