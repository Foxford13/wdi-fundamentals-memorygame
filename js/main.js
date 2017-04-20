
var cards = ["queen", "queen", "king", "king"];
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
}

var flipCard = function (cardId) {
	
console.log("User flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);
checkForMatch();
}

flipCard(2);
flipCard(3);





