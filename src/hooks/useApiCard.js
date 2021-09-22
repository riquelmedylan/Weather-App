import { useEffect, useState } from "react";
import { getWeather } from "../helpers/getWeather";

export const useApiCard = (location) => {
    const [api, setApi] = useState({
        data: [],
    });

    useEffect(() => {
        getWeather(location).then((data) => {
            setApi({
                name: data.location.name,
                country: data.location.country,
                id: data.location.region,
                temperature: data.current.temp_c,
                icon: data.current.condition.icon,
                text: data.current.condition.text,

                humidity: data.current.humidity,
                temperatureF: data.current.temp_f,
                cloud: data.current.cloud,
                windDirection: data.current.wind_dir,
                gustKph: data.current.gust_kph,
            });
        });
    }, [location]);

    return api;
};
