document.getElementById('task-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const taskInput = document.getElementById('task-input');
  const deadlineInput = document.getElementById('deadline-input');
  const priorityInput = document.getElementById('priority-input');
  const labelInput = document.getElementById('label-input');

  const task = taskInput.value;
  const deadline = deadlineInput.value;
  const priority = priorityInput.value;
  const label = labelInput.value;

  if (task.trim() === '') {
    alert('Please enter a task.');
    return;
  }

  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <strong>${task}</strong> - Deadline: ${deadline} - Priority: ${priority} - Label: ${label}
  `;

  document.getElementById('task-list').appendChild(listItem);

  taskInput.value = '';
  deadlineInput.value = '';
  priorityInput.value = 'low';
  labelInput.value = '';
});
