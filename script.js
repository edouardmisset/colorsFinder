const body = document.getElementsByTagName("body")[0];

function createDivs() {
  for (let index = 0; index < 24; index++) {
    // create the div & input
    let div = document.createElement("div");
    let inputField = document.createElement("input");
    // add eventlisteners
    inputField.addEventListener("enter", setBackgroundColor);
    // place the div & input in the body
    body.appendChild(div).appendChild(inputField);
  }
}

createDivs();

function setBackgroundColor(event) {
  console.log(
    "🚀 ~ file: script.js ~ line 20 ~ setBackgroundColor ~ event",
    event
  );
  let element = event.target;
  element.style.backgroundColor = element.value;
}
