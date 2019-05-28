export default class todo {
    constructor(data) {
        this.todo = data.todo
        this.complete = data.complete
        this.delete = data.delete
    }

    get template() {
        return `
  <div class="col-3">
    <dic class"card" style="width: 18rem;">
    <div class="card body">
    <h3 class="card-title">Todo List</h3>
    <h5 class="card-title">${this.todo}</h5>
    <h5 class="card-title">${this.complete}</h5>
    <h5 class="card-title">${this.delete}</h5>
    </div>
    </div>
  `
    }
}