import QuoteService from "./quote-service.js";

//Private
let _qs = new QuoteService()

function drawQuote() {
  console.log("THE QUOTE MAN SAYS:", _qs.Quote)
  //debugger
  let quote = _qs.Quote
  let template = quote.Template
  document.getElementById('quote').innerHTML = template
}

//Public
export default class QuoteController {

  constructor() {
    _qs.addSubscriber('quote', drawQuote)
    _qs.getQuote()
  }
}


