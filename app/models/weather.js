export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.city = data.name
    this.kelvin = data.main.temp
  }

  get Template() {
    return `
    <div class="col">
      <div class="card">
        <img class="weather-display">${this.kelvin}</img>
        <h5 class="card body">
          <div clsss="card-title">${this.city}</div>
        </h5>
      </div>
    </div>
  `
  }
}