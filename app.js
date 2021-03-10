// Define UI Vars
const form = document.querySelector("#task-form");

const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");
const ul=document.querySelector('.collection')

let taskList=[]
// Load all event listeners
// DOM Load event


//// when the window is loaded display function should be invoked
window.addEventListener('load',displayTasks)
// Add task event


//when form is submitted addTask should be invoked
form.addEventListener('submit',addTask)
// Remove task event

//when anywhere click remove click should be invoked
document.addEventListener('click',removeTask)
// Clear task event
clearBtn.addEventListener('click',deleteAllTasks)

// Filter tasks event
filter.addEventListener('keydown',filterTasks)

// Get Tasks from LS

function getTasks() {

///if localstorage is not null
 if( localStorage.getItem('taskList')){

    //localstorage is equal to getItem
  taskList= localStorage.getItem('taskList').split(',')

 return taskList
 }else{
     //if localstorage is nulll then tasklist is null
    return taskList
 }
  
}

function displayTasks() {
////get items from localsTorage   
    getTasks()
 ///addd localstorage items one by one to ul list
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
///if input is not empty
    if(taskInput.value!=''){
    ul.innerHTML+=`<li class="collection-item">${taskInput.value}
    <a class="delete-item secondary-content">
      <i class="fa fa-remove"></i>
    </a>
  </li>`
  ///tasklistin icine value yu at
  taskList.push(taskInput.value)
  ///localstorage a kaydet
  localStorage.setItem('taskList',taskList)
    }
    //invalue should be cleated
    taskInput.value=''
}


// Remove Task
function removeTask(e) {

    ///find grandFather of targetted element and check whether it contains delete item or not
  if(e.target.parentElement.classList.contains('delete-item')){
    //then find the task item without html tags
    let taskItem=e.target.parentElement.parentElement.innerText

    confirm=window.confirm('Are you sure to remove')
    if(confirm){
           //invoke removeTaskFromLocalStorage
    removeTaskFromLocalStorage(taskItem)
    ///remove item from html
    e.target.parentElement.parentElement.remove()
    }
 

  }
}

// Remove from LS
function removeTaskFromLocalStorage(taskItem) {
    ///get index of task that will be removed
    let index= taskList.indexOf(taskItem)
    ///delete item from task list
 
    taskList.splice(index,1)
    //set new tasklist to localStorage
    localStorage.setItem('taskList',taskList)
}

// Delete All Tasks
function deleteAllTasks() {
  taskList=[]
  localStorage.setItem('taskList',taskList)
    ul.innerHTML=''
}

// Filter Tasks
function filterTasks(e) {  
  let searchValue=filter.value.toLowerCase()
    
}
