<<<<<<< HEAD
export default class Quote {
  constructor(data) {
    console.log('[QUOTE AND AUTHON]', data);

    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.quote = data.quote
    this.author = data.author
  }

  get Template() {
    return `
    <div class="col">
      <div class="card">
        <img class="weather-display">${this.quote}</img>
        <h5 class="card body">
          <div clsss="card-title">${this.author}</div>
        </h5>
      </div>
    </div>
  `
  }
=======
export default class quote {
    constructor(data) {
        this.quote = data.quote
        this.author = data.quote.author
    }

    get Template() {
        retrurn `
    <div class="col-3">
    <div class="card" style="width: 18rem;">
    <div class"card-body">
    
    
    `
    }
>>>>>>> 0069c2c7683835eb28976acf72f4098388051f11
}