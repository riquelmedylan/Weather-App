export const getWeather = async (location) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=0a8303cd491645daa9835355210809&q=${encodeURI(
        location
    )}&aqi=no`;

    const response = await fetch(url);
    const respJson = await response.json();
    return respJson;
};
