// Factory function for creating a 'todo'
const todoFactory = (title, description, dueDate, priority) => {
    const sayHello = () => console.log('Hello! I am todo item ' + title +
    '. My description is ' + description + ', my Due Date is ' + dueDate + 
    ', and my Priority is ' + priority);
    return { title, description, dueDate, priority, sayHello };
}

var todo = todoFactory('Project', 'The project that I need to do', 
'09.27.22', 'High');
todo.sayHello();