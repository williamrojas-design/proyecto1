
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

function createTask() {
  let task = document.getElementById('task').value;
  let description = document.getElementById('description').value;
  let divList = document.getElementById('list');

  let taskContainer = document.createElement("div");

  let liTask = document.createElement("dt");
  liTask.textContent = "Tarea: " + task;

  let liDescription = document.createElement("dd");
  liDescription.textContent = "Descripción: " + description;


  let stateTask = document.createElement("div");
  stateTask.textContent="Pendiente";

  let state = stateTask.textContent;


  taskContainer.appendChild(liTask);
  taskContainer.appendChild(liDescription);
  taskContainer.appendChild(stateTask);


  divList.appendChild(taskContainer);

  let taskValue = {tarea : task, descripccion : description, estado: state};
  
let taskLocalStorage = JSON.parse(localStorage.getItem("taskLocalStorage")) || [];
taskLocalStorage.push(taskValue);
localStorage.setItem("taskLocalStorage", JSON.stringify(taskLocalStorage));

}



  let addTaskButton = document.getElementById('addTask');
  addTaskButton.addEventListener('click', createTask);