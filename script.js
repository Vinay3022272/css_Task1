const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add task on button click
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const listItem = document.createElement('li');
  listItem.classList.add('task-item');

  const taskSpan = document.createElement('span');
  taskSpan.innerText = taskText;

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('task-buttons');

  const completeBtn = document.createElement('button');
  completeBtn.classList.add('complete-btn');
  completeBtn.innerText = '✓';
  completeBtn.addEventListener('click', () => {
    listItem.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.innerText = '✕';
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(listItem);
  });

  btnContainer.appendChild(completeBtn);
  btnContainer.appendChild(deleteBtn);

  listItem.appendChild(taskSpan);
  listItem.appendChild(btnContainer);
  taskList.appendChild(listItem);

  taskInput.value = '';
});
