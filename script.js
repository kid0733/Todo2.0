//Selectors
const todoInput= document.querySelector('.todo-input');
const todoButton= document.querySelector('.todo-button');
const todoList= document.querySelector('.todo-list');
//Event Listeners 
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);

//Functions

function addTodo(e){
    e.preventDefault()
    //Todo Div
    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo")
    //Create Li
    const newTodo = document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check Button
    const completedButton =document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton);
    //trash Button
    const trashButton =document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton);

    //Append to list
    todoList.appendChild(todoDiv)

    //Clear todo input value
    todoInput.value=''
}

 function deleteCheck(e){
    const item =e.target;
    //delete todo
    if(item.classList[0]==='trash-btn'){
        const todo=item.parentElement;
        //animation
        todo.classList.add('fall')
        todo.addEventListener('transitioned',function(){
            todo.remove()
        })
    }

    if(item.classList[0]==='complete-btn'){
        const todo=item.parentElement;
        todo.classList.toggle("completed")
    }
 }
