// alert("hello");
let gamePattern = [];
let userClickedPattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];
let started = false;
let level = 0;

$(document).click(function () {
  if (started === false) {
    nextSequence();
    started = true;
  }
});

function nextSequence() {

  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  // Flash effect using .fadeOut and .fadeIn and play sound
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

$(".btn").click(function () {

  if (started === true) {

    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);

    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length-1);
  }
});

function animatePress(currentColor) {
  let buttonClicked = $("#" + currentColor);
  buttonClicked.addClass("pressed");
  setTimeout(function () {
    buttonClicked.removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success");

    if (userClickedPattern.length === gamePattern.length) {

      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {

    console.log("wrong");
    playSound("wrong");

    // Apply game-over class to body and remove after 200 ms
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    // Change h1 "level-title" to display game over and restart after 1000ms
    $("#level-title").text("Game Over, click anywhere to restart");
    setTimeout(function () {
      // Start Over
      startOver();
    }, 1000)
  }
}

function startOver() {

  // Reset game values
  level = 0;
  gamePattern = [];
  started = false;
}

// Play sound
// let audio = new Audio("sounds/" + randomChosenColor + ".mp3");
// audio.play();

// Flash effect using .css and .animate with opacity attribute
// $("#" + randomChosenColor).css({opacity: 0});
// $("#" + randomChosenColor).animate({opacity: 1}, 400);
