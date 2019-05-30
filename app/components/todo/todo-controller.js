import TodoService from "./todo-service.js";

const _todoService = new TodoService()

function _drawTodos() {
	let todo = _todoService.Todo
	let template = ''
	todo.forEach(todo => {
		template += todo.Template
	})
	document.getElementById('todo').innerHTML = template
}


export default class TodoController {
	constructor() {
		_todoService.addSubscriber("todos", _drawTodos)
		_todoService.getTodos()
	}

	addTodo(event) {
		event.preventDefault()
		var form = event.target
		var todo = {
			description: form.description.value,
		}


		_todoService.addTodo(todo)
	}

	toggleTodoStatus(todoId) {
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		_todoService.removeTodo(todoId)
	}



} 
