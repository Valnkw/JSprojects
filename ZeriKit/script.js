function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

function playSound(e) {
  //script to get keyboard sounds
  const audio = document.querySelector(`audio[data-key="${e.code}"]`); //"keycode" is old, just use "code" instead
  const key = document.querySelector(`.key[data-key="${e.code}"]`);
  if (!audio) return;

  key.classList.add("playing"); // stop func
  audio.currentTime = 0; // back to start
  audio.play();
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition)); // for ending transitions

window.addEventListener("keydown", playSound); //listening for key then func which is playSound
