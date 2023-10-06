let b = document.getElementById("b");

// function for random number generation
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let a = letters[Math.floor(Math.random() * 16)];
  let b = letters[Math.floor(Math.random() * 16)];
  let c = letters[Math.floor(Math.random() * 16)];
  let d = letters[Math.floor(Math.random() * 16)];
  let e = letters[Math.floor(Math.random() * 16)];
  let f = letters[Math.floor(Math.random() * 16)];
  return "#" + a + b + c + d + e + f;
}

// function for background colour change
function changeBackgroundColor() {
  let color = getRandomColor();
  b.style.backgroundColor = color;
}
