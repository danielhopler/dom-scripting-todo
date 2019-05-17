function onReady() {
  let toDos = [];
  const addToDoForm = document.getElementById("addToDoForm");
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo() {
    if (!newToDoText.value) {return;}
    toDos.push({
      title: newToDoText.value,
      complete: false
    });

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach( eachToDo => {
      const newToDo = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';

      newToDo.textContent = eachToDo.title;
      toDoList.appendChild(newToDo);
      newToDo.appendChild(checkbox);
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  });

  renderTheUI();
}


window.onload = function() {
  onReady();
}
