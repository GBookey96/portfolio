
import axios from 'axios';

class WeatherService {

    private weatherbitAPI = "https://api.weatherbit.io/v2.0/current?"
    private weatherbitAPIkey = "&key=f3f81a64deda4de9b29f8d0b72f82a19"
    private googleAPIkey = "AIzaSyCSe7Ee4ilTv6prFIAvdHz0xA7ULiVeZyw"

    public async fetchWeatherData(lat: number, lon: number): Promise<number> {
        const response = await axios.get(`${this.weatherbitAPI}lat=${lat}&lon=${lon}${this.weatherbitAPIkey}`)
        const data = response.data
        const temperature = data.data[0].temp
        return temperature
    }

    public async getCityFromCoordinates(lat: number, lon: number): Promise<string> {
        try {
            const response = await axios.get(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${this.googleAPIkey}`
            );
        
            if (response.data.results.length > 0) {
              // Extract the city from the API response
              const city = response.data.results[0].address_components[2]
        
              if (city) {
                return city.long_name;
              }
            }
        
            return 'City not found';
          } catch (error) {
            console.error('Error fetching city:', error);
            return 'Error fetching city';
          }
    }

}

const weatherService = new WeatherService()
export default weatherService
