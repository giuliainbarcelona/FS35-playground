// to select an existing element on a page
const first = document.getElementById("first");

// to change to text of an element
first.innerText = "Barcelona";

// to create a new element
const second = document.createElement("div");

// to change to text of an element
second.innerText = "Forth";

// to show it on the page
document.body.appendChild(second);

// take the barcelona element and paint it. Because it is nested inside the style.
first.style.background = "red";

// select muliple elements in a page
const divs = document.querySelectorAll("div");

function changeColor() {
  // to loop through all the elements in an array
  for (const div of divs) {
    // to set a class of the elements
    div.className = "blue";
    div.style.background = input.value;
  }
}

// create an input field
// create a button
// you input a color
// when i click on the buttom
// the text color will be applied to the background color of the divs

const button = document.createElement("button");
button.innerText = "Button";
document.body.appendChild(button);

button.addEventListener("click", changeColor);
const input = document.createElement("input");
document.body.appendChild(input);
