export default class Todo {
  constructor(data) {
    // this.completed = data.completed
    this.id = data._id
    this.completed = data.completed
    this.description = data.description
    // this.user = data.user

  }

  get Template() {
    if (this.completed) {
      return `
            <li class="done">${this.description}</li>
           <button class="btn btn-danger" onclick="app.controllers.todoController.removeTodo('${this.id}')">Delete</button>
           <button class="btn btn-primary" onclick="app.controllers.todoController.toggleTodoStatus('${this.id}')">completed</button>
           
        `
    } else {
      return `
            <li>${this.description}</li>
           <button class="btn btn-danger" onclick="app.controllers.todoController.removeTodo('${this.id}')">Delete</button>
           <button class="btn btn-primary" onclick="app.controllers.todoController.toggleTodoStatus('${this.id}')">completed</button>
           
        `
    }
  }
}

