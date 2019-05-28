import WeatherService from "./weather-service.js";

var _weatherService = new Weather - Service()

function drawWeather() {
    console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)
}

export default class WeatherController {

    constructor() {
        _weather - Service.addSubscriber('weather', drawWeather)
        _weather - Service.getWeather()
    }

}