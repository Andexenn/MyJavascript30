function removeTransition(e) {
    if (e.propertyName !== "transform") return; //skip if it is not a transform
    e.target.classList.remove("playing");
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //* stop the function

  key.classList.add("playing");
  audio.currentTime = 0; //* rewind to the start
  audio.play();
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);