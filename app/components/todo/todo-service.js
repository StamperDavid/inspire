import Todo from "../../models/todo.js";
//Private
const todoApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/David/todos'
});

let _state = {
    todos: [],
    errors: {}
}

let _subscribers = {
    todos: [],
    errors: []
}

function _setState(prop, data) {
    _state[prop] = data
    _subscribers[prop].forEach(fn => fn())
}
//public
export default class TodoService {
    get TodoError() {
        return _state.error
    }

    get Todo() {
        return _state.todos
    }

    addSubscriber(prop, fn) {
        _subscribers[prop].push(fn)
    }

    getTodos() {
        console.log("Getting My Todo's List")
        todoApi.get()
            .then(res => {
                console.log(res)
                let data = res.data.data.map(t => new Todo(t))
                _setState('todos', data)
            })
    }

    addTodo(todo) {
        todoApi.post('', todo)
            .then(res => {
                console.log(res)
                this.getTodos()
            })
        //.catch(err => _setState('error', err.response.data))
    }

    toggleTodoStatus(todoId) {
        let todo = _state.todos.find(todo => todo.id == todoId)
        todo.completed = !todo.completed
        todoApi.put(todoId, todo)
            .then(res => {
                this.getTodos()
            })
        // .catch(err => _setState('error', err.response.data))
    }

    removeTodo(todoId) {
        console.log(todoId)
        todoApi.delete(todoId)
            .then(res => {
                this.getTodos()
            })


    }

}