
export default class Quote {
  constructor(data) {
    this.quote = data.quote.body,
      this.author = data.quote.author
  }

  get Template() {
    return `
    <div class="row" id="quotecard">
    <div class="col-6">
    <div class="card">
        <h5><h3>${this.quote}</h3></h5>
        </div>
        <div class="card">
        <h3>${this.author}</h3>
        </div>
        </div>
        </div>
        `
  }
}