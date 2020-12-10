const body = document.getElementsByTagName("body")[0];

function createDivs() {
  for (let index = 0; index < 24; index++) {
  // create the div & input
  let div = document.createElement("div");
  let inputField = document.createElement("input");
  // add eventlisteners
  inputField.addEventListener("input", setBackgroundColor);
  // place the div & input in the body
  body.appendChild(div).appendChild(inputField);
}
}

createDivs();

function setBackgroundColor(event) {
  
  var selectedItem = event.target;
  selectedItem.parentNode.style.backgroundColor = selectedItem.value;
}
