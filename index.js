function playSound(file) {
  let audio = new Audio(file);
  audio
    .play()
    .then((r) => console.log(r))
    .catch((e) => console.log(e));
}
function pressKey(key) {
  switch (key) {
    case "w":
      playSound("sounds/tom-1.mp3");
      break;
    case "a":
      playSound("sounds/tom-2.mp3");
      break;
    case "s":
      playSound("sounds/tom-3.mp3");
      break;
    case "d":
      playSound("sounds/tom-4.mp3");
      break;
    case "j":
      playSound("sounds/snare.mp3");
      break;
    case "k":
      playSound("sounds/crash.mp3");
      break;
    case "l":
      playSound("sounds/kick-bass.mp3");
      break;
    default:
      console.log(key);
  }
}

function buttonAnimate(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

let buttons = document.querySelectorAll(".drum");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    pressKey(buttonInnerHTML);
    buttonAnimate(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  pressKey(event.key);
  buttonAnimate(event.key);
});
