document.addEventListener('DOMContentLoaded', function () {
  const submitForm = document.getElementById('form');
  submitForm.addEventListener('submit', function (event) {
      event.preventDefault();
      addTodo();
  });
});

function addTodo() {
  const textTodo = document.getElementById('title').value;
  const timestamp = document.getElementById('date').value;

  const generateID = generateId();
  const todoObject = generateTodoObject(generateID, textTodo, timestamp, false);
  todos.push(todoObject);

  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function generateId() {
  return +new Date();
}

function generateTodoObject(id, task, timestamp, isCompleted) {
  return { id, task, timestamp, isCompleted };
}

const todos = [];
const RENDER_EVENT = 'render-todo';

document.addEventListener(RENDER_EVENT, function () {
  const uncompletedTODOList = document.getElementById('todos');
  const completedTODOList = document.getElementById('completed-todos');

  uncompletedTODOList.innerHTML = '';
  completedTODOList.innerHTML = '';

  for (const todoItem of todos) {
      const todoElement = makeTodo(todoItem);
      if (!todoItem.isCompleted) {
          uncompletedTODOList.append(todoElement);
      } else {
          completedTODOList.append(todoElement);
      }
  }
});

function makeTodo(todoObject) {
  const textTitle = document.createElement('h2');
  textTitle.innerText = todoObject.task;

  const textTimestamp = document.createElement('p');
  textTimestamp.innerText = todoObject.timestamp;

  const textContainer = document.createElement('div');
  textContainer.classList.add('inner');
  textContainer.append(textTitle, textTimestamp);

  const container = document.createElement('div');
  container.classList.add('item', 'shadow');
  container.append(textContainer);
  container.setAttribute('id', `todo-${todoObject.id}`);

  if (todoObject.isCompleted) {
      const undoButton = document.createElement('button');
      undoButton.classList.add('undo-button');
      undoButton.addEventListener('click', function () {
          undoTaskFromCompleted(todoObject.id);
      });

      const trashButton = document.createElement('button');
      trashButton.classList.add('trash-button');
      trashButton.addEventListener('click', function () {
          removeTaskFromCompleted(todoObject.id);
      });

      container.append(undoButton, trashButton);
  } else {
      const checkButton = document.createElement('button');
      checkButton.classList.add('check-button');
      checkButton.addEventListener('click', function () {
          addTaskToCompleted(todoObject.id);
      });

      container.append(checkButton);
  }

  return container;
}

function addTaskToCompleted(todoId) {
  const todoTarget = findTodo(todoId);
  if (todoTarget == null) return;

  todoTarget.isCompleted = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function findTodo(todoId) {
  return todos.find(todo => todo.id === todoId) || null;
}

function removeTaskFromCompleted(todoId) {
  const todoIndex = findTodoIndex(todoId);
  if (todoIndex === -1) return;

  todos.splice(todoIndex, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function undoTaskFromCompleted(todoId) {
  const todoTarget = findTodo(todoId);
  if (todoTarget == null) return;

  todoTarget.isCompleted = false;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function findTodoIndex(todoId) {
  return todos.findIndex(todo => todo.id === todoId);
}

/* Fitur Simpan Data ke Local Storage */
function saveData() {
  if (typeof Storage !== 'undefined') {
      localStorage.setItem('TODO_APPS', JSON.stringify(todos));
  }
}

function loadDataFromStorage() {
  const serializedData = localStorage.getItem('TODO_APPS');
  if (serializedData !== null) {
      todos.push(...JSON.parse(serializedData));
  }
  document.dispatchEvent(new Event(RENDER_EVENT));
}

/* Load Data Saat Halaman Dibuka */
window.addEventListener('load', function () {
  if (typeof Storage !== 'undefined') {
      loadDataFromStorage();
  }
});
