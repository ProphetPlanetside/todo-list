// Factory function for creating a 'project', a list of 'todo-items'
const projectFactory = (title) => {
    info = () => 'Hello! I am project ' + title;
    // Array of Todo Items that will be assigned to this project
    let projectTodos = [];
    projects.push(this);
    const project = document.createElement('div');
    project.textContent = info();
    display.appendChild(project);
    return { title, projectTodos, info };
}

// Factory function for creating a 'todo-item'
const todoItemFactory = (project, title, description, dueDate, priority) => {
    const info = () => 'Hello! I am todo item ' + title +
    '. My description is ' + description + ', my Due Date is ' + dueDate + 
    ', and my Priority is ' + priority;
    const todo = document.createElement('div');
    todo.textContent = info();
    project.appendChild(todo);
    return { title, description, dueDate, priority, info };
}

// My Testing Code Area
// var project = projectFactory('Project 1');
// var todo = todoItemFactory('Create action plan', 'The project that I need to do', 
// '09.27.22', 'High');
// project.sayHello();
// todo.sayHello();

const display = document.querySelector('#display');
let projects = [];
var defaultProject = projectFactory('Default Project');
// var defaultTodo = todoItemFactory(defaultProject, 'Todo-Item1', "Email Boss", 
// '09.20.22', 'High');
console.log(projects[0].info());