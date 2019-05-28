import QuoteService from "./quote-service.js";

var _quoteService = new QuoteService()

function drawQuote() {

  let quote = _quoteService.quote
  let template = ''
  template = quote.Template
  document.getElementById("quote").innerHTML = template
  console.log("THE AUTHOR SAYS", _quoteService.Quote)
}

export default class WeatherController {

  constructor() {
    _quoteService.addSubscriber('quote', drawQuote)
    _quoteService.getQuote()
  }

}

}
