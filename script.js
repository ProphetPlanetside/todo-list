// Factory function for creating a 'project', a list of 'todo-items'
const projectFactory = (title) => {
    info = () => title;
    // Adds the current project to the 'projects' array. Mainly used for
    // assigning the correct project.id below.
    projects.push(this);

    // The array of todos/tasks inside of this project.
    let projectTodos = [];

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

    // A button that will delete the current project.
    const removeProjectBtn = document.createElement('button');
    removeProjectBtn.textContent = "Delete Project";
    removeProjectBtn.addEventListener('click', () =>
    {   const targetProject = document.getElementById(project.id);
        targetProject.remove();
        projects.splice(project.id, 1);
    });
    project.appendChild(removeProjectBtn);

    return { title, projectTodos, projectNumber, info };
}

// Factory function for creating a 'todo-item'.
// Only has a title for now, later I will add dueDate, then description, priority
// if desired.
const todoItemFactory = (projectNumber, title) => {
    const info = () => title;
    // Add this todo to the array of todos inside of the corresponding project.
    // ERROR CODE!!
    // projects[projectNumber - 1].projectTodos.push('hello');
    // THIS WORKS. So we can access projects[0], but I need to find another way
    // to push this todoItem into the todo array.
    // console.log(projects[0].info());

    // Allows editing of the related DOM Project element.
    const project = document.getElementById(projectNumber);
    const todo = document.createElement('div');
    todo.textContent = info();
    // Appends this todoItem to the corresponding project.
    project.appendChild(todo);

    // todo.id = projects[projectNumber - 1].projectTodos.length;

    // // A button that will delete the current task.
    // const removeTodoBtn = document.createElement('button');
    // removeTodoBtn.textContent = "Delete Task";
    // removeTodoBtn.addEventListener('click', () =>
    // {   const targetTask = document.getElementById(todo.id);
    //     targetTask.remove();
    //     projects[projectNumber - 1].projectTodos.splice(todo.id, 1);
    // });
    // todo.appendChild(removeProjectBtn);

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
