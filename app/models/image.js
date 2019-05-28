export default class image {
    constructor(data) {
        this.image = data.imgUrl
    }

    get Template() {
        return `
      <img class="container" src="${this.image}" alt="card image cap"
`
    }
}