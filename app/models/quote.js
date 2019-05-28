export default class Quote {
  constructor(data) {
    console.log('[QUOTE AND AUTHOR]', data);


    this.body = data.body
    this.author = data.author
  }

  get Template() {
    return `
    <div class="col">
      <div class="card">
        <img class="quote-display">${this.body}</img>
        <h5 class="card body">
          <div clsss="card-title">${this.author}</div>
        </h5>
      </div>
    </div>
  `
  }
}