import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

let taskLocalStorage;
let divList = document.getElementById("list");
let idTask = 0;
function createTask() {
  let task = document.getElementById("task").value;
  let description = document.getElementById("description").value;

  let taskContainer = document.createElement("div");

  let liTask = document.createElement("dt");
  liTask.textContent = "Tarea: " + task;


  let liDescription = document.createElement("dd");
  liDescription.textContent = "Descripción: " + description;

  let stateTask = document.createElement("div");
  stateTask.textContent = "Pendiente";

  let state = stateTask.textContent;

  let changeStateButton = document.createElement("button");
  changeStateButton.id= idTask;
  changeStateButton.textContent="Cambiar Estado";
  changeStateButton.onclick = () => changeStateTask(changeStateButton.id);

  taskContainer.appendChild(liTask);
  taskContainer.appendChild(liDescription);
  taskContainer.appendChild(stateTask);
  taskContainer.appendChild(changeStateButton);
  divList.appendChild(taskContainer);

  let taskValue = { tarea: task, descripcion: description, estado: state, id :idTask};
idTask++;
  taskLocalStorage = JSON.parse(localStorage.getItem("taskLocalStorage")) || [];
  taskLocalStorage.push(taskValue);
  localStorage.setItem("taskLocalStorage", JSON.stringify(taskLocalStorage));
}

function showTask() {
  
  divList.innerHTML = "";
  taskLocalStorage = JSON.parse(localStorage.getItem("taskLocalStorage")) || [];
    if (taskLocalStorage.length > 0) {
    idTask = Math.max(...taskLocalStorage.map(t => t.id)) + 1;
  } else {
    idTask = 0;
  }
  taskLocalStorage.forEach((taskValue) => {
    let taskContainer = document.createElement("div");

    let liTask = document.createElement("dt");
    liTask.textContent = "Tarea: " + taskValue.tarea;

    let liDescription = document.createElement("dd");
    liDescription.textContent = "Descripción: " + taskValue.descripcion;

    let stateTask = document.createElement("div");
    stateTask.textContent = taskValue.estado;

     let changeStateButton = document.createElement("button");
  changeStateButton.id= taskValue.id;
  changeStateButton.textContent="Cambiar Estado";
  changeStateButton.onclick = () => changeStateTask(changeStateButton.id);

    taskContainer.appendChild(liTask);
    taskContainer.appendChild(liDescription);
    taskContainer.appendChild(stateTask);
    taskContainer.appendChild(changeStateButton);
    divList.appendChild(taskContainer);
  });
}

function changeStateTask(id) {
  taskLocalStorage = JSON.parse(localStorage.getItem("taskLocalStorage")) || [];
  for(let i=0; i<taskLocalStorage.length; i++){
      if(parseInt(id)===taskLocalStorage[i].id){
        taskLocalStorage[i].estado=="Pendiente" ? taskLocalStorage[i].estado= "Completado" : taskLocalStorage[i].estado="Pendiente";
        console.log(taskLocalStorage[i].estado);
        localStorage.setItem("taskLocalStorage", JSON.stringify(taskLocalStorage));
        
      }
  }
showTask();

}

window.addEventListener("load", showTask);
let addTaskButton = document.getElementById("addTask");
addTaskButton.addEventListener("click", createTask);
