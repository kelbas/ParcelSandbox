const container = document.getElementById('app')
const todos = [
    {
        name: 'come to school',
        completed: true,
    },
    {
        name: 'learn javascript',
        completed: false,
    },
    {
        name: 'learn debugger',
        completed: false,
    },
]

const todoInput = document.createElement('input')
todoInput.setAttribute('type', 'text')
container.appendChild(todoInput)
todoInput.addEventListener('keypress', event => {
    if (event.which === 13) {
        const newTodo = {
            name: event.target.value,
            completed: false,
        }
        todos.push(newTodo)
        renderTodos(todos)
    }
})

const todoList = document.createElement('ul')
container.appendChild(todoList)
renderTodos(todos)

function renderTodos(todos) {
    todoList.innerHTML = '';
    for (const todo of todos) {
        const todoItem = document.createElement('li')
        todoItem.textContent = todo.name
        if (todo.completed) {
            todoItem.style.setProperty('text-decoration', 'line-through')
        }
        const toggle = document.createElement('input')
        toggle.setAttribute('type', 'checkbox')
        toggle.checked = todo.completed
        todoList.addEventListener('click', function(){
            if (toggle.checked == true) {
                todo.completed = true
                todoItem.style.setProperty('text-decoration', 'line-through')
                console.log("todo: " + todo.completed)
            } else {
                todo.completed = false
                todoItem.style.setProperty('text-decoration', 'none')
                console.log("todo: " + todo.completed);
            }
        })

        todoItem.appendChild(toggle)
        todoList.appendChild(todoItem)
    }
}

// TODO:
// 1. Fix bug when all items are being appended.
// 2. Update todo completed state on checked.
// 3. Implement filter. Hide all completed todos.
