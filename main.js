let addBtn = document.getElementById('addBtn');
let userInput = document.getElementById('inputTodo');
let ul = document.getElementById('ul');

addBtn.addEventListener('click', addNewTodo);


function addNewTodo () {

  //create a li element
  if(userInput.value == "") {
    alert('Please enter a to-do to continue.');
    throw new Error('enter a value');
  }
  let newListItem = document.createElement('li');
  let newHeader = document.createElement('h1');
  let newTextNode = document.createTextNode(userInput.value);
  newHeader.appendChild(newTextNode);
  newHeader.classList.add('listText');
  newListItem.appendChild(newHeader);
  newListItem.classList.add('listItems');
  ul.appendChild(newListItem);
  userInput.value = "";

  let dButton = document.createElement("button");
  dButton.appendChild(document.createTextNode("X"));
  dButton.classList.add('dBtn');
  newListItem.appendChild(dButton);
  dButton.addEventListener('click', removeItem);
  function removeItem () {
    newListItem.style.display = "none";
  }

  let cButton = document.createElement('button');
  cButton.appendChild(document.createTextNode('Completed'));
  cButton.classList.add('cBtn');
  newListItem.appendChild(cButton);
  cButton.addEventListener('click', itemCompleted);
  function itemCompleted(e) {
    newListItem.classList.toggle("itemTextCompleted");
  }

}

function addToListAfterKey (e) {
  if(e.which === 13) {
    addNewTodo();
  }
}

userInput.addEventListener('keypress', addToListAfterKey);


function get_location() {
  navigator.geolocation.getCurrentPosition(show_map);
}
