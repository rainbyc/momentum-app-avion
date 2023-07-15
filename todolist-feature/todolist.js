let toDoContainer = document.getElementById('toDoList');

function loadToDoItems() {
  let storedItems = localStorage.getItem('toDoItems');
  if (storedItems) {
    toDoContainer.innerHTML = storedItems;
    applyEventListeners();
  }
}

function saveToDoItems() {
  localStorage.setItem('toDoItems', toDoContainer.innerHTML);
}


let toDoHeading = document.createElement('h3');
toDoHeading.innerText = 'To-Do';
toDoHeading.style.cursor = 'pointer';
toDoContainer.before(toDoHeading);


let inputContainer = document.createElement('div');
inputContainer.style.display = 'flex';
inputContainer.style.marginBottom = '10px';
toDoContainer.before(inputContainer);


let inputField = document.createElement('input');
inputField.type = 'text';
inputContainer.appendChild(inputField);


let addToDoButton = document.createElement('button');
addToDoButton.innerText = 'Add';
inputContainer.appendChild(addToDoButton);

inputField.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
addToDoButton.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';

toDoHeading.addEventListener('click', function() {
  if (toDoContainer.style.display === 'none') {
    toDoContainer.style.display = 'block';
    inputContainer.style.display = 'flex';
  } else {
    toDoContainer.style.display = 'none';
    inputContainer.style.display = 'none';
  }
});

addToDoButton.addEventListener('click', function() {
  var listItem = document.createElement('li');
  listItem.classList.add('list-item');
  listItem.innerText = inputField.value;
  toDoContainer.appendChild(listItem);
  inputField.value = "";
  saveToDoItems();

  listItem.style.listStyle ='none';
 

  listItem.addEventListener('click', function() {
    listItem.style.textDecoration = "line-through";
    saveToDoItems();
  });

  listItem.addEventListener('dblclick', function() {
    toDoContainer.removeChild(listItem);
    saveToDoItems();
  });
});


function applyEventListeners() {
  let listItems = toDoContainer.querySelectorAll('.list-item');
  listItems.forEach(function(listItem) {
    listItem.addEventListener('click', function() {
      listItem.style.textDecoration = "line-through";
      saveToDoItems();
    });

    listItem.addEventListener('dblclick', function() {
      toDoContainer.removeChild(listItem);
      saveToDoItems();
    });
  });
}

loadToDoItems();

toDoContainer.style.display = 'none';
inputContainer.style.display = 'none';


