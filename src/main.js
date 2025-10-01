
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

function createTask() {
  let task = document.getElementById('task').value;
  let description = document.getElementById('description').value;
  let divList = document.getElementById('list');
  let liTask = document.createElement("dt");
  liTask.textContent = task;
  let liDescription = document.createElement("dd");
  liDescription.textContent = description;
  divList.appendChild(liTask);
  divList.appendChild(liDescription);

}

document.addEventListener('DOMContentLoaded', () => {
  let addTaskButton = document.getElementById('addTask');
  addTaskButton.addEventListener('click', createTask);
});

