
import axios from 'axios';

class WeatherService {

    private weatherbitAPI = "https://api.weatherbit.io/v2.0/current?"
    private APIkey = "&key=f3f81a64deda4de9b29f8d0b72f82a19"

    public async fetchWeatherData(lat: number, lon: number): Promise<number> {
        const response = await axios.get(this.weatherbitAPI + "lat=" + lat + "&lon=" + lon + this.APIkey)
        const data = response.data
        const temperature = data.data[0].temp
        return temperature
    }
}

const weatherService = new WeatherService()
export default weatherService
