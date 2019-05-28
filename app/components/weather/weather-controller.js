import WeatherService from "./weather-service.js";

var _weatherService = new Weather - Service()

function drawWeather() {

    let weather = _weatherService.Weather
    let template = ''
    template = weather.Template
    document.getElementById("weather").innerHTML = template
    console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)
}

export default class WeatherController {

    constructor() {
        _weather - Service.addSubscriber('weather', drawWeather)
        _weather - Service.getWeather()
    }

}