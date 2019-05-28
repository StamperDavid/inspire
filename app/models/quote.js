export default class quote {
    constructor(data) {
        this.quote = data.quote
        this.author = data.quote.author
    }

    get Template() {
        retrurn `
    <div class="col-3">
    <div class="card" style="width: 18rem;">
    
    `
    }
}