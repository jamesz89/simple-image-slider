// Get Elements
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const sliders = document.querySelectorAll(".slider");
let current = 0;

// Reset sliders display
function reset() {
  sliders.forEach(slider => (slider.style.display = "none"));
}
// Init Slider
function startSlider() {
  reset();
  sliders[0].style.display = "flex";
}
// Go to previous slider
function previous() {
  reset();
  sliders[current - 1].style.display = "flex";
  current--;
}
// Got to Next slider
function next() {
  reset();
  sliders[current + 1].style.display = "flex";
  current++;
}

// Event Listeners for Arrows
arrowRight.addEventListener("click", () => {
  if (current == sliders.length - 1) {
    current = -1;
  }
  next();
});

arrowLeft.addEventListener("click", () => {
  if (current == 0) {
    current = sliders.length;
  }
  previous();
});
