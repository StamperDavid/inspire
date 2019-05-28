const quoteApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/jake/quote/',
	timeout: 3000
});

let _state = {
	todos: [],
	error: {},
}
let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class QuoteService {
	get Quote() {
		return _state.quote
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getQuote() {
		console.log("Getting the Todo List")
		quoteApi.get()
			.then(res => {
				///////////////////////////////////////////////////////////////////////////////////////////////////////
			})
			.catch(err => _setState('error', err.response.data))
	}

}
