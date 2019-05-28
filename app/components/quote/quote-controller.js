import QuoteService from "./quote-service.js";

var _quoteService = new QuoteService()

function drawQuote() {

  let quote = _quoteService.Quote
  // let template = quote.Template
  //template = quote.Template
  document.getElementById("quote").innerHTML = quote.Template
  console.log("THE AUTHOR SAYS", _quoteService.Quote)
}

export default class QuoteController {

  constructor() {
    _quoteService.addSubscriber('quote', drawQuote)
    _quoteService.getQuote()
  }

}


