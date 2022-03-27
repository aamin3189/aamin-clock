import config from "../config";
import { IWeatherResponse } from "../interfaces/IWeatherResponse";

const getWeather = async (): Promise<IWeatherResponse> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=${config.weather.units}&lat=${config.weather.geo.lat}&lon=${config.weather.geo.lon}&appid=${config.weather.randomId}`
  );
  const weather = await response.json();
  return weather;
};

export default getWeather;
