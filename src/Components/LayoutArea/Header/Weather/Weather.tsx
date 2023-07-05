import service from "../../../../Service/service";
import "./Weather.css";
import { useEffect, useState } from 'react';

function Weather(): JSX.Element {
    const [latitude, setLatitude] = useState<number>();
    const [longitude, setLongitude] = useState<number>();
    const [weather, setWeather] = useState<number>();
    const [location, setLocation] = useState<string>()
    const [time, setTime] = useState<string>()

    
    setInterval(()=>{
        const now = new Date()
        const hours = now.getHours()
        const minutes = now.getMinutes()
        let seconds = now.getSeconds().toString();
        if(seconds.length === 1) seconds = "0" + seconds
        const time = hours + ":" + minutes + ":" + seconds
        setTime(time)
    },1000)

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

    return (
        <div className="Weather">
            {weather && <strong>{location}: {time} - {weather}°C</strong>}
        </div>
    );
}

export default Weather;
