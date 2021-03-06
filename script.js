const gradesColors = {
    "6a": "#FFCE9D",
    "6a+": "#FFBF80",
    "6b": "#FFAA57",
    "6b+": "#FF8C1A",
    "6c": "#CE6600",
    "6c+": "#663300",
    "7a": "#A0E68E",
    "7a+": "#83DF6D",
    "7b": "#68D94A",
    "7b+": "#48BD28",
    "7c": "#24AD00",
    "7c+": "#146600",
    "8a": "#7BB5C3",
    "8a+": "#61A6B8",
    "8b": "#3B90A4",
    "8b+": "#2F7483",
    "8c": "#02677F",
    "8c+": "#013D4B",
    "9a": "#F999A4",
    "9a+": "#F77887",
    "9b": "#F55467",
    "9b+": "#F21831",
    "9c": "#C50017",
    "9c+": "#80000F",
  },
  body = document.getElementsByTagName("body")[0];

function createContent() {
  for (let key in gradesColors) {
    // create the div & input
    let div = document.createElement("div");
    let inputField = document.createElement("input");
    let gradeName = document.createElement("h1");
    // Style the div
    div.style.backgroundColor = gradesColors[key];
    // add eventlisteners
    inputField.addEventListener("input", setBackgroundColor);
    // place the div & input in the body
    div.appendChild(gradeName).textContent = key;
    body.appendChild(div).appendChild(inputField);
  }
}

createContent();

function setBackgroundColor(event) {
  var selectedItem = event.target;
  selectedItem.parentNode.style.backgroundColor = selectedItem.value;
}
