window.onload = function() {
  onReady();
}

function onReady () {
  const addToDoForm = document.getElementById('addToForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get text value from To-Do
    let title = newToDoText.value;
    let newLi = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    newLi.textContent = title;
    newLi.appendChild(checkbox);
    toDoList.appendChild(newLi);
    newToDoText.value = '';
  });
}
