// Factory function for creating a 'project', a list of 'todo-items'
const projectFactory = (title) => {
    info = () => title;
    // Adds the current project to the 'projects' array. Mainly used for
    // assigning the correct project.id below.
    projects.push(this);

    const project = document.createElement('div');
    project.textContent = info();
    project.classList.add('project');
    project.id = projects.length;
    let projectNumber = project.id;
    display.appendChild(project);

    // A button that adds new todo-items. 
    const newTodoBtn = document.createElement('button');
    newTodoBtn.textContent = "Add Task";
    newTodoBtn.addEventListener('click', () => 
        {   do{
            var answer = prompt('Task Name:');
        } while(answer !== null && answer === "")
        todoItemFactory(project.id, answer);
        });
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

// The button that adds new projects, doesn't let you enter in a blank value.
const newProjectBtn = document.createElement('button');
newProjectBtn.textContent = "Add Project";
newProjectBtn.addEventListener('click', () => 
    {   do{
            var answer = prompt('Project Name:');
        } while(answer !== null && answer === "")
        projectFactory(answer);
    });
bodyHTML.appendChild(newProjectBtn);

// This array is mainly used for assigning the correct project.id to new projects.
let projects = [];
// The default project that appears at the initial page-load.
var defaultProject = projectFactory('Default Project');
