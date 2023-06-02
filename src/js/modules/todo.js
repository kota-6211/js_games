const addForm = document.querySelector('.td-add-form');
const addInput = document.querySelector('.td-add-input');

let todoData = [];

addForm.addEventListener('submit', e => {
    e.preventDefault();
    let todoObj = {
        content: addInput.value.trim(),
        isDone: false
    };
    if (todoObj.content) {
        todoData.push(todoObj);
    };
    addInput.value = "";
    upDateLS();
    console.log(todoData);
});

function upDateLS() {
    localStorage.setItem('myTodo',JSON.stringify(todoData));
}

function getTodoData() {
    return JSON.parse(localStorage.getItem('myTodo'));
}

function createTodoElement(todo) {
    
}