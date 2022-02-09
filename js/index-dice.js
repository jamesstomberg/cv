// Dice 1 code
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let img1src = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", img1src);

// Dice 2 code
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let img2src = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", img2src);

function shoutWinner(winner) {
  document.querySelector("h1").textContent = winner;
}

if (randomNumber1 === randomNumber2) {
  // Draw
  shoutWinner("😮 It's a draw! 😮");
} else if (randomNumber1 > randomNumber2) {
  // Player 1 Wins
  shoutWinner("🥇 Player 1 Wins");
} else if (randomNumber1 < randomNumber2) {
  // Player 2 Wins
  shoutWinner("Player 2 Wins 🥈");
}
