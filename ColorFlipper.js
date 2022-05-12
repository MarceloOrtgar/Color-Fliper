const div = document.querySelector("#background");
const boton = document.querySelector("button");
const color = document.querySelector("h5");

console.log(div);
console.log(boton);
console.log(color);

boton.addEventListener("click", (e) => {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor)
  div.style.backgroundColor = randomColor;
  boton.style.backgroundColor = div.style.backgroundColor;
  color.textContent = div.style.backgroundColor;
});


