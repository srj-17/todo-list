import todo from './todo';

class Project {
    constructor(name, priority, dueDate) {
        this.name = name;

        // project priority is just for sorting, don't want any complications here, with todos also having priroty
        this.priority = priority;
        this.dueDate = dueDate ? new Date(dueDate) : new Date();
        this.todoList = [];
    }
    
    // we're trusting valid todo to be provided. should we? YES Because we're creating a form in html # TODO
    addTodo(title, description, duedate, priority, notes, checklist) {
        const newTodo = new todo(title, description, duedate, priority, notes, checklist);
        this.todoList.push(newTodo);
        console.log(this.todoList);
        console.log(this.name);
        console.log(this.priority)
    }

    getTodos() {
        return this.todoList;
    }

    // Id's corresponding to where the projects are kept in this.todo list
    // as a consequence, the ids of all todos will be updated
    deleteTodo(id) {
        let index = id;
        this.todoList.splice(index, 1);
    }
}

export default Project;