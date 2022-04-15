import config from "../config";
import { IWeatherResponse } from "../interfaces/IWeatherResponse";

const getWeather = async (
  lat: number = config.weather.geo.lat,
  lon: number = config.weather.geo.lon
): Promise<IWeatherResponse> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=${config.weather.units}&lat=${lat}&lon=${lon}&appid=${config.weather.randomId}`
  );
  const weather = await response.json();
  return weather;
};

export default getWeather;
