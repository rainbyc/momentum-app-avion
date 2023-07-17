let toDoList = document.getElementById('toDoList');

function loadToDoItems() {
  let storedItems = localStorage.getItem('toDoItems');
  if (storedItems) {
    toDoList.innerHTML = storedItems;
    applyEventListeners();
  }
}

function saveToDoItems() {
  localStorage.setItem('toDoItems', toDoList.innerHTML);
}


let toDoHeading = document.createElement('h3');
toDoHeading.innerText = 'To-Do';
toDoHeading.style.cursor = 'pointer';
toDoList.before(toDoHeading);


let inputContainer = document.createElement('div');
inputContainer.style.display = 'flex';
inputContainer.style.marginBottom = '10px';
toDoList.before(inputContainer);


let inputField = document.createElement('input');
inputField.type = 'text';
inputContainer.appendChild(inputField);


let addToDoButton = document.createElement('button');
addToDoButton.innerText = 'Add';
inputContainer.appendChild(addToDoButton);

inputField.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
addToDoButton.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';

toDoHeading.addEventListener('click', function() {
  if (toDoList.style.display === 'none') {
    toDoList.style.display = 'block';
    inputContainer.style.display = 'flex';
  } else {
    toDoList.style.display = 'none';
    inputContainer.style.display = 'none';
  }
});

addToDoButton.addEventListener('click', function() {
  var listItem = document.createElement('li');
  listItem.classList.add('list-item');
  listItem.innerText = inputField.value;
  toDoList.appendChild(listItem);
  inputField.value = "";
  saveToDoItems();

  listItem.style.listStyle = 'none';


  listItem.addEventListener('click', function() {
    listItem.style.textDecoration = "line-through";
    saveToDoItems();
  });

  listItem.addEventListener('dblclick', function() {
    toDoList.removeChild(listItem);
    saveToDoItems();
  });
});


function applyEventListeners() {
  let listItems = toDoList.querySelectorAll('.list-item');
  listItems.forEach(function(listItem) {
    listItem.addEventListener('click', function() {
      listItem.style.textDecoration = "line-through";
      saveToDoItems();
    });

    listItem.addEventListener('dblclick', function() {
      toDoList.removeChild(listItem);
      saveToDoItems();
    });
  });
}

loadToDoItems();

toDoList.style.display = 'none';
inputContainer.style.display = 'none';