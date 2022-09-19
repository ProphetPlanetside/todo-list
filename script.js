// Factory function for creating a 'project', a list of 'todo-items'
const projectFactory = (title) => {
    info = () => title;
    // Array of Todo Items that will be assigned to this project
    let projectTodos = [];
    projects.push(this);

    const project = document.createElement('div');
    project.textContent = info();
    project.classList.add('project');
    project.id = projects.length;
    let projectNumber = project.id;
    display.appendChild(project);

    // A button that adds new todo-items, this will be reworked later; it
    // only adds a todo-item to the first project at this time.
    const newTodoBtn = document.createElement('button');
    newTodoBtn.textContent = "Add Todo-Item";
    newTodoBtn.addEventListener('click', () => 
        {todoItemFactory(project.id, prompt('Todo-Item Name:'));});
    newTodoBtn.classList.add('todo-button');
    project.appendChild(newTodoBtn);

    return { title, projectTodos, projectNumber, info };
}

// Factory function for creating a 'todo-item'.
// Only has a title for now, later I will add dueDate, then description, priority
// if desired.
const todoItemFactory = (projectNumber, title) => {
    const info = () => title;
    // Allows editing of the related DOM Project element.
    const project = document.getElementById(projectNumber);
    const todo = document.createElement('div');
    todo.textContent = info();
    // Appends this todoItem to the corresponding project.
    project.appendChild(todo);
    return { title, info };
}

const bodyHTML = document.querySelector('body');

const display = document.querySelector('#display');

// The button that adds new projects
const newProjectBtn = document.createElement('button');
newProjectBtn.textContent = "Add Project";
newProjectBtn.addEventListener('click', () => 
    {projectFactory(prompt('Project Name:'));});
bodyHTML.appendChild(newProjectBtn);

let projects = [];
var defaultProject = projectFactory('Default Project');
var defaultTodo = todoItemFactory(1, 'Todo-Item1');
