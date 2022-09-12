// Factory function for creating a 'project', a list of 'todo-items'
const projectFactory = (title) => {
    info = () => 'Hello! I am project ' + title;
    // Array of Todo Items that will be assigned to this project
    let projectTodos = [];
    projects.push(this);
    const project = document.createElement('div');
    project.textContent = info();
    project.classList.add('project');
    project.id = projects.length;
    let projectNumber = project.id;
    display.appendChild(project);
    return { title, projectTodos, projectNumber, info };
}

// Factory function for creating a 'todo-item'.
// Only has a title for now, later I will add dueDate, then description, priority
// if desired.
const todoItemFactory = (projectNumber, title) => {
    const info = () => 'Hello! I am todo item ' + title;
    const project = document.getElementById(projectNumber);
    const todo = document.createElement('div');
    todo.textContent = info();
    project.appendChild(todo);
    return { title, info };
}

const display = document.querySelector('#display');
let projects = [];
var defaultProject = projectFactory('Default Project');
var defaultTodo = todoItemFactory(1, 'Todo-Item1');
