
export default class Quote {
  constructor(data) {
    this.quote = data.quote.body,
      this.author = data.quote.author
  }

  get Template() {
    return `
        <h5>${this.author}</h5>
        <h3>${this.quote}</h3>
        `
  }
}