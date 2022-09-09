// Factory function for creating a 'project', a list of 'todo-items'
const projectFactory = (title) => {
    // Array of Todo Items that will be assigned to this project
    let projectTodos = [];
    const sayHello = () => console.log('Hello! I am project ' + title);
    return { title, projectTodos, sayHello };
}

// Factory function for creating a 'todo-item'
const todoItemFactory = (title, description, dueDate, priority) => {
    const sayHello = () => console.log('Hello! I am todo item ' + title +
    '. My description is ' + description + ', my Due Date is ' + dueDate + 
    ', and my Priority is ' + priority);
    return { title, description, dueDate, priority, sayHello };
}

// My Testing Code Area
var project = projectFactory('Project 1');
var todo = todoItemFactory('Create action plan', 'The project that I need to do', 
'09.27.22', 'High');
project.sayHello();
todo.sayHello();