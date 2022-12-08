//Selectors
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')
//Event Listeners
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions
function addTodo(event){
    event.preventDefault();
    //todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')
    //create LI
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);
    //completed btn
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>'
    completedBtn.classList.add('complete-btn')
    todoDiv.appendChild(completedBtn);
    //delete btn
    const deletedBtn = document.createElement('button');
    deletedBtn.innerHTML = '<i class="fas fa-trash"></i>'
    deletedBtn.classList.add('trash-btn')
    todoDiv.appendChild(deletedBtn);
    //Append to list
    todoList.appendChild(todoDiv);
    //clear todo INPUT VALUE
    todoInput.value ='';
}

function deleteCheck(e) {
    const item = e.target;
    //delete TODO
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        //Animation
        todo.classList.add('fall');
        todo.addEventListener('transitioned', function(){
            todo.remove();
        })
       
    }
    //completed mark
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    console.log(todos)
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
                case "uncompleted":
                    if(!todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
        }
    })
}