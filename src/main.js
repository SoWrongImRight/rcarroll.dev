// Intro menu functions
function enterClick() {
  let elements = document.querySelectorAll('.gone:not(.fe,.be)')
  console.log(elements)
  for (let counter = 0; counter < elements.length; counter++) {
    elements[counter].classList.remove("gone")
  }
  document.getElementById("intro").classList.add("gone")
}

function quitClick() {
  const intro = document.querySelector("#intro");
  intro.classList.add("gone");
}

// Intro menu blinking cursor indicator
const startButton = document.querySelector(".start");
const quitButton = document.querySelector(".quit");

startButton.addEventListener("mouseover", startHover);
quitButton.addEventListener("mouseover", quitHover)

function startHover() {
  document.getElementById("start").classList.remove("hidden");
  document.getElementById("quit").classList.add("hidden");
}

function quitHover() {
  document.getElementById("quit").classList.remove("hidden");
  document.getElementById("start").classList.add("hidden");
}

// Intro menu keyboad controls
const introMenu = document.querySelector(".introMenu");
introMenu.addEventListener('keydown', function(event) {
  console.log("toggle")
  const key = event.key;
  if (key == "ArrowUp" || key == "ArrowDown") {
    if (document.getElementById("start").classList.contains("gone")) {
      document.getElementById("start").classList.remove("gone");
      document.getElementById("quit").classList.add("gone");
    } else if (document.getElementById("quit").classList.contains("gone")) {
      document.getElementById("quit").classList.remove("gone");
      document.getElementById("start").classList.add("gone");
    }
  }
});

function onKey(e) {
  console.log("click")
  console.log(e)
  // e = e || window.e
  if (e.keyCode == '38' || e.keyCode == '40') {
    if (document.getElementById("start").classList.contains("gone")) {
      document.getElementById("start").classList.remove("gone");
      document.getElementById("quit").classList.add("gone");
    } else if (document.getElementById("quit").classList.contains("gone")) {
      document.getElementById("quit").classList.remove("gone");
      document.getElementById("start").classList.add("gone");
    }
  }
}

// Skill section list
function skillSelect(selection) {
  let fe = document.querySelector(".fe");
  let be = document.querySelector(".be");
  if (selection == "fe") {    
    be.classList.add("gone");
    fe.classList.remove("gone");
  } else if (selection == "be") {
    fe.classList.add("gone");
    be.classList.remove("gone");
    }
}

// Fetch all the details element.
const details = document.querySelectorAll("details");

// Add the onclick listeners.
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    // Close all the details that are not targetDetail.
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});