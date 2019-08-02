export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    this.name = data.name
    this.temp = data.temp || data.main.temp
  }

  get Template() {
    return `
    <div class="col">
     
        <div class="weather-display">${this.temp}</div>
       
          <div>${this.name}</div>
        </h5>
      </div>
    </div>
  `
  }
} 