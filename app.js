// Define UI Vars
const form = document.querySelector("#task-form");

const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");
const ul=document.querySelector('.collection')
let taskList=[]
// Load all event listeners
// DOM Load event
window.addEventListener('load',displayTasks)
// Add task event
form.addEventListener('submit',addTask)
// Remove task event
document.addEventListener('click',removeTask)
// Clear task event


// Filter tasks event


// Get Tasks from LS
function getTasks() {
 if( localStorage.getItem('taskList')){

  taskList= localStorage.getItem('taskList').split(',')

 return taskList
 }else{
    return taskList
 }
  
}

function displayTasks() {
    getTasks()
 
    taskList.forEach(item=>{
        ul.innerHTML+=`<li class="collection-item">${item}
        <a class="delete-item secondary-content">
          <i class="fa fa-remove"></i>
        </a>
      </li>`
    })
}

// Add Task
function addTask(e) {
    e.preventDefault()
    if(taskInput.value!=''){
    ul.innerHTML+=`<li class="collection-item">${taskInput.value}
    <a class="delete-item secondary-content">
      <i class="fa fa-remove"></i>
    </a>
  </li>`
  taskList.push(taskInput.value)
  localStorage.setItem('taskList',taskList)
    }
    taskInput.innerHTML=''
}


// Remove Task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')){
    let taskItem=e.target.parentElement.parentElement.innerText
    removeTaskFromLocalStorage(taskItem)
    e.target.parentElement.parentElement.remove()

  }
}

// Remove from LS
function removeTaskFromLocalStorage(taskItem) {
 
    let index= taskList.indexOf(taskItem)
    taskList.splice(index,1)
    localStorage.setItem('taskList',taskList)
}

// Delete All Tasks
function deleteAllTasks() {
  
}

// Filter Tasks
function filterTasks(e) {
  
}
