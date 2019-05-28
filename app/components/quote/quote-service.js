
import Quote from "../../models/quote.js";
const quoteApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {
	quote: [],
	error: {},
}
let _subscribers = {
	quote: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class QuoteService {
	get Quote() {
		return new Quote(_state.quote)
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getQuote() {
		console.log("Getting the Daily Quote")
		quoteApi.get()
			.then(res => {
				_setState('quote', new Quote(res.data))
			})
			.catch(err => _setState('error', err.response.data))
	}

}
