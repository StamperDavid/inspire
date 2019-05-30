export default class Todo {
  constructor(data) {
    // this.completed = data.completed
    this.id = data._id
    this.description = data.description
    // this.user = data.user

  }

  get Template() {
    return `
            <li>${this.description}</li>
           <button class="btn btn-danger" onclick="app.controllers.todoController.removeTodo('${this.id}')">Delete</button>
        `
  }
}

