import weatherService from "../../../../Service/weatherService";
import "./Weather.css";
import { useEffect, useState } from 'react';

function Weather(): JSX.Element {
    const [latitude, setLatitude] = useState<number>();
    const [longitude, setLongitude] = useState<number>();
    const [weather, setWeather] = useState<number>();

    useEffect(() => {
        const getLocation = () => {
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
        };

        getLocation();
    }, []);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                if (latitude !== undefined && longitude !== undefined) {
                    const temperature = await weatherService.fetchWeatherData(latitude, longitude);
                    setWeather(temperature);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchWeather();
    }, [latitude, longitude]);

    console.log(latitude)
    console.log(longitude)

    return (
        <div className="Weather">
            {weather && <p>Current temperature: {weather}°C</p>}
        </div>
    );
}

export default Weather;
