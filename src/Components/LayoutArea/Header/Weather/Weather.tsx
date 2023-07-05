import service from "../../../../Service/service";
import "./Weather.css";
import { useEffect, useState } from 'react';

function Weather(): JSX.Element {
    const [latitude, setLatitude] = useState<number>();
    const [longitude, setLongitude] = useState<number>();
    const [weather, setWeather] = useState<number>();
    const [location, setLocation] = useState<string>()

    useEffect(() => {
    
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        setLatitude(position.coords.latitude);
                        setLongitude(position.coords.longitude);
                    },
                    error => {
                        console.error(error);
                    }
                );
            } else {
                console.error('Geolocation is not supported by this browser.');
            }
    
    }, []);

    useEffect(() => {
        const fetchWeatherAndLocation = async () => {
            try {
                if (latitude !== undefined && longitude !== undefined) {
                    const temperature = await service.fetchWeatherData(latitude, longitude);
                    setWeather(temperature);
                    const location = await service.getCityFromCoordinates(latitude, longitude);
                    setLocation(location)
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchWeatherAndLocation();
    }, [latitude, longitude]);

    console.log(latitude)
    console.log(longitude)

    return (
        <div className="Weather">
            {weather && <p>Current temperature in {location}: {weather}°C</p>}
        </div>
    );
}

export default Weather;
