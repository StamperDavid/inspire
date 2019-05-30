export default class Todo {
  constructor(data) {
    // this.completed = data.completed
    // this.id = data.id || " "
    this.description = data.description || " "
    // this.user = data.user

  }

  get TodoTemplate() {
    return `
            <li>${this.completed}</li>
            
            <li>${this.description}</li>
           <button onclick ="app.controllers.todoController.removeTodo('${this.id}')"
        `
  }
}

