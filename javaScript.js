const form = document.getElementById("form") 
const input = document.getElementById("input") 
const todosUl = document.getElementById("todos") 

const todos = JSON.parse(localStorage.getItem("todos"))
if(todos){
    todos.forEach(todo =>addTodo(todo))
}

form.addEventListener("submit", (e) =>{
    e.preventDefault()

    addTodo();
})

function addTodo(todo){
    let todoText = input.value
    console.log(todoText)

    if(todo){
        todoText=todo.text;

    }

    if(todoText){
    const todoEl = document.createElement("li")
    if(todo && todo.completed){
        todoEl.classList.add('completed')
    
    }
    todoEl.innerHTML = todoText;

    todoEl.addEventListener('click',() =>{
        todoEl.classList.toggle("completed")
    } )
    todoEl.addEventListener('contextmenu', (e) =>{
        e.preventDefault()
            todoEl.remove();
        
    })

    todosUl.appendChild(todoEl);
    input.value = ' ';

    
    }
    

}

function updateLs(){
    const todoEl = document.querySelectorAll("li")

    const todos = []
    todoEl.forEach(todo => {
        todo.push({
            text:todo.innerHTML,
            completed:todo.classList.contains('completed')
        })
    }) 


    localStorage.setItem( 'todos', JSON.stringify(todos))
}