import WeatherService from "./weather-service.js";

var _weatherService = new WeatherService()

function drawWeather() {

    let weather = _weatherService.Weather
    let template = ''
    template = weather.Template
    document.getElementById("weather").innerHTML = template
    console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)
}

export default class WeatherController {

    constructor() {
        _weatherService.addSubscriber('weather', drawWeather)
        _weatherService.fetchWeather()
    }

}