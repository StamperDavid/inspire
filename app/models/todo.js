export default class Todo {
  constructor(data) {
    this._id = data._id
    this._type = data._type
    this._required = data._required
    this._default = data._default

    // description: { type: String, required: true },


    getTemplate(Todos) {
      return
      < div class="container">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${this.id}</h5>
            <button> Chores Sucka!</button>
            <p class="card-text">type: ${this.type}</p>
            <p class="card-text">required: ${this._required}</p>
          </div >

          '
    
        }
    
 