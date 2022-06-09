class player {
    name;
    hand;

    constructor(name, hand) {
        this.name = name;
        this.hand = hand;
    }
}

var player1 = new player("철수", "Rock");
var player2 = new player("영희", "Paper");

var randomGBB1 = Math.floor(Math.random() * 3 + 1);
var randomGBB2 = Math.floor(Math.random() * 3 + 1);

switch(randomGBB1) {
    case 1:
        player1.hand = "Rock";
        break;
    case 2:
        player1.hand = "Paper";
        break;
    case 3:
        player1.hand = "Scissors";
        break;
}

switch(randomGBB2) {
    case 1:
        player1.hand = "Rock";
        break;
    case 2:
        player1.hand = "Paper";
        break;
    case 3:
        player1.hand = "Scissors";
        break;
}
var randomImageSRC1 = "images/" + player1.hand + ".png";
var randomImageSRC2 = "images/" + player2.hand + ".png";

var RBBImage1 = document.querySelectorAll("img")[0];
var RBBImage2 = document.querySelectorAll("img")[1];

RBBImage1.setAttribute("src", randomImageSRC1);
RBBImage2.setAttribute("src", randomImageSRC2);

if (player1.hand == "Rock" && player2.hand == "Scissors") 
    document.querySelector('h1').innerHTML = "Player 1 wins"
else if (player1.hand == "Rock" && player2.hand == "Rock") 
    document.querySelector('h1').innerHTML = "Even! Do it again"
else if (player1.hand == "Rock" && player2.hand == "Paper") 
    document.querySelector('h1').innerHTML = "Player 2 wins"

if (player1.hand == "Scissors" && player2.hand == "Scissors") 
    document.querySelector('h1').innerHTML = "Even! Do it again"
else if (player1.hand == "Scissors" && player2.hand == "Rock") 
    document.querySelector('h1').innerHTML = "Player 2 wins"
else if (player1.hand == "Scissors" && player2.hand == "Paper") 
    document.querySelector('h1').innerHTML = "Player 1 wins"

if (player1.hand == "Paper" && player2.hand == "Scissors") 
    document.querySelector('h1').innerHTML = "Player 2 wins"
else if (player1.hand == "Paper" && player2.hand == "Rock") 
    document.querySelector('h1').innerHTML = "Player 1 wins"
else if (player1.hand == "Paper" && player2.hand == "Paper") 
    document.querySelector('h1').innerHTML = "Even! Do it again"

window.onload = function() {
    var btn = document.getElementById('btn');
    btn.onclick = function() {
        window.location.reload();
        btn.onclick = null;
    }
}