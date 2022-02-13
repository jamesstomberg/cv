
// Function to play drum sounds
function playSound(eventChar) {
  switch (eventChar) {
    case "w":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      let tom2 = new Audio("sounds/tom-3.mp3");
      tom2.play();
      break;

    case "k":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(eventChar);
  }

  buttonAnimation(eventChar);
  //buttonAnimation(eventChar);

}

// Select all drum buttons in a list
const drumButtons = document.querySelectorAll(".set .drum");

// forEach drum button, add event listener click
drumButtons.forEach(button => button.addEventListener("click", function() {
  let buttonInnerHTML = this.innerHTML;
  playSound(buttonInnerHTML);

}));

document.addEventListener("keydown", callSound);

function callSound(key) {
  playSound(key.key);
}

function buttonAnimation(currentKey) {

  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100)
}
